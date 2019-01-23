import React, { Component, CSSProperties } from 'react';

import { scaleLinear } from 'd3-scale';

import './BarChart.css';

interface Props {
    width: number,
    height: number,
    data: object[];
    style?: CSSProperties;
}

export default class BarChart extends Component<Props> {
    public render() {
        const { width, height, style } = this.props;

        const data = [10, 20, 30, 40, 80];
        const yScale = scaleLinear()
            .domain([0, Math.max(...data)])
            .rangeRound([height, 0]);
        const barInterval = 10;
        const barWidth = Math.floor((width - (data.length - 1) * barInterval) / data.length);

        return (
            <svg
                width={width}
                height={height}
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
                        height={height - yScale(element)}
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
