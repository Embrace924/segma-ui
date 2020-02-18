<template>
    <div>
        <el-button type="primary"
                   @click="loading=!loading">{{loading?'取消':'开始'}}Loading
        </el-button>
        <div class="loading"
             v-loading="loading">测试segmaLoading
        </div>
    </div>

</template>
<script>

export default {
    // Options / Data
    // components: {},
    data() {
        return {
            loading: false
        }
    },
    //props: [],
    // propsData: {},
    // computed: {},
    // methods: {},
    // watch: {},
    // Options / DOM
    // el () {},
    // template: '',
    // render () {},
    // Options / Lifecycle Hooks
    // created () {},
    // mounted() {},
    // updated () {},
    // activated () {},
    // deactivated () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    //directives: {},
    // filters: {},
}
</script>
<style scoped
       lang="less">
.loading {
    margin: 0 auto;
    border: 1px solid #dddddd;
    width: 500px;
    height: 400px;
    line-height: 400px;
}
</style>
