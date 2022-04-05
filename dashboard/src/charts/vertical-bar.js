import EChartsReact from "echarts-for-react";

const VerticalBar = ({ csvData }) => {

    let genreList = [];
    csvData.forEach(element => {
        if (element.Genre !== undefined) {
            if (!genreList.includes(element.Genre)) {
                genreList.push(element.Genre);
            }
        }
    });

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

    const options = {
        title: {
            text: 'Sales Per Genre by Regions',
            textStyle: {
                color: '#ffffff',
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            y: 'bottom',
            padding: [0, 0, 10, 0],
            textStyle: {
                color: '#ffffff',
            },
            type: 'scroll',
            pageIconColor: '#ffffff',
            pageTextStyle: {
                color: '#ffffff',
            }
        },
        xAxis: [{
            type: 'category',
            data: genreList,
            axisLabel: {
                color: '#ffffff',
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#ffffff',
            }
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
            <EChartsReact option={options} style={{height: '40vh', width: '30vw'}}/>
        </div>
    );
};

export default VerticalBar;