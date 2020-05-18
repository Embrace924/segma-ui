<!--popconfirm-->
<template>
    <div class="popconfirm">

        <el-popconfirm confirmButtonText='确定'
                       cancelButtonText='取消'
                       cancelButtonType="info"
                       icon="el-icon-info"
                       title="确定删除此分类？">
            <el-button slot="reference"
                       size="small">删除
            </el-button>
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

