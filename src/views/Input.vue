<template>
    <div class="input">
        <el-input size="mini"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="medium"
                  placeholder="请输入内容"
                  v-model="segmaInput.value1">
        </el-input>
        <!--icon的样式还要处理-->
        <el-input placeholder="请输入内容"
                  disabled
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="segmaInput.value1">
        </el-input>
        <!--前面的下拉框内部颜色还要处理-->
        <el-input placeholder="请输入内容"
                  v-model="segmaInput.value1"
                  class="input-with-select">
            <el-select v-model="select"
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
    </div>
</template>

<script>
export default {
    name: "Input", data() {
        return {
            segmaInput: {
                value1: ''
            },
            select: '请选择'
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
