import EChartsReact from "echarts-for-react";

const Nightingale = ({ csvData }) => {

    let platformColumn = [];
    csvData.forEach(data => {
        if (!platformColumn.includes(data.Platform)) {
            platformColumn.push(data.Platform);
        }
    });

    let dataList = [];
    platformColumn.forEach(platform => {
        dataList.push({
            name: platform,
            value: 0
        })
    });

    csvData.forEach(data => {
        platformColumn.forEach(platform => {
            if (data.Platform === platform) {
                dataList.forEach(item => {
                    if (item.name === platform) {
                        item.value += 1;
                    }
                })
            }
        })
    });

    dataList.sort((a, b) => {
        return b.value - a.value;
    });
    dataList = dataList.slice(0, 10);

    const options = {
        title: {
            text: 'Top 10 Platforms by Number of Games',
            textStyle: {
                color: '#ffffff',
            }
        },
        legend: {show: false},
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        toolbox: {
            show: false,
        },
        series: [{
            name: 'platform Nightingale',
            type: 'pie',
            radius: ['15%', '80%'],
            // center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 2
            },
            label: {
                color: '#ffffff',
            },
            data: dataList,
        }]
    }

    return (
        <div>
            <EChartsReact option={options} style={{height: '67vh', width: '41vw'}} />
        </div>
    );
};

export default Nightingale;