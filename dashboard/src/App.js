import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import Papa from 'papaparse';
import './App.css';
import BarChart from "./charts/bar-chart";

function App() {

  const [parsedData, setParsedData] = useState([]); // parsed data from csv

  useEffect(() => {
    Papa.parse('/Video_Games_Sales_as_at_22_Dec_2016.csv', { // csv file is placed in public folder
      download: true,
      header: true,
      complete: results => {
        setParsedData(results.data);
      }
    })
  }, []);

  // console.log('Parsed data:', parsedData);

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
            {/* <ReactEcharts option={barOptions} /> */}
            <BarChart csvData={parsedData} />
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
