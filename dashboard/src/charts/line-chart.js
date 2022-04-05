import EChartsReact from "echarts-for-react";

const LineChart = ({ csvData }) => {

    console.log('csvData:', csvData);
    let releaseYearList = [];
    csvData.forEach(data => {
        if (!releaseYearList.includes(data.Year_of_Release) && data.Year_of_Release !== 'N/A' && data.Year_of_Release !== undefined) {
            releaseYearList.push(data.Year_of_Release);
        }
    });
    releaseYearList.sort();
    console.log('releaseYear:', releaseYearList);

    

    return (
        <div>
            {/* <EChartsReact /> */}
            Line Chart
        </div>
    )
};

export default LineChart;