import EChartsReact from "echarts-for-react";

const HorizontalBar = ({ csvData }) => {

    const developerList = [];
    csvData.forEach(element => {
        if (element.Developer !== undefined && element.Developer !== '') {
            if (!developerList.includes(element.Developer)) {
                developerList.push(element.Developer);
            }
        }
    });

    let scoreObjList = [];
    developerList.forEach(developer => {
        let scoreObj = {};
        scoreObj['name'] = developer;
        let scoreSum = 0;
        let scoreCount = 0;
        csvData.forEach(element => {
            if (element.Developer === developer && !isNaN(element.Critic_Score)) {
                scoreSum += parseInt(element.Critic_Score);
                scoreCount += 1;
            };
        });
        scoreObj['score'] = (Math.round((scoreSum / scoreCount) * 100) / 100);
        scoreObjList.push(scoreObj);
    });
    scoreObjList.sort((a, b) => {
        return b.score - a.score;
    });
    scoreObjList = scoreObjList.slice(0, 5);

    let yAxisList = [];
    let dataList = [];
    scoreObjList.forEach(scoreObj => {
        yAxisList.push(scoreObj.name);
        dataList.push(scoreObj.score);
    });

    const options = {
        title: {
            text: 'Top 5 Developers by Average Critic Score',
            textStyle: {
                color: '#ffffff',
            }
        },
        grid: {
            left: '28%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: false,
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                color: '#ffffff',
            }
        },
        yAxis: {
            type: 'category',
            data: yAxisList,
            inverse: true,
            axisLabel: {
                color: '#ffffff',
                fontSize: '8.5px',
                rotate: '20',
            }
        },
        series: [
            {
                name: 'Critic Score',
                type: 'bar',
                data: dataList,
                colorBy: 'data'
            }
        ]
    }

    return (
        <div>
            <EChartsReact option={options} style={{height: '45vh', width: '30vw', marginTop: '4.5vh'}}/>
        </div>
    )
};

export default HorizontalBar;