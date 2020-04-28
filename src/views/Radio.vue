<!--Radio-->
<template>
    <div class="radio">
        <el-radio v-model="radio"
                  label="1">备选项
        </el-radio>
        <el-radio v-model="radio"
                  label="2">备选项
        </el-radio>
        <el-radio v-model="radio2"
                  label="1"
                  disabled>备选项
        </el-radio>
        <el-radio v-model="radio2"
                  label="2"
                  disabled>备选项
        </el-radio>
        <div>
            <el-radio v-model="radio"
                      label="1"
                      border
                      size="small">备选项1
            </el-radio>
            <el-radio v-model="radio"
                      label="2"
                      border
                      size="small">备选项2
            </el-radio>
        </div>
        <div>
            <el-radio v-model="radio"
                      label="1"
                      border
                      disabled
                      size="small">备选项2
            </el-radio>
            <el-radio v-model="radio"
                      label="2"
                      border
                      disabled
                      size="small">备选项2
            </el-radio>
        </div>

        <el-radio-group v-model="radio3"
                        size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"
                             disabled></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
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
            radio: false,
            radio2: true,
            radio3: '上海'
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
<style lang="less">
.radio {
    padding: 0 20px;
    text-align: left;

    > label {
        margin-bottom: 20px;
    }

    > div {
        margin-bottom: 20px;
    }
}
</style>

 