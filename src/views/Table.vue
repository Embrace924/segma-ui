<template>
    <div>
        <el-table :data="tableData"
                  border>
            <el-table-column
                prop="date"
                sortable
                label="日期">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
                <template slot-scope="scope">
                    <el-tooltip class="item"
                                effect="dark"
                                :content="scope.row.address"
                                placement="top-start">
                        <div class="popover">{{scope.row.address}}</div>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: "Table",
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    }
}
</script>

<style scoped
       lang="less">
.el-table .sort-caret.ascending {
    display: inline-block;
    width: 80px;
    height: 30px;
    background-image: url("../assets/images/sortUp.svg");
}
</style>