<template>
    <div class="input">
        <el-input placeholder="请输入内容"
                  size="small"
                  show-word-limit
                  maxlength="10"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  suffix-icon="el-icon-s-promotion"
                  size="small"
                  v-model="segmaInput.value1">
        </el-input>

        <el-input size="small"
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  clearable
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="small"
                  placeholder="请输入内容"
                  disabled
                  prefix-icon="el-icon-search"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  v-model="segmaInput.value1"
                  size="small">
            <template slot="prepend">Http://</template>
            <template slot="append">.com</template>
        </el-input>
        <el-input placeholder="请输入内容"
                  size="small"
                  v-model="segmaInput.value1"
                  class="input-with-select">
            <el-select v-model="segmaInput.value1"
                       slot="prepend"
                       placeholder="请选择">
                <el-option label="餐厅名"
                           value="1"></el-option>
                <el-option label="订单号"
                           value="2"></el-option>
                <el-option label="用户电话"
                           value="3"></el-option>
            </el-select>
            <el-button slot="append"
                       icon="el-icon-search"></el-button>
        </el-input>
        <el-input type="textarea"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1"
                  rows="3"
                  show-word-limit
                  maxlength="30"></el-input>
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
            checked: false,
            checked1: true,
            radio: '1',
        };
    }
}
</script>

<style lang="less">
.input {
    width: 500px;

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
