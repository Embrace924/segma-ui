<template>
    <div class="input">
        <el-input placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  disabled
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="segmaInput.value1">
        </el-input>
    </div>
</template>

<script>
export default {
    name: "Input",
    data() {
        return {
            segmaInput: {
                value1: ''
            },
        };
    }
}
</script>

<style lang="less">
.input {
    margin: 0 auto;
    width: 300px;

    > div {
        margin-bottom: 20px;
    }

    .input-with-select {
        .el-select {
            width: 110px;
        }
    }
}

</style>
