<template>
    <div class="over">
        <el-table :data="tableData"
                  width="100%"
                  height="150px">
            <el-table-column prop="date"
                             sortable
                             label="日期">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
        <el-table :data="tableData"
                  width="100%">
            <el-table-column prop="date"
                             sortable
                             fixed="left"
                             width="120"
                             label="日期">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>

            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="120">
            </el-table-column>
            <el-table-column prop="address"
                             fixed="right"
                             label="地址"
                             width="220">
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
        <el-table :data="tableData"
                  border
                  class="slide-border">
            <el-table-column prop="date"
                             sortable
                             label="日期">
            </el-table-column>

            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
        <el-table :data="tableData"
                  border>
            <el-table-column prop="date"
                             sortable
                             label="日期">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
        <el-table :data="tableData2"
                  border
                  stripe>
            <el-table-column prop="date"
                             label="日期">
            </el-table-column>

            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
        <el-table :data="tableData"
                  border
                  stripe>
            <el-table-column prop="date"
                             label="日期">
            </el-table-column>

            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
        <el-table :data="tableData"
                  border
                  class="stripe-col">
            <el-table-column prop="date"
                             label="日期">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="address"
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
                    address: '上海市普陀区金沙江路 '
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路  '
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 '
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 '
                }
            ],
            tableData2: []
        }
    }
}
</script>
<style lang="less"
       scoped>
.el-table {
    margin: 10px auto;
    width: 60%;
    text-align: center;
}
</style>
