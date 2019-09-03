<template>
    <div class="hello">
        <div class="addChart">
            <el-button @click="addChart(`chart-name${Math.random()}`, { name: `name${Math.random()}`, data:generateRandomArr()})">addChart</el-button>
        </div>
        <div class="addLine">
            <el-input v-model="chartIndex" />
            <el-button @click="addLine(chartBoxList[chartIndex].id,{name:`name${Math.random()}`,data:generateRandomArr()})">addLine</el-button>
        </div>
        <div class="chart-board">
            <div class="chart-box">
                <div class="box"
                     v-for="item in chartBoxList">
                    <transition name="fade">
                        <chart-div :ID="item.id"
                                   :xData="xData"
                                   :yData="yData.find(e=>e.id===item.id)"
                                   :optionData="optionData.find(e => e.id === item.id)"
                                   @lengendShow="lengendShow"
                                   @delLegend="delLegend"
                                   @changexAxis="changexAxis"></chart-div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="bottom-xAxis"
             ref="xAxisData"
             :style="{marginLeft:`${maxYaxisLength*29}px`,width:`calc(${xAxisWidth} - ${Number(maxYaxisLength) * 30}px)`}">
        </div>
        <div class="xAxis-box"
             ref="xAxisDatazoom"></div>
    </div>
</template>

<script>
import echarts from './../plugins/echarts';
import _debounce from 'lodash/debounce';
import ChartDiv from './ChartDiv';
import Vue from 'vue';

