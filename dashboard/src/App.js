import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import Papa from 'papaparse';
import './App.css';
import VerticalBar from "./charts/vertical-bar";
import HorizontalBar from "./charts/horizontal-bar";
import Nightingale from "./charts/nightingale";
import AnimatedText from "./charts/animated-text";
import LineChart from "./charts/line-chart";
import Sunburst from "./charts/sunburst";

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

  return (
    <div className="App">
      <div id="header">
        <h1>Video Game Stats</h1>
      </div>
      <main>
        <section className="column">
          <div id="barVertical">
            <VerticalBar csvData={parsedData} />
          </div>
          <div id="barHorizontal">
            <HorizontalBar csvData={parsedData} />
          </div>
        </section>
        <section className="column">
          <div id="nightingale">
            <Nightingale csvData={parsedData} />
          </div>
          <div id="text">
            <AnimatedText />
          </div>
        </section>
        <section className="column">
          <div id="line">
            <LineChart csvData={parsedData} />
          </div>
          <div id="sunburst">
            <Sunburst csvData={parsedData} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
