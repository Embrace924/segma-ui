import Vue from 'vue'
import plugins from './plugins'

import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts';

Vue.use(plugins);
Vue.use(echarts);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
