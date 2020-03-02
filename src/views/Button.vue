<template>
    <div>
        <el-button size="small"
                   plain>default
        </el-button>
        <el-button size="small"
                   :loading="true"
                   plain>loading
        </el-button>
        <el-button size="small"
                   disabled>disabled
        </el-button>

        <br>
        <el-button size="small"
                   type="primary">按钮
        </el-button>
        <el-button size="small"
                   type="primary"
                   plain>次要
        </el-button>
        <el-button size="small"
                   type="primary"
                   :loading="true">
        </el-button>
        <el-button size="small"
                   type="primary"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button size="small"
                   type="danger">按钮
        </el-button>
        <el-button size="small"
                   type="danger"
                   plain>次要
        </el-button>
        <el-button size="small"
                   type="danger"
                   :loading="true">
        </el-button>
        <el-button size="small"
                   type="danger"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button size="small"
                   type="success">按钮
        </el-button>
        <el-button size="small"
                   type="success"
                   plain>次要
        </el-button>
        <el-button size="small"
                   type="success"
                   :loading="true">
        </el-button>
        <el-button size="small"
                   type="success"
                   :loading="true"
                   plain>
        </el-button>
        <br>

        <el-button size="small"
                   type="warning">按钮
        </el-button>
        <el-button size="small"
                   type="warning"
                   plain>次要
        </el-button>
        <el-button size="small"
                   type="warning"
                   :loading="true">
        </el-button>
        <el-button size="small"
                   type="warning"
                   :loading="true"
                   plain>
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

.el-button {
    margin-bottom: 10px;
}
</style>
