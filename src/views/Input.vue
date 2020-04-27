<template>
    <div class="input">
        <el-input placeholder="请输入内容"
                  size="small"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input placeholder="请输入内容"
                  disabled
                  size="small"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="small"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="segmaInput.value1">
        </el-input>
        <el-input size="small"
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  v-model="segmaInput.value1">
        </el-input>
        <div>
            <el-checkbox v-model="checked1">备选项</el-checkbox>
            <el-checkbox v-model="checked">备选项</el-checkbox>
            <el-checkbox v-model="checked1"
                         disabled>备选项1
            </el-checkbox>
            <el-checkbox v-model="checked"
                         disabled>备选项1
            </el-checkbox>
        </div>
        <div>
            <el-radio v-model="radio"
                      label="1">备选项
            </el-radio>
            <el-radio v-model="radio"
                      label="2">备选项
            </el-radio>
            <el-radio v-model="radio"
                      label="1"
                      disabled>备选项
            </el-radio>
            <el-radio v-model="radio"
                      label="2"
                      disabled>备选项
            </el-radio>
        </div>
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
    margin: 0 auto;
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
