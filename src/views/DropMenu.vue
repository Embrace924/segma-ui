<!--DropMenu-->
<template>
    <div class="drop-menu">
        <!--<el-dropdown trigger="click">-->
        <!--<span class="el-dropdown-link">-->
        <!--下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
        <!--<el-dropdown-menu slot="dropdown">-->
        <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
        <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
        <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
        <!--<el-dropdown-item disabled>双皮奶</el-dropdown-item>-->
        <!--<el-dropdown-item divided>蚵仔煎-->
        <!--</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<br> <br>-->
        <!--<el-dropdown>-->
        <!--<el-button type="primary"-->
        <!--size="small">-->
        <!--hover更多菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</el-button>-->
        <!--<el-dropdown-menu slot="dropdown">-->
        <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
        <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
        <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
        <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
        <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<br> <br>-->
        <!--<el-dropdown trigger="click">-->
        <!--<span class="el-dropdown-link">-->
        <!--click下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
        <!--<el-dropdown-menu slot="dropdown">-->
        <!--<el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>-->
        <!--<el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>-->
        <!--<el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>-->
        <!--<el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>-->
        <!--<el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->

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
        }, handleCommand(command) {
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
 