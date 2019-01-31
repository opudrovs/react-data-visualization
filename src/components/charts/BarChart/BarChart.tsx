import React, { Component, CSSProperties } from 'react';

import { scaleLinear } from 'd3-scale';

import './BarChart.css';

interface DataPoint
{
    year: string,
    projects: {
        react: number,
        angular: number
    }
}

interface Props {
    viewBoxWidth: number,
    viewBoxHeight: number,
    data: DataPoint[];
    style?: CSSProperties;
}

export default class BarChart extends Component<Props, object> {
    public render() {
        const { viewBoxWidth, viewBoxHeight, style } = this.props;

        const data = [10, 20, 30, 40, 80]; // Temp data to use instead of data in props, for now.
        const yScale = scaleLinear()
            .domain([0, Math.max(...data)])
            .rangeRound([viewBoxHeight, 0]);
        const barInterval = 10;
        const barWidth = Math.floor((viewBoxWidth - (data.length - 1) * barInterval) / data.length);

        return (
            <svg
                viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                style={style}
                className="barChart"
            >
                {data.map((element, index) =>
                    <rect
                        key={`bar ${index}`}
                        x={index * (barWidth + barInterval)}
                        y={yScale(element)}
                        rx={6}
                        ry={6}
                        width={barWidth - 1}
                        height={viewBoxHeight - yScale(element)}
                        style={{
                            fill: '#0000ff',
                            strokeWidth: 3,
                            stroke: '#00ccff'
                        }}
                    />,
                )}
            </svg>
        );
    }
}
