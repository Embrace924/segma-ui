<!--popconfirm-->
<template>
    <div class="popconfirm">
        <el-popconfirm title="这是一段内容确定删除吗？">
            <el-button slot="reference">删除</el-button>
        </el-popconfirm>
        <el-popconfirm confirmButtonText='确定'
                       cancelButtonText='取消'
                       icon="el-icon-info"
                       iconColor="red"
                       title="这是一段内容确定删除吗？">
            <el-button slot="reference">删除</el-button>
        </el-popconfirm>
    </div>
</template>

<script>
export default {
    name: 'popconfirm',
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
       scoped></style>
 