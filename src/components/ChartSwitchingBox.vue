<template>
    <div class="v_wrap">
        <a class="prev"
           v-if="data.length>2"
           :style="{opacity:page===1?'0':'1',cursor:page===1?'not-allowed':'pointer'}"
           @click="page!==1&&prev()"
           href="#"><span>‹</span></a>
        <div class="v_cont"
             :style="{height:boxHeight+'px'}">
            <div class="v_show">
                <ul>
                    <li v-for="item in data"
                        class="li"
                        :key="item"
                        :style="{width:((v_width-size*20)/size)+'px',height:boxHeight+'px'}">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <a class="next"
           v-if="data.length>2"
           :style="{opacity:page===page_count?'0':'1',cursor:page===page_count?'not-allowed':'pointer'}"
           @click="page<page_count&& next()"><span>›</span></a>
    </div>
</template>

<script>

/**
 *
 * @param ele
 * @param cssStyle
 * @returns {number}
 */
let getComputedStyle = (ele, cssStyle) => {
    return parseInt(window.getComputedStyle(ele, null)[cssStyle], 10);
};
export default {
    name: 'CardSwitching',
    props: {
        data: {
            default: () => {
                let xData = [];
                let n = 100;
                for (let i = 0; i < n; i++) {
                    xData.push(`${i}`);
                }
                return xData
            }
        },
        size: {
            require: true,
            type: Number,
            default: 4
        },
        boxHeight: {
            require: true,
            type: Number,
            default: 310
        },
    },
    data() {
        return {
            // 当前页数
            page: 1,
            // scroll元素
            v_wrap: '',
            // scroll_list元素
            v_show: '',
            // box元素
            v_cont: '',
            //
            v_width: '',
            // 子元素的长度
            len: 0,
            //
            page_count: 0,
            // 向左的距离
            v_show_left: 0,
            //一页的个数
            minWidth: 1150,
            //弹框
            dialogVisible: false,

        };
    },
    watch: {
        v_width() {
            this.getData(this.data)
        }
    },
    mounted() {
        this.getData(this.data)
        let _this = this
        window.addEventListener('resize', function() {
            _this.v_width = getComputedStyle(_this.v_cont, 'width');
        })
    },
    methods: {
        /**
         * 计算显示多少个图形 以及每个图像的宽度
         */
        getData(data) {
            this.v_wrap = document.getElementsByClassName('v_wrap')[0]; // 根据当前点击的元素获取到父元素
            this.v_cont = this.v_wrap.getElementsByClassName('v_cont')[0]; // 找到展示区域的外围区域
            this.v_show = this.v_wrap.getElementsByClassName('v_show')[0]; // 找到展示的区域
            this.v_width = getComputedStyle(this.v_cont, 'width');
            this.v_show.style.left = '0px';
            this.len = data.length;
            this.page_count = Math.ceil(this.len / this.size); // 只要不是整数，就往大的方向取最小的整数
            this.page = 1; //默认开始page=1
        },

        prev() {
            const { v_show, page_count, v_width, page } = this;
            if (page === 1) return;
            v_show.style.left = '0px';
            if (this.page === 1) {
                v_show.style.left = this.v_show_left - v_width * (page_count - 1) + 'px';
                this.page = page_count;
            } else {
                v_show.style.left = -(v_width) * (this.page - 2) + 'px';
                this.page--;
            }
        },
        next() {
            const { v_show, page_count, v_width, page } = this;
            if (page === page_count) return;
            v_show.style.left = '0px';
            if (this.page === page_count) {
                v_show.style.left = '0px';
                this.page = 1;
            } else {
                v_show.style.left = -(v_width) * this.page + 'px';
                this.page++;
            }
        },
    }
}
;
</script>

<style scoped
       lang="scss">
.v_wrap {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    min-height: 133px;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
}

.v_cont {
    overflow: hidden;
    position: relative;
    margin: auto auto;
    width: 100%;

    li {
        display: block;
        float: left;
        margin-right: 10px;
        margin-left: 10px;
        box-sizing: border-box;
        font-size: 12px;
        text-align: center;
        text-decoration: none;
        color: #333333;
        cursor: pointer;
    }
}

a.prev {
    margin-left: 1%;

    span {
        display: inline-block;
        margin-top: -32%;
        margin-left: 20%;
        font-size: 2rem;
        user-select: none;
    }
}

a.next {
    margin-right: 1%;

    span {
        display: inline-block;
        margin-top: -32%;
        margin-left: 25%;
        font-size: 2rem;
        user-select: none;
    }
}

a.prev, a.next {
    display: block;
    float: left;
    z-index: 2;
    margin: auto 0;
    border-radius: 15%;
    width: 20px;
    height: 38px;
    color: #ffffff;
    background: #bebebe;
    cursor: pointer;
}

.v_show {
    position: absolute;
    width: 10000em;
    transition: all 0.5s;

    ul {
        margin: 0;
        padding: 0;

        .li {
            border: 1px solid #dddddd;
        }
    }
}

</style>


