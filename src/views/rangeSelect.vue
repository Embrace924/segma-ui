<template>
    <div>
        <range-select-bar :userCutList="importanceData.cutList"
                          :min="importanceData.min"
                          :max="importanceData.max"
                          @changeData="getCutData">
        </range-select-bar>
    </div>
</template>
<script>
import rangeSelectBar from '../components/rangeSelectBar'

export default {
    components: { rangeSelectBar },
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
    methods: {
        getCutData(val) {
            this.importanceData.cutList = val
        },
    },
}
</script>
<style rel="stylesheet/scss"
       lang="scss">

</style>