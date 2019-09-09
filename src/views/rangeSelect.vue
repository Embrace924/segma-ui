<template>
    <range-select-bar :userCutList="cutList"
                      :min="min"
                      :max="max"
                      @changeData="getCutData">
    </range-select-bar>
</template>
<script>
import rangeSelectBar from '../components/rangeSelectBar'

export default {
    components: { rangeSelectBar },
    data() {
        return {
            cutList: [
                0.5,
                0.9
            ],
            min: 0,
            max: 1

        }
    },
    methods: {
        getCutData(val) {
            this.cutList = val
        },
    },
}
</script>
<style rel="stylesheet/scss"
       lang="scss">

</style>