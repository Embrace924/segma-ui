<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home|</router-link>
            <router-link :to="`/${item}`"
                         v-for=" item in arr"> {{item}}|
            </router-link>

        </div>
        <router-view class="segma-ui" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [
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
                // Switch,
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

        }
    },
    computed: {},
}
</script>

<style lang="less">
@import "./assets/css/segma_ui.less";

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
