import EChartsReact from "echarts-for-react";

const BarChart = ({ csvData }) => {

    console.log('Parsed data:', csvData);

    let genreList = [];
    csvData.forEach(element => {
        if (element.Genre !== undefined) {
            if (!genreList.includes(element.Genre)) {
                genreList.push(element.Genre);
            }
        }
    });
    console.log('genreList:', genreList);

    const regionList = ['EU_Sales', 'JP_Sales', 'NA_Sales', 'Other_Sales'];

    let data = { 'EU_Sales': [], 'JP_Sales': [], 'NA_Sales': [], 'Other_Sales': [] };

    // xAxis's data should be genreList ['Sports', 'Strategy', 'Racing', 'Action', ...]
    // series: [{name: 'EU_Sales', data: [100, 200, 300]}, {name: 'NA_Sales', data: [400, 500, 600]}, ...]
    // data = {'EU_Sales': [100, 200, 300], ...}

    genreList.forEach(genre => {
        let eu = 0;
        let jp = 0;
        let na = 0;
        let other = 0;
        csvData.forEach(element => {
            if (element.Genre === genre) {
                eu += parseInt(element.EU_Sales);
                jp += parseInt(element.JP_Sales);
                na += parseInt(element.NA_Sales);
                other += parseInt(element.Other_Sales);
            };
        });
        data['EU_Sales'].push(eu);
        data['JP_Sales'].push(jp);
        data['NA_Sales'].push(na);
        data['Other_Sales'].push(other);
    });

    console.log('data:', data);

    const options = {
        title: {
            text: 'Sales Per Genre by Regions'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        xAxis: [{
            type: 'category',
            data: genreList,
        }],
        yAxis: [{
            type: 'value',
        }],
        series: [
            {
                name: 'EU_Sales',
                type: 'bar',
                stack: 'sales',
                emphasis: {
                    focus: 'series',
                },
                data: data['EU_Sales'],
            },
            {
                name: 'JP_Sales',
                type: 'bar',
                stack: 'sales',
                emphasis: {
                    focus: 'series',
                },
                data: data['JP_Sales'],
            },
            {
                name: 'NA_Sales',
                type: 'bar',
                stack: 'sales',
                emphasis: {
                    focus: 'series',
                },
                data: data['NA_Sales'],
            },
            {
                name: 'Other_Sales',
                type: 'bar',
                stack: 'sales',
                emphasis: {
                    focus: 'series',
                },
                data: data['Other_Sales'],
            }
        ]
    };

    return (
        <div>
            <EChartsReact option={options}/>
        </div>
    );
};

export default BarChart;