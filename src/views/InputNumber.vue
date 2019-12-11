<template>
    <div>
        <el-input-number v-model="segmaInputNumber.num"
                         :min="1"
                         :max="10"
                         label="描述文字"></el-input-number>
        <el-input-number v-model="segmaInputNumber.num"
                         controls-position="right"
                         size="small"
                         :min="1"
                         :max="10"
                         label="描述文字"></el-input-number>
        <el-input-number v-model="segmaInputNumber.num"
                         size="medium"
                         :disabled="true"
                         :min="1"
                         :max="10"
                         label="描述文字"></el-input-number>
    </div>
</template>

<script>
export default {
    name: "InputNumber",
    data() {
        return {
            segmaInputNumber: {
                num: 0
            }
        };
    }
}
</script>

<style scoped
       lang="less">

.input-number {
    width: 300px;
}
</style>