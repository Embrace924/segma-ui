import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Input from './views/Input'
import InputNumber from './views/InputNumber'
import Select from './views/Select.vue'
import Button from './views/Button.vue'


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
            path: '/hello',
            name: 'home',
            component: () => import(/* webpackChunkName: "about" */ './components/HelloWorld.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/Input',
            name: 'Input',
            component: Input
        },
        {
            path: '/InputNumber',
            name: 'InputNumber',
            component: InputNumber
        },
        {
            path: '/Select',
            name: 'Select',
            component: Select
        },
        {
            path: '/Button',
            name: 'Button',
            component: Button
        }
    ]
})
