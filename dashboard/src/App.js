import ReactEcharts from "echarts-for-react";
import './App.css';

function App() {

  const barOptions = {
    title: { text: 'bar chart' },
    tooltip: {},
    xAxis: {
      data: ['ps4', 'xbox', 'switch', 'pc']
    },
    yAxis: {},
    series: [{
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10]
    }]
  };

  return (
    <div className="App">
      <div id="header">
        <h1>Video Game Stats</h1>
      </div>
      <main>
        <section className="column">
          <div id="barVertical">
            <ReactEcharts option={barOptions} />
          </div>
          <div id="barHorizontal">
            <ReactEcharts option={barOptions} />
          </div>
        </section>
        <section className="column">
          <div id="nightingale">
            <ReactEcharts option={barOptions} />
          </div>
          <div id="text">
            <ReactEcharts option={barOptions} />
          </div>
        </section>
        <section className="column">
          <div id="line">
            <ReactEcharts option={barOptions} />
          </div>
          <div id="sunburst">
            <ReactEcharts option={barOptions} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
