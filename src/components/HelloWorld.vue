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
                                      @click="delLegend(item.id,ele.name,index)">x</span>
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
            chartIndex: 0,
            //setOption的数据
            optionData: [],
            //setOption的series的data数据
            yData: [],
            //chart的id
            chartBoxList: [],
            //有相同y轴个数且显示出来
            hasSameYaxisLength: false,
            //最长y轴个数
            maxYaxisLength: 1,
            xData: []
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
        }


    },
    watch: {
        yData: {
            handler(val) {
                this.hasSameYaxisLength = false
                this.maxYaxisLength = val.reduce((max, ele) => {
                    if (max === ele.data.length) {
                        this.hasSameYaxisLength = true
                        return max
                    }
                    return max > ele.data.length ? max : ele.data.length
                }, 1)
            },
            deep: true
        }
    },
    mounted() {
        this.setXdata(1000)
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
        generateRandomArr(n = 1000, min = 0, max = 250) {
            var arr = [];
            for (var i = 0; i < n; i++) {
                var random = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(random);
            }
            return arr;
        },
        setXdata(n) {
            for (var i = 0; i < n; i++) {
                this.xData.push(`${i}天`)
            }
        },
        /**
         * 新增echarts图
         * @param id
         * @param data
         */
        addChart(id, data) {
            this.chartBoxList.push({ id: id })
            let option = {
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

            //增加空白y轴，对其最近一个y坐标
            if (this.maxYaxisLength > 1 && this.chartBoxList.length > 1) {
                for (let i = 0; i <= this.maxYaxisLength - 2; i++) {
                    option.yAxis.push({
                        type: 'value',
                        name: 'NO_NAME',
                        min: 0,
                        max: 250,
                        position: 'left',
                        show: false,
                        offset: (i + 1) * 30
                    })

                }
            }
            this.$nextTick(() => {
                let chart = echarts.init(document.getElementById(id));
                chart.setOption(option)
                this.optionData.push(option)
                this.yData.push({ id, data: [{ name: data.name, data: data.data, show: true }] })
                chart.group = 'group1';
                echarts.connect('group1');
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
            let index = currOption.yAxis.findIndex(e => e.show === false)
            let pushYData = {
                type: 'value',
                name: data.name,
                min: 0,
                max: 250,
                position: 'left',
                show: true,
                offset: yData.data.length * 30
            }
            if (index >= 0) {
                currOption.yAxis.splice(index, 1, pushYData)
            } else {
                currOption.yAxis.push(pushYData)
                this.addOtherYAxis(id)
            }
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
        },
        addOtherYAxis(id) {
            this.chartBoxList.forEach(e => {
                let currOption = this.optionData.find(p => p.id === e.id)
                if (e.id !== id) {
                    let chartInstance = echarts.init(this.$refs[e.id][0]);
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
        delLegend(id, name, delIndex) {
            if (!this.$refs[id][0]) return
            let chartInstance = echarts.init(this.$refs[id][0]);
            let currOption = this.optionData.find(e => e.id === id)
            let yData = this.yData.find(e => e.id === id)
            //判断是否为最后一根线，是最后一根线后判断是否是最后一个图
            if (yData.data.length <= 1) {
                this.chartBoxList = this.chartBoxList.reduce((arr, e) => {
                    e.id !== id && arr.push(e)
                    return arr
                }, []);
                return
            }
            //删除当前图的最末尾一个y轴的时候判断其他y轴应该如何处理
            if (this.chartBoxList.length > 1) {
                currOption = this.delOtherYAxis(id)
            }
            currOption.series = currOption.series.reduce((arr, e) => {
                e.name !== name && arr.push(e);
                return arr
            }, []);
            currOption.yAxis = currOption.yAxis.reduce((arr, e, index) => {
                //删除一条数据后 该图该数据后面的y轴offset值应该分别向前走30px
                e.offset = index > delIndex ? e.offset - 30 : e.offset
                e.name !== name && arr.push(e);
                return arr
            }, []);
            yData.data = yData.data.reduce((arr, e) => {
                e.name !== name && arr.push(e);
                return arr
            }, []);
            chartInstance.setOption(currOption, true)
        },
        /**
         * 删除当前图的y轴的时候判断其他y轴应该如何处理
         * if    1.如果是y轴最多且唯一的图 删掉自己的一个线的同时，其他图必然存在空y轴  删掉其他图的空y
         * else  2.如果是y轴最多且不唯一的图 或者不是y轴最多的图 删掉一个自己的线的同时删除该y轴的数据，且加入一个空y轴占位
         * @param id
         */
        delOtherYAxis(id) {
            let { maxYaxisLength, hasSameYaxisLength, optionData } = this
            let currOption = optionData.find(p => p.id === id)
            let currLength = currOption.series.length
            console.log(currLength, maxYaxisLength, !hasSameYaxisLength)
            if (currLength === maxYaxisLength && !hasSameYaxisLength) {
                this.chartBoxList.forEach(e => {
                    if (e.id === id) return
                    let currOption = optionData.find(p => p.id === e.id);
                    let chartInstance = echarts.init(this.$refs[e.id][0]);
                    currOption.yAxis.splice(maxYaxisLength - 1, 1);
                    chartInstance.setOption(currOption, true);
                })
            } else {
                currOption.yAxis.push({
                    type: 'value',
                    name: 'NO_NAME',
                    min: 0,
                    max: 250,
                    position: 'left',
                    show: false,
                    offset: currLength * 30
                })
            }
            return currOption

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
