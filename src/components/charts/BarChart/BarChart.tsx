import React, { Component, CSSProperties } from 'react';

import { select } from 'd3-selection';

import './BarChart.css';

interface Props {
    data: object[];
    style?: CSSProperties;
}

export default class BarChart extends Component<Props> {
    private svgRef?: SVGElement | null;

    public componentDidMount() {
        this.drawChart(this.props.data);
    }

    private drawChart(data: object[]) {
        const svg = select(this.svgRef!);
        // Draw chart here.
    }

    public render() {
        const { style } = this.props;

        return (
            <svg
                className="barChart"
                style={style}
                ref={ref => (this.svgRef = ref)}
            />
        );
    }
}
