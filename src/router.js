import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

let Arr = [
    'Pagination',
    'Dialog',
    // Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    'Input',
    // InputNumber,
    'Radio',
    // RadioGroup,
    // RadioButton,
    'Checkbox',
    // CheckboxButton,
    // CheckboxGroup,
    'Switch',
    'Select',
    // Option,
    // OptionGroup,
    'Button',
    // ButtonGroup,
    'Table',
    // TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    // Popover,
    // Tooltip,
    // Breadcrumb,
    // BreadcrumbItem,
    // Form,
    // FormItem,
    // Tabs,
    // TabPane,
    'Tag',
    // Tree,
    // Alert,
    // Slider,
    // Icon,
    // Row,
    // Col,
    // Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    // Link,
    // Divider,
    // Image,
    // Calendar,
    // Backtop,
    // PageHeader,
    // CascaderPanel,
    // Loading,
    // MessageBox,
    // Message,
    // Notification,
    // InfiniteScroll
]
let elementRoutes = Arr.map(e => {
    return {
        path: `/${e}`,
        name: `${e}`, component: () => import(/* webpackChunkName: "about" */ `./views/${e}.vue`)
    }
})
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
        ...elementRoutes,
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
