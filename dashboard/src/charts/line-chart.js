import EChartsReact from "echarts-for-react";

const LineChart = ({ csvData }) => {

    let releaseYearList = [];
    csvData.forEach(data => {
        if (!releaseYearList.includes(data.Year_of_Release) && data.Year_of_Release !== 'N/A' && data.Year_of_Release !== undefined) {
            releaseYearList.push(data.Year_of_Release);
        }
    });
    releaseYearList.sort();

    let data = { 'EU_Sales': [], 'JP_Sales': [], 'NA_Sales': [], 'Other_Sales': [] };

    releaseYearList.forEach(year => {
        let eu = 0;
        let jp = 0;
        let na = 0;
        let other = 0;
        csvData.forEach(element => {
            if (element.Year_of_Release === year) {
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

    const options = {
        title: {
            text: 'Sales Per Year by Regions',
            textStyle: {
                color: '#ffffff',
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            y: 'bottom',
            padding: [0, 0, 15, 0],
            textStyle: {
                color: '#ffffff',
            },
            type: 'scroll',
            pageIconColor: '#ffffff',
            pageTextStyle: {
                color: '#ffffff',
            },
            data: ['EU_Sales', 'JP_Sales', 'NA_Sales', 'Other_Sales'],
        },
        xAxis: {
            type: 'category',
            data: releaseYearList,
            axisLabel: {
                color: '#ffffff',
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#ffffff',
            }
        },
        series: [
            {
                name: 'EU_Sales',
                type: 'line',
                stack: 'total',
                data: data['EU_Sales'],
                areaStyle: {},
                emphasis: {
                    focus: 'series',
                },
                showSymbol: false,
            },
            {
                name: 'JP_Sales',
                type: 'line',
                stack: 'total',
                data: data['JP_Sales'],
                areaStyle: {},
                emphasis: {
                    focus: 'series',
                },
                showSymbol: false,
            },
            {
                name: 'NA_Sales',
                type: 'line',
                stack: 'total',
                data: data['NA_Sales'],
                areaStyle: {},
                emphasis: {
                    focus: 'series',
                },
                showSymbol: false,
            },
            {
                name: 'Other_Sales',
                type: 'line',
                stack: 'total',
                data: data['Other_Sales'],
                areaStyle: {},
                emphasis: {
                    focus: 'series',
                },
                showSymbol: false,
            }
        ]
    };

    return (
        <div>
            <EChartsReact option={options} style={{ height: '40vh', width: '30vw' }} />
        </div>
    )
};

export default LineChart;