import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

let Arr = [

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
    'DatePicker',
    // 'TimeSelect',
    // 'TimePicker',
    // Popover,
    'Pagination',
    'Dialog',
    'Tooltip',
    'Toast',
    // Breadcrumb,
    // BreadcrumbItem,
    // Form,
    // FormItem,
    // Tabs,
    // TabPane,
    // 'Tag',
    'DropMenu',
    'Popconfirm',
    'Confirm'
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
        name: `${e}`,
        component: () => import(/* webpackChunkName: "about" */ `./views/${e}.vue`)
    }
})
Vue.use(Router)
console.log(elementRoutes)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: elementRoutes[0].name,
            component: elementRoutes[0].component,
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

    ]
})
