<template>
    <div class="xAxis-box"
         ref="xAxisDatazoom"></div>
</template>
<script>
export default {
    // Options / Data
    // components: {},
    //data() {},
    //props: [],
    // propsData: {},
    // computed: {},
    mounted() {
        this.setDataZoom();
    },
    methods: {
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
    },
    // watch: {},
    // Options / DOM
    // el () {},
    // template: '',
    // render () {},
    // Options / Lifecycle Hooks
    // created () {},

    // updated () {},
    // activated () {},
    // deactivated () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    //directives: {},
    // filters: {},
}
</script>
<style rel="stylesheet/scss"
       lang="scss">

</style>