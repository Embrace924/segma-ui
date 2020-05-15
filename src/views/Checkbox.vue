<!--Checkbox-->
<template>
    <div class="checkbox">
        <el-checkbox v-model="checked1">备选项</el-checkbox>
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <el-checkbox v-model="checked1"
                     disabled>备选项1
        </el-checkbox>
        <el-checkbox v-model="checked"
                     disabled>备选项1
        </el-checkbox>
        <br>
        <el-checkbox label="备选项1"
                     v-model="checked"
                     size="small"
                     border></el-checkbox>
        <el-checkbox label="备选项2"
                     v-model="checked1"
                     border
                     size="small"
                     disabled></el-checkbox>

        <el-checkbox-group v-model="checkboxGroup3"
                           size="small">
            <el-checkbox-button v-for="city in cities"
                                :label="city"
                                :disabled="city === '北京'"
                                :key="city">{{city}}
            </el-checkbox-button>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            checked1: false,
            checked: true,
            cities: [
                '上海',
                '北京',
                '广州',
                '深圳'
            ],
            checkboxGroup3: ['上海'],

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
<style lang="less">
.el-checkbox, .checkbox-group {
    margin-bottom: 20px;
}
</style>
