<!--Steps-->
<template>
    <div class="steps">
        <el-steps :active="active"
                  finish-status="success"
                  class="step-plus">
            <el-step title="步骤 1步骤 1步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <br> <br>
        <el-steps :active="active"
                  finish-status="success">
            <el-step title="步骤 1步骤 1步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;"
                   @click="next">下一步
        </el-button>
        <el-steps :active="active"
                  simple>
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"
            ></el-step>
            <el-step title="步骤 3"
            ></el-step>
        </el-steps>

        <el-steps :active="active"
                  simple>
            <el-step title="步骤 1"
                     icon="el-icon-edit"></el-step>
            <el-step title="步骤 2"
                     icon="el-icon-upload"></el-step>
            <el-step title="步骤 3"
                     icon="el-icon-picture"></el-step>
        </el-steps>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            active: 0
        };
    },
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    },
};
</script>

<style lang="less"
       scoped>
.steps {
    width: 1200px;
}
</style>
 