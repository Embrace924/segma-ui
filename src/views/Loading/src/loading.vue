<template>
    <transition name="el-loading-fade"
                @after-leave="handleAfterLeave">
        <div v-show="visible"
             class="el-loading-mask"
             :style="{ backgroundColor: background || '' }"
             :class="[customClass, { 'is-fullscreen': fullscreen }]">
            <div class="el-loading-spinner">
                <svg class="load-flower" version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 30 30" enable-background="new 0 0 100 100" xml:space="preserve">
                    <circle class="path1"  cx="7.5" cy="7.5" r="5" stroke="black"
                        stroke-width="0" fill="#1890ff" opacity="0.9"     />
                    <circle class="path2"  cx="21.5" cy="7.5" r="5" stroke="black"
                        stroke-width="0"  fill="#1890ff" opacity="0.7"  />
                    <circle class="path3"  cx="7.5" cy="21.5" r="5" stroke="black"
                        stroke-width="0"  fill="#1890ff" opacity="0.5"/>
                    <circle class="path4" cx="21.5" cy="21.5" r="5" stroke="black"
                        stroke-width="0"  fill="#1890ff" opacity="0.2"/>
                </svg>
                <i v-else
                   :class="spinner"></i>
                <p v-if="text"
                   class="el-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            text: null,
            spinner: null,
            background: null,
            fullscreen: true,
            visible: false,
            customClass: ''
        };
    },
    methods: {
        handleAfterLeave() {
            this.$emit('after-leave');
        },
        setText(text) {
            this.text = text;
        }
    }
};
</script>
<style scoped>
.load-flower {
    position: relative;
    width: 30px;
    height: 30px;
    -webkit-transition-duration: 1.5s;
    -moz-transition-duration: 1.5s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -webkit-animation: rotate 1.5s linear infinite;
    -moz-animation: rotate 1.5s linear infinite;
    -o-animation: rotate 1.5s linear infinite;
    animation: rotate 1.5s linear infinite;
}

.path1 {
    fill: #1890ff;
    opacity: 0.9;
    -webkit-animation: pulse1 1.5s infinite;
}

.path2 {
    fill: #1890ff;
    opacity: 0.7;
    -webkit-animation: pulse2 1.5s infinite;
}

.path3 {
    fill: #1890ff;
    opacity: 0.5;
    -webkit-animation: pulse3 1.5s infinite;
}

.path4 {
    stroke-linecap: round;
    fill: #1890ff;
    opacity: 0.2;
    -webkit-animation: pulse4 1.5s infinite;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes rotate {
    from {
        -moz-transform: rotate(0deg);
    }

    to {
        -moz-transform: rotate(359deg);
    }
}

@-o-keyframes rotate {
    from {
        -o-transform: rotate(0deg);
    }

    to {
        -o-transform: rotate(359deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}

@-webkit-keyframes pulse1 {
    0% {
        opacity: 0.9;
    }

    25% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.5;
    }

    75% {
        opacity: 0.5;
    }

    100% {
        opacity: 0.9;
    }
}

@-webkit-keyframes pulse2 {
    0% {
        opacity: 0.7;
    }

    25% {
        opacity: 0.9;
    }

    50% {
        opacity: 0.2;
    }

    75% {
        opacity: 0.5;
    }

    100% {
        opacity: 0.7;
    }
}

@-webkit-keyframes pulse3 {
    0% {
        opacity: 0.2;
    }

    25% {
        opacity: 0.5;
    }

    50% {
        opacity: 0.7;
    }

    75% {
        opacity: 0.9;
    }

    100% {
        opacity: 0.2;
    }
}

@-webkit-keyframes pulse4 {
    0% {
        opacity: 0.5;
    }

    25% {
        opacity: 0.7;
    }

    50% {
        opacity: 0.9;
    }

    75% {
        opacity: 0.2;
    }

    100% {
        opacity: 0.5;
    }

}
</style>
