<template>
    <div class="about">
        <div class="box"></div>
        <div>
            <div v-for="i in 10"
                 :class="boxFun('box',i)">{{i*10}}%
            </div>
        </div>

        <div>
            <div v-for="i in 10"
                 :class="boxFun('box-black',i)">{{i*10}}%
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods: {
        boxFun(type, i) {
            return `${type}${i}`
        }
    }
}
</script>

