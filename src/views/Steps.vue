<!--Steps-->
<template>
    <div class="steps">
        <p>Basic Step steps-plus</p>
        <br>
        <el-steps :active="active"
                  finish-status="success"
                  class="steps-plus">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <br> <br>
        <p>Basic Step Small Step</p>
        <br>
        <el-steps :active="active"
                  finish-status="success">
            <el-step title="步骤 1步骤 1步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <br> <br>
        <p>Description Step</p>
        <br>
        <el-steps :active="active">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-steps :active="active">
            <el-step title="步骤 1"
                     description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2"
                     description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3"
                     description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
        <el-divider></el-divider>
        <p>Icon Step(设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。)</p>
        <br>
        <el-steps :active="active"
                  simple>
            <el-step title="步骤 1"
                     icon="el-icon-edit"></el-step>
            <el-step title="步骤 2"
                     icon="el-icon-upload"></el-step>
            <el-step title="步骤 3"
                     icon="el-icon-picture"></el-step>
        </el-steps>
        <br>
        <p>竖式步骤条</p><br>
        <div style="display: inline-block;margin-right: 20px; height: 300px; ">
            <el-steps direction="vertical"
                      finish-status="success"
                      :active="active">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"
                         description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </div>
        <div style="display: inline-block; height: 300px; ">
            <el-steps direction="vertical"
                      class="steps-plus"
                      finish-status="success"
                      :active="active">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"
                         description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </div>
        <el-button style="margin-top: 12px;"
                   size="small"
                   @click="next">下一步
        </el-button>
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
    width: 1000px;
    text-align: left;
}
</style>
