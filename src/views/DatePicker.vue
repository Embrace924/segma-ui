<!--DatePicker-->
<template>
    <div class="DatePicker">
        <el-time-select size="small"
                        v-model="value1"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                          }"
                        placeholder="选择时间">
        </el-time-select>

        <el-time-picker v-model="value1"
                        size="small"
                        placeholder="任意时间点">
        </el-time-picker>
        <br>
        <el-date-picker v-model="value2"
                        type="date"
                        size="small"
                        placeholder="选择日期"
                        :picker-options="pickerOptionsData">
        </el-date-picker>
        <br>
        <el-date-picker v-model="value3"
                        type="year"
                        size="small"
                        placeholder="选择年">
        </el-date-picker>
        <br>
        <el-date-picker v-model="value4"
                        type="month"
                        size="small"
                        placeholder="选择月">
        </el-date-picker>
        <br>
        <el-date-picker v-model="value5"
                        type="week"
                        size="small"
                        format="yyyy 第 WW 周"
                        placeholder="选择周">
        </el-date-picker>
        <br>
        <el-date-picker v-model="value6"
                        type="daterange"
                        size="small"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptionsRange">
        </el-date-picker>
    </div>
</template>

<script>
export default {
    name: 'DatePicker',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',

            pickerOptionsData: {
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    },
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }
                ]
            },
            pickerOptionsRange: {
                disabledDate(time) {
                    return time.getTime() < Date.now();
                },
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [
                                start,
                                end
                            ]);
                        }
                    },
                    {
                        text: '最近一月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [
                                start,
                                end
                            ]);
                        }
                    },
                    {
                        text: '最近三月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [
                                start,
                                end
                            ]);
                        }
                    }
                ]
            },
        }
    },
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>
<style scoped
       lang="less">
/deep/ .el-date-editor {
    margin-bottom: 20px;
}
</style>

