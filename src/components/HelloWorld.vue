<template>
    <div class="hello">
        <div class="addChart">
            <el-button @click="addChart(`chart-name${Math.random()}`, { name: `name${Math.random()}`, data:generateRandomArr()})">addChart</el-button>
        </div>
        <div class="addLine">
            <el-input v-model="chartIndex" />
            <el-button @click="addLine(chartBoxList[chartIndex].id,{name:`name${Math.random()}`,data:generateRandomArr()})">addLine</el-button>
        </div>
        <div class="chart-box">
            <div class="box"
                 v-for="item in chartBoxList">
                <div class="chart"
                     :id="item.id"
                     :ref="item.id"></div>
                <div class="legend-self">
                    <template v-if="yData">
                        <div v-for="item in yData.filter(e=>e.id===item.id)">
                            <div v-for="(ele,index) in item.data"
                                 class="legend">
                                <span class="legend-box"
                                      :style="{backgroundColor:ele.show?colors[index]:'#dddddd'}"
                                      @click="lengendShow(item.id,ele.name,!ele.show)"></span>
                                <span class="legend-name">{{ele.name}}</span>
                                <span class="legend-del"
                                      @click="delLegend(item.id,ele.name)">x</span>
                            </div>
                        </div>
                    </template>
                </div>
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
            chartIndex: 0,
            //setOption的数据
            optionData: [],
            //setOption的series的data数据
            yData: [],
            //chart的id
            chartBoxList: []
        }
    },
    computed: {
        colors() {
            return [
                '#5793f3',
                '#d14a61',
                '#675bba',
                '#5723f3',
                '#124a01',
                '#175bba',
                '#1fd20c',
                '#56ba62',
                '#324a01',
                '#ba9592',
                '#5793f3',
                '#d14a61',
                '#675bba',
                '#5723f3',
                '#b4d08c',
                '#3dba86',
                '#201cd2',
                '#ba402a',
                '#d21993',
                '#ba9317',
                '#5793f3',
                '#d14a61',
                '#675bba',
                '#5723f3',
                '#d29515',
                '#60ba05',
                '#740ed2',
                '#af10ba',
                '#d21b6c',
                '#ba2a08'

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
        // this.init()
        this.addChart(`chart-name${Math.random()}`, { name: `name${Math.random()}`, data: this.generateRandomArr() })
    },
    methods: {
        /**
         * 随机生成数据
         * @param n 长度
         * @param min 最小值
         * @param max 最大值
         * @returns {Array}
         */
        generateRandomArr(n = 12, min = 0, max = 250) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                var random = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(random);
            }
            return arr;
        },
        /**
         * 新增echarts图
         * @param id
         * @param data
         */
        addChart(id, data) {
            this.chartBoxList.push({ id: id })
            var option = {
                id: id,
                legend: {
                    type: 'scroll',
                    right: 10,
                    itemWidth: 10,
                    itemHeight: 10,
                    orient: 'vertical',
                    show: false
                },
                color: this.colors,
                tooltip: {
                    trigger: 'axis',
                    position: 'right'
                },
                grid: {
                    right: 10,
                    left: 1,
                    top: 5,
                    bottom: 5,
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
                        name: data.name,
                        type: 'value',
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
            this.$nextTick(() => {
                let chart = echarts.init(document.getElementById(id));
                chart.setOption(option)
                this.optionData.push(option)
                this.yData.push({ id, data: [{ name: data.name, data: data.data, show: true }] })
                chart.group = 'group1';
                echarts.connect('group1');
                chart.on('click', function(parma) {
                    console.log(parma)
                })
            })

        },
        /**
         * 往图新增线
         * @param id
         * @param data
         */
        addLine(id, data) {
            let currOption = this.optionData.find(e => e.id === id)
            let yData = this.yData.find(e => e.id === id)
            currOption.yAxis.push({
                type: 'value',
                name: data.name,
                min: 0,
                max: 250,
                position: 'left',
                show: true,
                offset: yData.data.length * 30
            })
            currOption.series.push({
                name: data.name,
                type: 'line',
                data: data.data
            })
            yData.data.push({ name: data.name, data: data.data, show: true })
            if (this.$refs[id][0]) {
                let chartInstance = echarts.init(this.$refs[id][0]);
                chartInstance.setOption(currOption)
            }
            this.resetYAxis(id)
        },
        resetYAxis(id) {
            this.chartBoxList.forEach((e, index) => {
                if (e.id !== id) {
                    let chartInstance = echarts.init(this.$refs[e.id][0]);
                    let currOption = this.optionData.find(p => p.id === e.id)
                    currOption.yAxis.push({
                        type: 'value',
                        name: 'NO_NAME',
                        min: 0,
                        max: 250,
                        position: 'left',
                        show: false,
                        offset: currOption.yAxis.length * 30
                    })
                    chartInstance.setOption(currOption)

                }
            })
        },
        /**
         * 控制图例展示
         * @param id
         * @param name
         * @param show
         */
        lengendShow(id, name, show) {
            let yData = this.yData.find(e => e.id === id).data
            let data = yData.find(e => e.name === name)
            console.log(data)
            data.show = show
            let chart = echarts.init(this.$refs[id][0])
            chart.dispatchAction({
                type: 'legendToggleSelect',
                // 图例名称
                name: name
            })

        },
        /**
         * 点击删除点
         * @param id
         * @param name
         */
        delLegend(id, name) {
            if (!this.$refs[id][0]) return
            let chartInstance = echarts.init(this.$refs[id][0]);
            let currOption = this.optionData.find(e => e.id === id)
            let yData = this.yData.find(e => e.id === id)
            if (yData.data.length <= 1) {
                this.chartBoxList = this.chartBoxList.reduce((arr, e) => {
                    e.id !== id && arr.push(e)
                    return arr
                }, [])
                return
            }
            currOption.series = currOption.series.reduce((arr, e) => {
                e.name !== name && arr.push(e)
                return arr
            }, [])
            currOption.yAxis = currOption.yAxis.reduce((arr, e) => {
                e.name !== name && arr.push(e)
                return arr
            }, [])
            yData.data = yData.data.reduce((arr, e) => {
                console.log(name, e.name)
                e.name !== name && arr.push(e)
                return arr
            }, [])
            chartInstance.setOption(currOption, true)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="less">

.addChart {
    width: 100%;
    height: 50px;
    border: 1px solid #3a70df;

}

.addLine {
    width: 100%;
    height: 50px;
    border: 1px solid #3a70df;
    .el-input {
        width: 20%;
    }
}

.chart-box {
    width: 90%;
    height: 600px;
    overflow: auto;
    border: 1px solid #3a70df;
    .box {
        width: 100%;
        height: 200px;
        margin: 20px 0;
        display: flex;
        position: relative;
        .legend-self {
            width: 150px;
            height: calc(100% - 10px);
            position: absolute;
            right: 0;
            .legend {
                width: 100%;
                height: 12px;
                line-height: 12px;
                margin-bottom: 5px;
                align-items: center;
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
                .legend-name {
                    display: inline-block;
                    font-size: 12px;
                    width: 120px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                }
                .legend-box {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    margin-right: 3px;
                }
            }

        }
        .chart {
            width: calc(100% - 150px - 20px);
            height: 100%;
        }

    }
}


</style>
