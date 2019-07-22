<template>
    <div class="segma-input">
        <div>输入框</div>
        <el-input class="segma-xs"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input class="segma-s"
                  placeholder="请输入内容"
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

</style>