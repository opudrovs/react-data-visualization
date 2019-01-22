import React, { Component } from 'react';

import BarChart from './components/charts/BarChart/BarChart';

import './styles/App.css';

const data = require('./data/BarChart.json');

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header"/>
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
