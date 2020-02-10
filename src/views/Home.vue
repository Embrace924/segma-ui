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
<style lang="less"
       scoped>

@green: #3a70df;

.box {
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #383838;
    background-color: extract(@primary, 2);
}

//定义
.box-loop(@n, @i:1) when (@i <= @n) {
    .box@{i} {
        margin: 0 20px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        color: #383838;
        background-color: mix(#ffffff, @green, @i*10);
    }

    .box-black@{i} {
        width: 50px;
        height: 50px;
        line-height: 50px;
        color: #ffffff;
        background-color: mix(#383838, @green, @i*10);
    }
    .box-loop(@n, (@i + 1));
}

.about {
    display: flex;
    .box-loop(10);
}
</style>
