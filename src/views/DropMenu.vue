<!--DropMenu-->
<template>
    <div class="drop-menu">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
             下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                <el-dropdown-item command="双皮奶"
                                  disabled>双皮奶
                </el-dropdown-item>
                <el-dropdown-item command="蚵仔煎"
                                  divided>蚵仔煎
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'DropMenu',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            activeIndex: '2'
        }
    },
    // computed: {},
    // watch: {},
    // mounted() {},
    // created() {},
    // activated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleCommand(command) {
            this.$message.success('click on item ' + command);
        }
    },
};
</script>

<style lang="less"
       scoped>
.drop-menu {
    margin: 20px auto;
    width: 200px;
}
</style>
 