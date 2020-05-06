<template>
    <div>
        <el-button type="primary"
                   size="small">主按钮normal
        </el-button>
        <el-button type="primary"
                   size="small"
                   icon="el-icon-search">主按钮带icon
        </el-button>
        <el-button disabled
                   type="primary"
                   size="small">主按钮disabled
        </el-button>
        <el-button type="primary"
                   :loading="true"
                   size="small">主按钮loading
        </el-button>
        <br>
        <el-button type="info"
                   size="small">次按钮normal
        </el-button>
        <el-button type="info"
                   size="small"
                   icon="el-icon-search">次按钮带icon
        </el-button>
        <el-button disabled
                   type="info"
                   size="small">次按钮disabled
        </el-button>
        <el-button type="info"
                   :loading="true"
                   size="small">次按钮loading
        </el-button>
        <br>
        <el-button size="small">普通按钮normal</el-button>

        <el-button size="small"
                   icon="el-icon-search">普通按钮带icon
        </el-button>
        <el-button disabled
                   size="small">普通按钮disable
        </el-button>
        <el-button :loading="true"
                   size="small">普通按钮loading
        </el-button>
        <br>


        <!--<el-button size="small"-->
        <!--icon="el-icon-search"-->
        <!--disabled>带icon按钮-->
        <!--</el-button>-->


    </div>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style lang="less"
       scoped>

.el-button {
    margin-bottom: 10px;
}
</style>
