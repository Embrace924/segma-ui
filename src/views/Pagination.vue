<template>
    <div>

        <el-pagination small
                       page-size.sync="1"
                       :current-page="10"
                       :total="1000"
                       background
                       :hide-on-single-page="true"
                       layout="prev, pager, next,total, jumper">
        </el-pagination>
        <el-pagination page-size.sync="1"
                       :current-page="10"
                       :total="1000"
                       background
                       :hide-on-single-page="true"
                       layout="prev, pager, next,total, jumper">
        </el-pagination>

        <el-pagination page-size.sync="1"
                       :current-page="10"
                       :total="1000"
                       background
                       :hide-on-single-page="true"
                       layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
        <el-pagination :hide-on-single-page="false"
                       :total="5"
                       background
                       :pager-count="5"
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
