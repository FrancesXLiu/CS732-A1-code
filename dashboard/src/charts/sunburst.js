import EChartsReact from "echarts-for-react";

const Sunburst = ({ csvData }) => {

    const genreList = ['Action', 'Role-Playing', 'Shooter'];
    const platformList = ['PS3', 'X360', 'Wii'];

    // data = [{name: 'Action', children: [{name: 'PS3', value: 100}, {name: 'X360', value: 200}, ...]}, ...]

    let data = [{name: 'Action', children: []}, {name: 'Role-Playing', children: []}, {name: 'Shooter', children: []}];

    genreList.forEach(genre => {
        let children = [];
        platformList.forEach(platform => {
            let value = 0;
            csvData.forEach(element => {
                if (element.Genre === genre && element.Platform === platform) {
                    value += 1;
                };
            });
            children.push({name: platform, value: value});
        });
        data[genreList.indexOf(genre)].children = children;
    });
    console.log('data: ', data);

    const options = {
        title: {
            text: 'Genres and Platforms by Number of Games',
            textStyle: {
                color: '#ffffff',
            }
        },
        series: {
            type: 'sunburst',
            data: data,
            radius: [0, '80%'],
            label: {
                rotate: 'radial',
            }
        },
    }

    return (
        <div>
            <EChartsReact option={options} style={{height: '45vh', width: '30vw', marginTop: '4.5vh'}} />
        </div>
    )
};

export default Sunburst;