export default {
    name: 'HelloWorld',
    components: {
        ChartDiv
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
            xData: [],
            xAxisWidth: 'calc(100% - 100px - 150px - 20px - 10px - 30px)',
            xAxisDataChart: ''
        };
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

            ];
        }

    },
    watch: {
        maxYaxisLength() {
            this.xAxisDataChart.resize();
        },
        yData: {
            handler(val) {
                this.hasSameYaxisLength = false;
                this.maxYaxisLength = val.reduce((max, ele) => {
                    if (max === ele.data.length) {
                        this.hasSameYaxisLength = true;
                        return max;
                    }
                    return max > ele.data.length ? max : ele.data.length;
                }, 1);
            },
            deep: true
        }
    },
    mounted() {
        this.setXdata(1000);
        this.addChart(`chart-name${Math.random()}`, { name: `name${Math.random()}`, data: this.generateRandomArr() });
        this.setDataZoom();
        this.setDataXaxis();
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
            let arr = [];
            for (let i = 0; i < n; i++) {
                let random = Math.floor(Math.random() * (max - min + 1) + min);
                arr.push(random);
            }
            return arr;
        },
        /**
         * 随机生成x数据
         * @param n 长度
         **/
        setXdata(n) {
            for (let i = 0; i < n; i++) {
                this.xData.push(`${i}天`);
            }
        },
        /**
         * 新增echarts图
         * @param id
         * @param data
         */
        addChart(id, data) {
            this.chartBoxList.push({ id: id });
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
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        }
                    }
                },
                color: this.colors,
                tooltip: {
                    trigger: 'axis',
                    position: 'right'
                },
                grid: {
                    right: '50px',
                    left: 0,
                    top: 5,
                    bottom: 5,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        formatter: '{value} ml'
                    },
                    axisLine: {
                        show: false
                    },
                    data: []
                }
                ,
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
                        data: []
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
                    });
                }
            }
            this.optionData.push(option);
            this.yData.push({ id, data: [{ name: data.name, data: data.data, show: true }] });
        },
        /**
         * 往图新增线
         * @param id
         * @param data
         */
        addLine(id, data) {
            let currOption = this.optionData.find(e => e.id === id);
            let yData = this.yData.find(e => e.id === id);
            let index = currOption.yAxis.findIndex(e => e.show === false);
            let pushYData = {
                type: 'value',
                name: data.name,
                min: 0,
                max: 250,
                position: 'left',
                show: true,
                offset: yData.data.length * 30
            };
            if (index >= 0) {
                currOption.yAxis.splice(index, 1, pushYData);
            } else {
                currOption.yAxis.push(pushYData);
                this.addOtherYAxis(id);
            }
            currOption.series.push({
                name: data.name,
                type: 'line',
                data: data.data
            });
            yData.data.push({ name: data.name, data: data.data, show: true });

        },
        /**
         *给其他图加空白y轴
         * */
        addOtherYAxis(id) {
            this.chartBoxList.forEach(e => {
                let currOption = this.optionData.find(p => p.id === e.id);
                if (e.id !== id) {
                    currOption.yAxis.push({
                        type: 'value',
                        name: 'NO_NAME',
                        min: 0,
                        max: 250,
                        position: 'left',
                        show: false,
                        offset: currOption.yAxis.length * 30
                    });
                }
            });
        },
        /**
         * 控制图例展示
         * @param id
         * @param name
         * @param show
         */
        lengendShow(id, name, show) {
            let yData = this.yData.find(e => e.id === id).data;
            let data = yData.find(e => e.name === name);
            data.show = show;
        },
        /**
         * 点击删除点
         * @param id
         * @param name
         */
        delLegend(id, name, delIndex) {
            let currOption = this.optionData.find(e => e.id === id);
            let yData = this.yData.find(e => e.id === id);
            let currOptionIndex = this.optionData.findIndex(e => e.id === id);
            let yDataIndex = this.yData.findIndex(e => e.id === id);
            //判断是否为最后一根线，是最后一根线后判断是否是最后一个图
            if (yData.data.length <= 1) {
                this.chartBoxList = this.chartBoxList.reduce((arr, e) => {
                    e.id !== id && arr.push(e);
                    return arr;
                }, []);
                if (this.chartBoxList.length === 0) {
                    this.optionData.splice(0, 1);
                }
                return;
            }
            //删除当前图的最末尾一个y轴的时候判断其他y轴应该如何处理
            if (this.chartBoxList.length > 1) {
                currOption = this.delOtherYAxis(id);
            }
            currOption.series = currOption.series.reduce((arr, e) => {
                e.name !== name && arr.push(e);
                return arr;
            }, []);
            currOption.yAxis = currOption.yAxis.reduce((arr, e, index) => {
                //删除一条数据后 该图该数据后面的y轴offset值应该分别向前走30px
                e.offset = index > delIndex ? e.offset - 30 : e.offset;
                e.name !== name && arr.push(e);
                return arr;
            }, []);
            yData.data = yData.data.reduce((arr, e) => {
                e.name !== name && arr.push(e);
                return arr;
            }, []);
            this.optionData.splice(currOptionIndex, 1, currOption);
            this.yData.splice(yDataIndex, 1, yData);
        },
        /**
         * 删除当前图的y轴的时候判断其他y轴应该如何处理
         * if    1.如果是y轴最多且唯一的图 删掉自己的一个线的同时，其他图必然存在空y轴  删掉其他图的空y
         * else  2.如果是y轴最多且不唯一的图 或者不是y轴最多的图 删掉一个自己的线的同时删除该y轴的数据，且加入一个空y轴占位
         * @param id
         */
        delOtherYAxis(id) {
            let { maxYaxisLength, hasSameYaxisLength, optionData } = this;
            let currOption = optionData.find(p => p.id === id);
            let currLength = currOption.series.length;
            console.log(currLength, maxYaxisLength, !hasSameYaxisLength);
            if (currLength === maxYaxisLength && !hasSameYaxisLength) {
                this.chartBoxList.forEach(e => {
                    if (e.id === id) return;
                    let currOption = optionData.find(p => p.id === e.id);
                    currOption.yAxis.splice(maxYaxisLength - 1, 1);
                });
            } else {
                currOption.yAxis.push({
                    type: 'value',
                    name: 'NO_NAME',
                    min: 0,
                    max: 250,
                    position: 'left',
                    show: false,
                    offset: currLength * 30
                });
            }
            return currOption;

        },
        /**
         * toolbox 框选数据放大局部 请求新的数据
         * @param startValue
         * @param endValue
         */
        changexAxis(startValue, endValue) {
            console.log(startValue, endValue);
        },
        setDataXaxis() {
            this.xAxisDataChart = echarts.init(this.$refs.xAxisData);
            let option = {
                grid: {
                    left: 0,
                    right: 0,
                    top: 1
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        // show: false,
                        formatter: '{value} ml'
                    },
                    data: this.xData
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [
                        0,
                        '100%'
                    ]
                },
                series: [
                    {
                        name: '模拟数据',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(255, 70, 131,0)'
                        },
                        data: this.xData
                    }
                ]
            };
            this.xAxisDataChart.setOption(option);
            window.addEventListener("resize", () => {
                this.xAxisDataChart.resize();
            });
        },
        setDataZoom() {
            let base = +new Date(1968, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            let data = [Math.random() * 300];
            for (let i = 1; i < 20000; i++) {
                let now = new Date(base += oneDay);
                date.push([
                    now.getFullYear(),
                    now.getMonth() + 1,
                    now.getDate()
                ].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            let myChart = echarts.init(this.$refs.xAxisDatazoom);
            let option = {
                grid: {
                    left: 10,
                    right: 10,
                    top: 10
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    show: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    show: false,
                    boundaryGap: [
                        0,
                        '100%'
                    ]
                },
                dataZoom: [
                    {
                        throttle: 1000,
                        realtime: false,
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }
                ],
                series: [
                    {
                        name: '模拟数据',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        show: false,
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(255, 70, 131,0)'
                        },
                        data: data
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });
            let tstart = '';
            let tend = '';
            myChart.on('datazoom', (params) => {
                let opt = myChart.getOption();
                let dz = opt.dataZoom[0];
                tstart = opt.xAxis[0].data[dz.startValue];
                tend = opt.xAxis[0].data[dz.endValue];
                console.log(2, tstart, tend);
            });


        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="less">
.hello {
    width: 90%;
}

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

.chart-board {
    width: 100%;
    height: 600px;
    overflow: auto;
    border: 1px solid #3a70df;
    .chart-box {
        width: calc(100% - 100px);
        .box {
            width: 100%;
        }
    }

}

.bottom-xAxis {
    /*width: calc(100% - 100px - 150px - 20px - 30px);*/
    margin-left: 30px;
    height: 60px;
    border: 1px solid #3a70df;
    display: flex;
    justify-content: space-between;
}

.xAxis-box {
    width: 100%;
    height: 60px;
    overflow: auto;
    border: 1px solid #3a70df;
}

//整个过渡中，给她应用的样式
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}

//定义组件过渡开始时的状态
//定义离开过渡状态的结束状态
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
</style>
