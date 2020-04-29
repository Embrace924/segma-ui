<template>
    <div>
        <el-pagination page-size.sync="1"
                       :current-page="10"
                       :total="1000"
                       :hide-on-single-page="true"
                       layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
        <el-pagination :hide-on-single-page="true"
                       :total="5"
                       layout="prev, pager, next">
        </el-pagination>
    </div>
</template>
<script>
export default {
    // Options / Data
    // components: {},
    //data() {},
    //props: [],
    // propsData: {},
    // computed: {},
    // methods: {},
    // watch: {},
    // Options / DOM
    // el () {},
    // template: '',
    // render () {},
    // Options / Lifecycle Hooks
    // created () {},
    // mounted() {},
    // updated () {},
    // activated () {},
    // deactivated () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    //directives: {},
    // filters: {},
}
</script>
