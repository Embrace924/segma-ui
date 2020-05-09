<!--Switch-->
<template>
    <div class="switch">
        <el-switch v-model="value1"
                   active-text="开启可选"
                   inactive-text="开启可选">
        </el-switch>
        <br>
        <el-switch v-model="value2"
                   disabled
                   active-text="开启不可选"
                   inactive-text="开启不可选">
        </el-switch>
        <br>
        <el-switch v-model="value3"
                   active-text="关闭可选"
                   inactive-text="关闭可选">
        </el-switch>
        <br>
        <el-switch v-model="value4"
                   disabled
                   active-text="关闭不可选"
                   inactive-text="关闭不可选">
        </el-switch>
        <br>
        <el-switch v-model="value5"
                   active-color="#13ce66"
                   inactive-color="#222222"
                   active-text="自定义颜色"
                   inactive-text="自定义颜色">
        </el-switch>

    </div>
</template>

<script>
export default {
    name: 'Switch',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            value1: true,
            value2: true,
            value3: false,
            value4: false,
            value5: false,
        }
    },
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    // methods: {},
};
</script>

<style lang="less"
       scoped>
/deep/ .el-switch {
    margin-bottom: 20px;
}
</style>
 