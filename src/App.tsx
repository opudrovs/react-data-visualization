import React, { Component } from 'react';

import BarChart from './components/charts/BarChart/BarChart';

import './styles/App.css';

import * as data from './data/BarChart.json';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="appHeader">
                    <h1>Sample Data Visualization</h1>
                </header>
                <div className="barChart">
                    <BarChart
                        data={data}
                        style={{ backgroundColor: '#ccc' }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
