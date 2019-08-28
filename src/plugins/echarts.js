/**
 * Created by chenz on 2019/2/1.
 */
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
window.echarts = echarts;

// 引入柱状图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/scatter');
require('echarts/lib/chart/radar');
require('echarts/lib/chart/funnel');

// 引入组件
require('echarts/lib/component/graphic');
require('echarts/lib/component/grid');
require('echarts/lib/component/legendScroll');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/markPoint');
require('echarts/lib/component/markLine');
require('echarts/lib/component/markArea');
require('echarts/lib/component/visualMap');

// // 引入主题
// require('../theme/christmas.js');
// require('../theme/mapleLeaf.js');
// require('../theme/morandi.js');
// require('../theme/original.js');
// require('../theme/simple.js');
// require('../theme/gradient.js');
// require('../theme/default.js');
// require('../theme/echarts.js');

export default echarts;