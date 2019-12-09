<template>
    <div>
        <div>输入框</div>
        <el-input size="mini"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="small"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="medium"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>

        <el-input placeholder="请输入内容"
                  disabled
                  suffix-icon="el-icon-date"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input class="segma-m"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-date"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input class="segma-l"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
    </div>
</template>

<script>
export default {
    name: "Input", data() {
        return {
            segmaInput: {
                value1: ''
            },
        };
    }
}
</script>

<style scoped
       lang="less">
@import "../assets/css/segmaUIResetElementUI";

.segma-input {
    width: 230px;
}
</style>