import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);
let color = [
    '#3A70DF',
    '#70B684',
    '#DF8845',
    '#DF3A25',
    '#7979E4',
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
let baseOption = {
    id: '',
    grid: {
        right: '50px',
        left: '10px',
        top: 5,
        bottom: 5,
        containLabel: true
    },
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
    color: color,
    tooltip: {
        trigger: 'axis',
        position: 'right'
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
            show: true,
            lineStyle: {
                color: '#F1F3F6'
            }
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: '#F1F3F6'
            }
        },
        data: []
    },
    yAxis: [],
    series: []
};
let baseYAxis = (name, length) => {
    return {
        name: name,
        type: 'value',
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
                color: color[length]
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
    }
}
let getLineData = (id, name) => {
    let n = 100, min = 0, max = 50;
    let arr = [];
    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(random);
    }
    return [{ 'name': name, 'value': arr }];
}
export default new Vuex.Store({
    state: { //chart的id
        chartBoxList: [],
        //setOption的option
        optionData: [],
        //setOption的series的data数据
        yData: [],
        xStartTime: '',
        //
        xEndTime: '',
        //x轴数据
        xData: [],

        //
        xAxisDataChart: '',
        //有相同y轴个数且显示出来
        hasSameYaxisLength: false,
        //最长y轴个数
        maxYaxisLength: 1
    },
    mutations: {
        //push splice
        setChartBoxList(state, { type, data }) {
            if (type === 'push') {
                state.chartBoxList.push(data);
            } else if (type === 'splice') {
                state.chartBoxList.splice(data, 1);
            }
        },
        setOptionData(state, { type, data }) {
            if (type === 'push') {
                state.optionData.push(data);
            } else if (type === 'splice') {
                state.optionData.splice(data, 1);
            } else if (type === 'replace') {
                console.log(data, data.index, 1, data.data);
                state.optionData.splice(data.index, 1, data.data);
            }
        },
        setYData(state, { type, data }) {
            if (type === 'push') {
                state.yData.push(data);
            } else if (type === 'splice') {
                state.yData.splice(data, 1);
            } else if (type === 'replace') {
                state.yData.splice(data.index, 1, data.data);
            }
            //改变yData后,实时更新最新y轴最大个数 是否有相等个数Y轴
            let hasSameYaxisLength = false;
            state.maxYaxisLength = state.yData.reduce((max, ele) => {
                if (max === ele.data.length) {
                    hasSameYaxisLength = true;
                    return max;
                }
                return max > ele.data.length ? max : ele.data.length;
            }, 1);
            state.hasSameYaxisLength = hasSameYaxisLength;
        },
        setXData(state, data) {
            state.xData = data;
        },
        setHasSameYaxisLength(state, data) {
            state.hasSameYaxisLength = data;
        },
        setMaxYaxisLength(state, data) {
            state.maxYaxisLength = data;
        },
        /**
         *给其他图加空白y轴
         * */
        addOtherYAxis(state, id) {
            state.optionData = state.optionData.map(e => {
                if (e.id !== id) {
                    let baseY = baseYAxis('NO_NAME', e.yAxis.length)
                    e.yAxis.push(baseY);
                }
                return e;
            });
        }
    },
    actions: {
        /**
         * 获取x轴数据
         * @param n 长度
         **/

        getXData({ state, commit }, { startTime, endTime }) {
            let xData = [];
            let n = 100;
            for (let i = 0; i < n; i++) {
                xData.push(`${i}天`);
            }
            commit('setXData', xData);
        },
        /**
         * 拖动,双击触发新增曲线
         * 请求名字为name的线的数据  ( name可能数组,可能有多个) data:{name1:[],name2:[]}
         * 检测是否有相同的chart id 判断是在旧图中添加线还是新增一个图
         * 如果是旧图中新增线  循环对option的yData和series新增属性
         * 如果是新增图 先新增一个option 然后对option的yData和series新增属性
         * @param state
         * @param commit
         * @param dispath
         * @param id
         * @param name
         */
        addLine({ state, commit, dispatch }, { id, name }) {
            //请求数据
            let lineData = getLineData(id, name)
            let optionIndex = state.optionData.findIndex(e => e.id === id);
            let yDataIndex = state.yData.findIndex(e => e.id === id);
            console.log(optionIndex)
            if (optionIndex >= 0) {
                let currOption = _.cloneDeep(state.optionData[optionIndex]);
                let yData = _.cloneDeep(state.yData[yDataIndex]);
                lineData.forEach(e => {
                    let index = currOption.yAxis.findIndex(e => e.show === false);
                    let pushYData = baseYAxis(e.name, yData.data.length)

                    if (index >= 0) {
                        currOption.yAxis.splice(index, 1, pushYData);
                    } else {
                        currOption.yAxis.push(pushYData);
                        commit('addOtherYAxis', id);
                    }
                    // currOption.grid.left = yData.data.length * 8
                    currOption.series.push({
                        name: name,
                        type: 'line',
                        showSymbol: false,
                        data: []
                    });
                    yData.data.push({ name: name, data: e.value, show: true });
                });
                console.log(currOption, yData)
                commit('setOptionData', { type: 'replace', data: { index: optionIndex, data: currOption } });
                commit('setYData', { type: 'replace', data: { index: yDataIndex, data: yData } });
            } else {
                commit('setChartBoxList', { type: 'push', data: { id } })
                let addOption = _.cloneDeep(baseOption);
                addOption.id = id
                let addYData = { id: id, data: [] }
                lineData.forEach((e, index) => {
                    let pushYData = baseYAxis(e.name, index)
                    addOption.yAxis.push(pushYData)
                    // addOption.grid.left = index * 8
                    addOption.series.push({
                        name: e.name,
                        type: 'line',
                        showSymbol: false,
                        data: []
                    })
                    addYData.data.push({ name: e.name, data: e.value, show: true })
                })
                //增加空白y轴，对其最近一个y坐标
                if (state.maxYaxisLength > 1 && state.chartBoxList.length > 1) {
                    for (let i = 0; i <= state.maxYaxisLength - 2; i++) {
                        let pushYData = baseYAxis('NO_NAME', (i + 1))
                        addOption.yAxis.push(pushYData);
                    }
                }
                commit('setOptionData', { type: 'push', data: addOption });
                commit('setYData', { type: 'push', data: addYData });
            }
        },
        /**
         * 获取线数据
         * 随机生成数据
         * @param n 长度
         * @param min 最小值
         * @param max 最大值
         * @returns {Array}
         */


    }
})
;
