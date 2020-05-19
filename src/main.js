import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.less'
import plugins from './plugins/index'

Vue.use(plugins)


// Vue.use(test)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
