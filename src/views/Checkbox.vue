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
                     size="small"></el-checkbox>
        <el-checkbox label="备选项1"
                     v-model="checked"
                     size="small"
                     disabled
                     border></el-checkbox>
        <el-checkbox label="备选项2"
                     v-model="checked1"
                     border
                     disabled
                     size="small"></el-checkbox>
        <el-checkbox-group v-model="checkboxGroup3"
                           size="small">
            <el-checkbox-button v-for="city in cities"
                                :label="city"
                                :disabled="city==='北京'"
                                :key="city">{{city}}
            </el-checkbox-button>
        </el-checkbox-group>
        <br>
        <br>
        <el-checkbox-group v-model="checkboxGroup3"
                           :min="1"
                           :max="2">
            <el-checkbox v-for="city in cities"
                         :label="city"
                         :key="city">{{city}}
            </el-checkbox>
        </el-checkbox-group>


        <el-checkbox :indeterminate="isIndeterminate"
                     v-model="checkAll"
                     @change="handleCheckAllChange">全选
        </el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities"
                           @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities"
                         :label="city"
                         :key="city">{{city}}
            </el-checkbox>
        </el-checkbox-group>

        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用"
                         disabled></el-checkbox>
            <el-checkbox label="选中且禁用"
                         disabled></el-checkbox>
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
            checkAll: false,
            isIndeterminate: true,
            checkedCities: [],
            checkList: ['选中且禁用', '复选框 A']
        }
    },

    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
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
