import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.less'
import './assets/css/segma_ui.less'
import plugins from './plugins/index'

Vue.use(plugins)

// import test from './test/index'

// Vue.use(test)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
