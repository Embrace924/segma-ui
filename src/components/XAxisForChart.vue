<template>
    <div class="bottom-xAxis"
         ref="xAxisData"
         :style="{}">
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: "XAxisForChart",
    props: {
        xAxisWidth: {
            type: String,
            default: ''
        },
    },
    computed: {
        ...mapState([
            'xData',
            'maxYaxisLength'
        ]),
    },
    mounted() {
        this.setXAxisStyle()
        this.setDataXaxis()
    },
    methods: {
        setXAxisStyle() {
            let { maxYaxisLength, xAxisWidth } = this
            this.$refs.xAxisData.style.cssText += `marginLeft:${maxYaxisLength * 29}px,width:calc(${xAxisWidth} - ${Number(maxYaxisLength) * 30}px)`
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
            console.log(option)
            this.xAxisDataChart.setOption(option);
            window.addEventListener("resize", () => {
                this.xAxisDataChart.resize();
            });
        },
    },
}
</script>

<style scoped>
.bottom-xAxis {
    width: calc(100% - 100px - 150px - 20px - 30px);
    margin-left: 30px;
    height: 60px;
    border: 1px solid #3a70df;
    display: flex;
    justify-content: space-between;
}
</style>