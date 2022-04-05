import EChartsReact from "echarts-for-react";

const AnimatedText = () => {

    const options = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'Apache ECharts',
                        fontSize: 70,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'white',
                        stroke: '#ffffff',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 5000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 1,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 1000,
                                    lineDash: [500, 0]
                                }
                            },
                        ]
                    }
                }
            ]
        }
    }

    return (
        <div>
            <EChartsReact option={options} style={{ height: '15vh', width: '41vw', marginTop: '3vh' }} />
        </div>
    )
};

export default AnimatedText;