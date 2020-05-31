<!--NavMenu-->
<template>
    <div class="nav-menu">
        <!--注意第一层可点开的情况 有icon 需要加  class="el-menu-has-icon"-->
        <el-menu default-active="2"
                 class="el-menu-has-icon"
                 @open="handleOpen"
                 @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="1-1">
                    <template slot="title">
                        <i class="el-icon-picture"></i>
                        <span>选项1</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <template slot="title">
                        <i class="el-icon-picture"></i>
                        <span>选项2</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <template slot="title">
                        <i class="el-icon-picture"></i>
                        <span>选项3</span>
                    </template>
                </el-menu-item>
                <!--注意第二层可点开的情况 有icon 需要加  class="el-menu-has-icon"-->
                <el-submenu index="1-4"
                            class="el-menu-has-icon">
                    <template slot="title">
                        <i class="el-icon-picture"></i>
                        <span>选项4</span>
                    </template>
                    <el-menu-item index="1-4-1">
                        <span>选项4-1</span>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-promotion"></i>
                    <span>导航二</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>

            <el-menu-item index="3">
                <i class="el-icon-picture"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4"
                          disabled>
                <i class="el-icon-s-flag"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <el-divider></el-divider>

        <el-menu default-active="1"
                 @open="handleOpen"
                 @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <span>导航一</span>
                </template>
                <el-menu-item index="1-1">
                    <template slot="title">
                        <span>选项1</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <template slot="title">
                        <span>选项2</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <template slot="title">
                        <span>选项3</span>
                    </template>
                </el-menu-item>
                <el-submenu index="1-4">
                    <template slot="title">
                        <span>选项4</span>
                    </template>
                    <el-menu-item index="1-4-1">
                        <template slot="title">
                            <span>选项4-1</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <span>导航二</span>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>

            <el-menu-item index="3">
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4"
                          disabled>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
export default {
    name: 'NavMenu',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    // data() {},
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
.nav-menu {
    width: 200px;
}
</style>
