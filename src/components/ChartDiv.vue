<template>
    <div class="line-chart-box">
        <div class="chart"
             :id="ID"
             :ref="ID"></div>
        <div class="legend-self">
            <div v-for="(ele,index) in yData.data"
                 class="legend">
                    <span class="legend-box"
                          :style="{backgroundColor:ele.show?colors[index]:'#dddddd'}"
                          @click="lengendShow(ID,ele.name,!ele.show)"></span>
                <span class="legend-name">{{ele.name}}</span>
                <span class="legend-del"
                      @click="delLegend(ID,ele.name,index)">x</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        ID: {
            type: String,
            default: ''
        },
        xData: {
            type: Array,
            default: () => {
                return [];
            }
        },
        yData: {
            type: Object,
            default: () => {
                return {};
            }
        },
        optionData: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            myChart: ''
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
        },
        /**
         * 重新组装数据 得到option
         **/
        option() {
            let option = this.optionData;
            option.xAxis.data = this.xData;
            option.series.map(e => {
                e.data = this.yData.data.find(p => p.name === e.name).data;
                return e;
            });
            return option;
        }
    },
    watch: {
        optionData: {
            handler() {
                this.resetOption();
            },
            deep: true
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        /**
         * 初始化数据
         **/
        init() {
            this.$nextTick(() => {
                this.myChart = echarts.init(document.getElementById(this.ID));
                this.myChart.setOption(this.option);
                window.addEventListener("resize", () => {
                    this.myChart.resize();
                });
                this.myChart.group = 'group1';
                echarts.connect('group1');
                this.myChart.on('datazoom', (params) => {
                    this.$emit('changexAxis', params.startValue, params.endValue);
                    console.log(params);
                });
            });
        },


        /**
         * 重新渲染数据
         **/
        resetOption() {
            this.myChart.setOption(this.option, true);
        },
        /**
         * 切换图例
         * @param id
         * @param name
         * @param show
         */
        lengendShow(id, name, show) {
            this.myChart.dispatchAction({
                type: 'legendToggleSelect',
                name: name                // 图例名称
            });
            this.$emit('lengendShow', id, name, show);
        },
        /**
         * 删除曲线
         * @param id
         * @param name
         * @param delIndex
         */
        delLegend(id, name, delIndex) {
            this.$emit('delLegend', id, name, delIndex);
        }
    }
};
</script>
<style rel="stylesheet/scss"
       lang="scss">
.line-chart-box {
    width: 100%;
    height: 200px;
    margin: 20px 0;
    display: flex;
    position: relative;
    .chart {
        width: calc(100% - 150px - 20px);
        height: 100%;
    }
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

}
</style>