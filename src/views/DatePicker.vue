<!--DatePicker-->
<template>
    <div class="DatePicker">
        <el-time-picker v-model="value1"
                        size="small"
                        placeholder="任意时间点">
        </el-time-picker>
    </div>
</template>

<script>
export default {
    name: 'DatePicker',
    // components: {},
    // directives: {},
    // filters: {},
    // model: {},
    // props: [],
    data() {
        return {
            value1: ''
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

