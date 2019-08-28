<template>
    <div class="hello">
        <div>
            <el-button @click="addLine(chartId,{name:`name${Math.random()}`,data:allLine[whichLine]})">addLine</el-button>
            <el-input v-model="chartId" />
            <el-input v-model="whichLine" />
        </div>
        <div class="chart-box">
            <div class="box">
                <div class="chart"
                     id="chart1"
                     style=""></div>
                <div class="legend-self"></div>
            </div>
            <div class="box">
                <div class="chart"
                     id="chart2"
                     style=""></div>
            </div>
            <div class="box">
                <div class="chart"
                     id="chart3"
                     style=""></div>
            </div>
            <div class="box">
                <div class="chart"
                     id="chart4"
                     style=""></div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from './../plugins/echarts'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            chartList: [],
            addLineData: [
                2.0,
                1.9,
                2.0,
                13.2,
                35.6,
                26.7,
                35.6,
                62.2,
                32.6,
                20.0,
                6.4,
                8.3
            ],
            chartId: '',
            whichLine: ''
        }
    },
    computed: {
        colors() {
            return [
                '#5793f3',
                '#d14a61',
                '#675bba',
                '#5723f3',
                '#d24a01',
                '#175bba'
            ]
        },
        allLine() {
            return [
                [
                    2.0,
                    4.9,
                    1.0,
                    23.2,
                    15.6,
                    16.7,
                    35.6,
                    62.2,
                    32.6,
                    20.0,
                    6.4,
                    3.3
                ],
                [
                    1.0,
                    4.9,
                    1.0,
                    13.2,
                    15.6,
                    16.7,
                    15.6,
                    12.2,
                    12.6,
                    20.0,
                    6.4,
                    3.3
                ],
                [
                    2.6,
                    5.9,
                    9.0,
                    26.4,
                    28.7,
                    70.7,
                    175.6,
                    182.2,
                    48.7,
                    18.8,
                    6.0,
                    2.3
                ],
                [
                    2.0,
                    2.2,
                    3.3,
                    4.5,
                    6.3,
                    10.2,
                    20.3,
                    23.4,
                    23.0,
                    16.5,
                    12.0,
                    6.2
                ],
                [
                    2.0,
                    2.2,
                    3.3,
                    4.5,
                    6.3,
                    10.2,
                    20.3,
                    23.4,
                    23.0,
                    16.5,
                    12.0,
                    6.2
                ]
            ]
        },
        xData() {
            return [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'
            ]
        }
    },
    mounted() {
        this.init()
        // this.addChart(1, { name: 'name1', data: this.allLine[0] })
    },
    methods: {
        addChart(id, data) {
            let name = `myChart${id}`
            let chart = echarts.init(document.getElementById(`chart${id}`));
            this.chartList.push({ [name]: { chart, legend: data.name } })
            var option = {
                color: this.colors,
                tooltip: {
                    trigger: 'axis',
                    position: 'right'
                },
                grid: {
                    right: 50,
                    left: 10,
                    top: 50,
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            show: false,
                            formatter: '{value} ml'
                        },
                        data: this.xData
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: data.name,
                        min: 0,
                        max: 250,
                        position: 'left',
                        offset: 0

                    }
                ],
                series: [
                    {
                        name: data.name,
                        type: 'line',
                        data: data.data
                    }
                ]
            };
            chart.setOption(option)
            // echarts.connect([
            //     myChart1,
            //     myChart2,
            //     myChart3,
            //     myChart4
            // ]);
            console.log(name, chart, this.chartList)
        },
        init() {
            var myChart1 = echarts.init(document.getElementById('chart1'));
            var myChart2 = echarts.init(document.getElementById('chart2'));
            var myChart3 = echarts.init(document.getElementById('chart3'));
            var myChart4 = echarts.init(document.getElementById('chart4'));

            this.chartList.push({ myChart1, myChart2, myChart3 })
            let { colors } = this
            var seriesData = [
                this.allLine[0],
                this.allLine[1]
            ]
            var option = {
                color: colors,
                tooltip: {
                    trigger: 'axis',
                    position: 'right'
                },
                grid: {
                    right: 50,
                    left: 10,
                    top: 50,
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            show: false,
                            formatter: '{value} ml'
                        },
                        data: this.xData
                    }
                ],
                yAxis: [],
                series: []
            };
            seriesData.forEach(function(ele, index) {
                option.yAxis.push({
                    type: 'value',
                    // name: '蒸发量' + index,
                    min: 0,
                    max: 250,
                    position: 'left',
                    offset: index * 30,
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        // rotate: 90,
                        // formatter: '{value} ml'
                    }
                })
                option.series.push({
                    name: '蒸发量' + index,
                    type: 'line',
                    data: ele
                })
            })
            myChart1.setOption(option)
            myChart2.setOption(option)
            myChart3.setOption(option)
            myChart4.setOption(option)

        },
        addLine(id, data) {
            let element = this.chartList[0]['myChart' + id]
            console.log(id, element, this.chartList[0])
            var option = {
                yAxis: {
                    type: 'value',
                    name: data.name,
                    min: 0,
                    max: 250,
                    position: 'left'

                },
                series: {
                    name: data.name,
                    type: 'line',
                    data: data.data
                }
            }

            element.setOption(option)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="less">
.chart-box {
    width: 80%;
    height: 600px;
    overflow: auto;
    border: 1px solid #3a70df;

}

.box {
    width: 100%;
    height: 200px;
    #chart1, #chart2, #chart3, #chart4 {
        width: 80%;
        height: 100%;
    }

}


</style>
