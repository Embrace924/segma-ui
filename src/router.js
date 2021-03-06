import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            childrens: []
        },
        {
            path: '/Button',
            name: 'Button', component: () => import(/* webpackChunkName: "about" */ './views/Button.vue')
        },
        {
            path: '/Input',
            name: 'Input', component: () => import(/* webpackChunkName: "about" */ './views/Input.vue')
        },
        {
            path: '/Select',
            name: 'Select', component: () => import(/* webpackChunkName: "about" */ './views/Select.vue')
        },
        {
            path: '/Dialog',
            name: 'Dialog', component: () => import(/* webpackChunkName: "about" */ './views/Dialog.vue')
        },
        {
            path: '/Pagination',
            name: 'Pagination', component: () => import(/* webpackChunkName: "about" */ './views/Pagination.vue')
        },
        {
            path: '/Comfirm',
            name: 'Comfirm', component: () => import(/* webpackChunkName: "about" */ './views/Comfirm.vue')
        },
        {
            path: '/Table',
            name: 'Table', component: () => import(/* webpackChunkName: "about" */ './views/Table.vue')
        },
        {
            path: '/Loading',
            name: 'Loading', component: () => import(/* webpackChunkName: "about" */ './views/Loading.vue')
        },
        {
            path: '/Tag',
            name: 'Tag', component: () => import(/* webpackChunkName: "about" */ './views/Tag.vue')
        },
        {
            path: '/color',
            name: 'color',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/color.vue')
        },

        {
            path: '/InputNumber',
            name: 'InputNumber', component: () => import(/* webpackChunkName: "about" */ './views/InputNumber.vue')
        },


    ]
})
