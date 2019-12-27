import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/css/segma_ui.less'
import plugins from './plugins/index'

Vue.use(plugins)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
