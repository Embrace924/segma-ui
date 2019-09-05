<template>
    <div class="hello">
        <div class="addChart">
            <el-input style="width: 100px"
                      placeholder="宽度"
                      v-model="changeWidth" />
            <el-input style="width: 100px"
                      placeholder="高度"
                      v-model="changeHeight" />
            <el-button @click="resizeChart()">resizeChart</el-button>
            <el-button @click="addLine({id:`box-${Math.random()}`, name: `name${Math.random()}`})">addChart</el-button>
            <el-select v-model="hiddenChart"
                       multiple
                       placeholder="请选择">
                <el-option
                    v-for="item in chartBoxList"
                    :key="item.id"
                    :label="item.id"
                    :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div class="addLine">
            <el-input v-model="chartIndex" />
            <el-button @click="addLine({id:chartBoxList[chartIndex].id,name:`name${Math.random()}`})">addLine</el-button>
        </div>
        <div class="chart-board">
            <div class="chart-box">
                <template v-for="item in chartBoxList">
                    <div class="box"
                         v-if="!hiddenChart.includes(item.id)"
                         :style="{height:changeHeight+'px',width:changeWidth}">
                        <chart-div ref="chart"
                                   :ID="item.id"
                                   :xData="xData"
                                   :yData="yData.find(e=>e.id===item.id)"
                                   :optionData="optionData.find(e => e.id === item.id)"
                                   @lengendShow="lengendShow"
                                   @delLegend="delLegend"
                                   @changexAxis="changexAxis"></chart-div>
                    </div>
                </template>
            </div>
        </div>
        <x-axis-for-chart v-if="yData.length>0"
                          :xAxisWidth="xAxisWidth"
                          ref="xAxisDataChart"></x-axis-for-chart>
        <data-zoom-for-chart></data-zoom-for-chart>
    </div>
</template>

<script>
import echarts from './../plugins/echarts';
import _debounce from 'lodash/debounce';
import ChartDiv from './ChartDiv';
import XAxisForChart from './XAxisForChart'
import DataZoomForChart from './DataZoomForChart'

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'HelloWorld',
    components: {
        XAxisForChart,
        ChartDiv,
        DataZoomForChart
    },
    data() {
        return {
            chartIndex: 0,
            xAxisDataChart: '',
            //resize
            changeHeight: 100,
            changeWidth: '100%',
            hiddenChart: [],
            //底部x轴宽度
            xAxisWidth: 'calc(100% - 100px - 150px - 20px - 10px - 30px)',
        };
    },
    computed: {
        ...mapState([
            'chartBoxList',
            'optionData',
            'yData',
            'xData',
            //有相同y轴个数且显示出来
            'hasSameYaxisLength',
            //最长y轴个数
            'maxYaxisLength'
        ]),
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
            this.$refs.xAxisDataChart.resize();
        },
    },
    mounted() {
        this.getXData(1000);
        this.addLine({ id: `chart-name${Math.random()}`, name: `name${Math.random()}` });
    },
    methods: {
        ...mapMutations([
            'setChartBoxList',
            'setOptionData',
            'setYData',
            'setXData',
            'setMaxYaxisLength',
            'setHasSameYaxisLength'
        ]),
        ...mapActions([
            'getXData',
            'addLine',
            'getLineData'
        ]),
        resizeChart() {
            this.$refs.chart.forEach(e => {
                e.resize();
            })
        },
        /**
         * 控制图例展示
         * @param id
         * @param name
         * @param show
         */
        lengendShow(id, name, show) {
            let yData = this.yData.find(e => e.id === id);
            let yDataIndex = this.yData.findIndex(e => e.id === id).data;
            let data = yData.data.find(e => e.name === name);
            data.show = show;
            this.setYData({ type: 'replace', data: { index: yDataIndex, data: yData } });
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
                let spliceIndex = this.chartBoxList.findIndex(e => e.id === id);
                this.setChartBoxList({ type: 'splice', data: spliceIndex });
                if (this.chartBoxList.length === 0) {
                    this.setOptionData({ type: 'splice', data: 0 });
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
                e.offset = index > delIndex ? e.offset - 39 : e.offset;
                e.name !== name && arr.push(e);
                return arr;
            }, []);
            yData.data = yData.data.reduce((arr, e) => {
                e.name !== name && arr.push(e);
                return arr;
            }, []);
            // currOption.grid.left =(yData.data.length - 1) * 8
            this.setOptionData({ type: 'replace', data: { index: currOptionIndex, data: currOption } });
            this.setYData({ type: 'replace', data: { index: yDataIndex, data: yData } });
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
                    max: 50,
                    splitNumber: 4,
                    position: 'left',
                    offset: length * 39,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: this.color[currLength]
                        }
                    },
                    axisLabel: {
                        margin: 25,
                        align: 'left',
                        formatter: [
                            '{a|{value}}',
                        ].join('\n'),
                        rich: {
                            a: {
                                width: 100,
                                padding: [
                                    0,
                                    0,
                                    0,
                                    0
                                ]
                            },
                        }
                    }
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
            this.getXData(1000);
        },

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
            height: 200px;
        }
    }

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
