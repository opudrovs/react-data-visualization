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
                        width={400}
                        height={400}
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
