<!--DropMenu-->
<template>
    <div class="drop-menu">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎
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
 