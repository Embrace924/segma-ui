<template>
    <div>
        <el-pagination small
                       background
                       :current-page="currPage"
                       :page-size="pageSize"
                       :total="total"
                       :hide-on-single-page="true"
                       layout="prev, pager, next,total, jumper">
        </el-pagination>
        <el-pagination background
                       :current-page="currPage"
                       :page-size="pageSize"
                       :total="total"
                       :hide-on-single-page="true"
                       layout="prev, pager, next,total, jumper">
        </el-pagination>

        <el-pagination :current-page="currPage"
                       :page-size="pageSize"
                       :total="total"
                       background
                       :hide-on-single-page="true"
                       layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>

        <el-pagination :current-page="currPage"
                       :page-size="pageSize"
                       :total="total"
                       background
                       :hide-on-single-page="false"
                       layout="prev, pager, next">
        </el-pagination>

        <!--class="simple"
            :hide-on-single-page="false"
            layout是必要的内容-->
        <el-pagination class="simple"
                       :current-page="currPage"
                       :page-size="pageSize"
                       :total="total"
                       :hide-on-single-page="false"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       layout="sizes,prev,slot, next">
            <!--必要的内容-->
            <span>{{pagerText}}</span>
        </el-pagination>

    </div>
</template>
<script>
export default {
    data() {
        return {
            currPage: 10,
            pageSize: 10,
            total: 1000,
        }
    },
    computed: {
        pagerText() {
            return `${this.currPage} /${ Math.ceil(this.total / this.pageSize)}`
        },
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val
            console.log(`
            每页
            ${val}
            条`);
        },
        handleCurrentChange(val) {
            this.currPage = val
            console.log(`当前页: ${val}`);
        }
    },
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
