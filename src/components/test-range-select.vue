<template>
    <div>
        <range-select-importance :userCutList="importanceData.cutList"
                                 :min="importanceData.min"
                                 :max="importanceData.max"
                                 @changeData="getCutData">
        </range-select-importance>
    </div>
</template>
<script>
import rangeSelectImportance from './rangeSelectImportance'

export default {
    components: { rangeSelectImportance },
    // Options / Data
    // components: {},
    data() {
        return {
            importanceData: {
                cutList: [
                    0.5,
                    0.9
                ], min: 0, max: 1
            }
        }
    },
    //props: [],
    // propsData: {},
    // computed: {},
    methods: {
        getCutData(val) {
            this.importanceData.cutList = val
        },
    },
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
<style rel="stylesheet/scss"
       lang="scss">

</style>