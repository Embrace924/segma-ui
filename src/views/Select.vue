<template>
    <div class="segma-select">
        <div> 下拉菜单</div>
        <el-select v-model="segmaSelect.value1"
                   class="segma-xs"
                   clearable
                   placeholder="请选择">
            <el-option
                v-for="item in segmaSelect.value1Options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="segmaSelect.value1"
                   class="segma-s"
                   clearable
                   placeholder="请选择">
            <el-option
                v-for="item in segmaSelect.value1Options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="segmaSelect.value1"
                   class="segma-m"
                   clearable
                   placeholder="请选择">
            <el-option
                v-for="item in segmaSelect.value1Options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="segmaSelect.value1"
                   class="segma-l"
                   clearable
                   placeholder="请选择">
            <el-option
                v-for="item in segmaSelect.value1Options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="segmaSelect.value2"
                   class="segma-m"
                   multiple
                   placeholder="请选择">
            <el-option
                v-for="item in segmaSelect.value2Options"
                class="segma-m-option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.value==='选项2'">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: "select", data() {
        return {
            segmaSelect: {
                value1: '',
                value1Options: [
                    {
                        value: '1',
                        label: '测试1'
                    },
                    {
                        value: '2',
                        label: '测试2'
                    }
                ],
                value2: '',
                value2Options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
            },

        };
    }
}
</script>

<style lang="less">
@import "../assets/css/segmaUIResetElementUI";

</style>