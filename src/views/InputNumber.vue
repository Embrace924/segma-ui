<template>
    <div class="segma-input-number">
        <div>计数器</div>
        <el-input-number v-model="segmaInputNumber.num"
                         class="segma-xs"
                         :min="1"
                         :max="10"
                         label="描述文字"></el-input-number>
        <el-input-number v-model="segmaInputNumber.num"
                         class="segma-xs"
                         controls-position="right"
                         :min="1"
                         :max="10"
                         label="描述文字"></el-input-number>
        <el-input-number v-model="segmaInputNumber.num"
                         class="segma-m"
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
@import "../assets/css/segmaUIResetElementUI";

.segma-input-number {
    width: 300px;
    padding: 20px 0;
    box-sizing: border-box;
}
</style>