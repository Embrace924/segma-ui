<!--Radio-->
<template>
    <div class="radio">
        <el-radio v-model="radio"
                  label="1">备选项
        </el-radio>
        <el-radio v-model="radio"
                  label="2">备选项
        </el-radio>
        <el-radio v-model="radio"
                  label="1"
                  disabled>备选项
        </el-radio>
        <el-radio v-model="radio"
                  label="2"
                  disabled>备选项
        </el-radio>
    </div>
</template>

<script>
export default {
    name: 'Radio',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            radio: false
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

 