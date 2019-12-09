<template>
    <div>
        <el-button type="primary"
                   size="small">尺寸
        </el-button>
        <el-button type="primary"
                   size="middle"
                   plain>尺寸
        </el-button>
        <el-button disabled
                   size="mini">尺寸
        </el-button>
        <el-button type="danger"
                   plain>尺寸
        </el-button>
        <el-button type="danger"
                   size="small">尺寸
        </el-button>
        <el-button type="success"
                   size="small">尺寸
        </el-button>
        <el-button type="success"
                   plain
                   size="mini">尺寸
        </el-button>
        <el-button type="warning"
                   size="mini">尺寸
        </el-button>
        <el-button type="warning"
                   plain
                   size="mini">尺寸
        </el-button>
    </div>
</template>

<script>
export default {
	name: "Button"
}
</script>

<style lang="less"
       scoped>
@import "../assets/css/segma_btn.less";

</style>