import React, { Component } from 'react';

import BarChart from './components/charts/BarChart/BarChart';

import './App.css';

import * as data from './data/BarChart.json';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h1>Sample Data Visualization</h1>
                </header>
                    <BarChart
                        viewBoxWidth={400}
                        viewBoxHeight={400}
                        data={data}
                        style={{
                            backgroundColor: '#ccc'
                        }}
                    />
            </div>
        );
    }
}

export default App;
