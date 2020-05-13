<template>
    <div id="app">
        <div id="nav">
            <router-link :to="`/${item}`"
                         :key="item"
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
                'Input',
                'Radio',
                'Checkbox',
                'Switch',
                'DatePicker',
                'Select',
                'Button',
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

                // InputNumber,

                // RadioGroup,
                // RadioButton,

                // CheckboxButton,
                // CheckboxGroup,

                // Option,
                // OptionGroup,

                // ButtonGroup,
                'Table',
                // TableColumn,

                // 'TimeSelect',
                // 'TimePicker',
                // Popover,
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
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 50px 30px;
    width: 100px;
    height: 100%;

    a {
        display: block;
        margin: 5px 0;
        font-weight: bold;
        text-align: right;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.segma-ui {
    margin: 50px auto 10px auto;
    width: calc(100% - 100px - 20px);
}
</style>
