<!--Checkbox-->
<template>
    <div class="checkbox">
        <el-checkbox v-model="checked1">备选项</el-checkbox>
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <el-checkbox v-model="checked1"
                     disabled>备选项1
        </el-checkbox>
        <el-checkbox v-model="checked"
                     disabled>备选项1
        </el-checkbox>
        <el-checkbox label="备选项1"
                     v-model="checked"
                     size="small"
                     border></el-checkbox>
        <el-checkbox label="备选项2"
                     v-model="checked1"
                     border
                     size="small"
                     disabled></el-checkbox>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            checked1: false,
            checked: true

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
