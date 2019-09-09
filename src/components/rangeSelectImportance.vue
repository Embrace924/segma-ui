<template>
    <div class="range-container showLabel"
         :id="'rangeContainer'+randomIndex"
         @click.stop="">
        <div class="line isRange"
             :style="{backgroundColor:bgColor}">
            <div class="btn-wrapper"
                 v-for="(i,index) in cutList"
                 :key="`cutList-${i}-${index}`"
                 :style="btnWrapperStyle(i,index)"
                 @click.stop=""
                 @mousedown="moveBtn(index,$event)">
                <div class="value-input"
                     @mousemove.stop="">
                    <div class="box">
                        <input class="inputBox"
                               :style="{opacity: isInput?1:0}"
                               type="text"
                               :value="cutList[index]"
                               @change="inputCutList(index,$event)"
                               @blur="isInput = false;" />
                        <span class="textBox"
                              :style="{visibility: isInput?'hidden':''}">{{i}}</span>
                    </div>
                </div>
                <div class="btn"
                     :style="{backgroundColor:selectColor}"></div>
            </div>
            <div class="rangeLine"

                 :style="rangeLineStyle()"></div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        //用户传入分段
        userCutList: Array,
        //整个范围最小值
        min: {
            type: Number,
            default: function() {
                return this.userCutList[0];
            }
        },
        //整个范围最大值
        max: {
            type: Number,
            default: function() {
                return this.userCutList[this.userCutList.length - 1];
            }
        },
        //用户设定拖动的上下限
        lowerLimit: Number,
        //用户设定拖动的上下限
        upperLimit: Number,
        //bgColor
        bgColor: {
            type: String,
            default: '#cbdbe5'
        },
        selectColor: {
            type: String,
            default: '#1cc19f'
        }
    },
    data() {
        return {
            //最外层元素
            wrapper: '',
            //唯一di
            randomIndex: Math.random(),
            //当前拖动的元素
            el: '',
            //当前拖动元素的index
            currBtn: '',
            //是否可以输入
            isInput: false,
            //是否检测碰撞
            canRun: true,
            //所有的输入框
            inputEls: [],
            //前后输入框交叉宽度
            impactWidth: 0,
            //拖动步数
            step: 0.01
        };
    },
    computed: {
        cutList() {
            return this.userCutList || []
        },
        minValue() {
            if (!this.cutList) return;
            return this.cutList[0];
        },
        maxValue() {
            if (!this.cutList) return;
            return this.cutList[this.cutList.length - 1];
        },
        // 每一个像素代表多少值
        perPxValue() {
            if (!this.wrapper) return;
            return (this.max - this.min) / this.wrapper.clientWidth;
        },
    },
    mounted() {
        this.wrapper = document.getElementById('rangeContainer' + this.randomIndex);
        this.inputEls = this.wrapper.getElementsByClassName('value-input');
        this.checkImpact();
    },
    methods: {
        /**
         * mouseDown圆圈
         **/
        moveBtn(index, e) {
            this.el = e.currentTarget || e.target;
            this.wrapper = this.el.parentNode.parentNode;
            this.currBtn = index;
            document.addEventListener('mousemove', this.handleMove);
            document.addEventListener('mouseup', this.handleUp);
            this.el.addEventListener('dblclick', () => {
                this.isInput = true;
                this.el.getElementsByClassName('value-input')[0].getElementsByTagName('input')[0].focus();
            });
        },
        /**
         * 拖动
         **/
        handleMove(e) {
            let index = this.currBtn;
            let min = this.min;
            let offsetLeft = e.clientX - this.wrapper.getBoundingClientRect().left;
            // 鼠标位置的值
            let offsetValue = offsetLeft * this.perPxValue;
            // 按step对值进行处理 控制当前左右移动上下限
            let minMove = (this.cutList[index - 1] - this.min || 0) / this.perPxValue;
            let maxMove = (this.cutList[index + 1] - this.min || this.max - this.min) / this.perPxValue;
            if (offsetLeft >= minMove && offsetLeft <= maxMove) {
                let value = Math.round((offsetValue + min) / this.step) * this.step;

                if (value < (this.cutList[index - 1] || this.min)) {
                    value = (this.cutList[index - 1] || this.min);
                }
                if (value > (this.cutList[index + 1] || this.max)) {
                    value = (this.cutList[index + 1] || this.max);
                }
                // 控制用户设定的上下限
                if (index === 0 && typeof this.lowerLimit !== 'undefined' && value > this.lowerLimit) {
                    value = this.lowerLimit;
                }
                if (index === this.cutList.length - 1 && typeof this.upperLimit !== 'undefined' && value < this.upperLimit) {
                    value = this.upperLimit;
                }
                // 值发生变化才修改数据
                //            console.log('value+++++', value)
                if (value !== this.cutList[index]) {
                    let newValue = Math.round(value * 100) / 100;
                    this.cutList.splice(index, 1, newValue);
                    this.$emit('changeData', this.cutList);
                }
            }
            // 如果所有标签一直显示，做碰撞检测
            // 设置节流
            if (!this.canRun) {
                return;
            }
            this.canRun = false;
            setTimeout(() => {
                this.checkImpact();
                this.canRun = true;
            }, 100);
        },
        /**
         * 拖完
         **/
        handleUp() {
            document.removeEventListener('mousemove', this.handleMove);
            document.removeEventListener('mouseup', this.handleUp);
        },
        /**
         * 输入框改值
         **/
        inputCutList(index, e) {
            let value = (e.currentTarget || e.target).value;
            let minData = this.cutList[index - 1] || this.min;
            let maxData = this.cutList[index + 1] || this.max;
            let data = Math.round(value * 100) / 100;
            if (data < minData) {
                this.cutList.splice(this.currBtn, 1, Math.round(minData * 100) / 100);
            } else if (data > maxData) {
                this.cutList.splice(this.currBtn, 1, Math.round(maxData * 100) / 100);
            } else {
                this.cutList.splice(this.currBtn, 1, Math.round(value * 100) / 100);
            }

            this.$emit('changeData', this.cutList);
            this.isInput = false;
        },
        /**
         * 计算输入框是否打架,处理输入框位置
         */
        checkImpact() {
            Array.from(this.inputEls).forEach((el, index) => {
                // 当前元素同前一个元素和后一个元素比较
                let elLeft = el.getBoundingClientRect().left;
                if (index !== this.inputEls.length - 1) {
                    let nextEl = this.inputEls[index + 1];
                    let nextElLeft = nextEl.getBoundingClientRect().left;
                    //判断输入框是否碰撞    // 碰撞后一个
                    if (elLeft + el.offsetWidth > nextElLeft && elLeft + el.offsetWidth < nextElLeft + nextEl.offsetWidth) {
                        //两个输入框交叉宽度  一直交叉一直计算加法
                        this.impactWidth += elLeft + el.offsetWidth - nextElLeft;
                    } else {
                        //两个输入框交叉宽度  没有交叉做减法
                        if (nextElLeft - elLeft - el.offsetWidth > 0 && this.impactWidth > 0) {
                            this.impactWidth -= nextElLeft - elLeft - el.offsetWidth;
                        } else {
                            this.impactWidth = 0;
                        }
                    }
                    //为了避免两个输入框挤压打架,进行偏移
                    el.style.transform = 'translateX(-50%) translateX(-' + (this.impactWidth / 2) + 'px)';
                    nextEl.style.transform = 'translateX(-50%) translateX(' + (this.impactWidth / 2) + 'px)';
                }
            });
        },
        /**
         * 拖动圆圈的位置与层级
         **/
        btnWrapperStyle(i, index) {
            let { currBtn, perPxValue, min } = this;
            let style = { left: '0px', zIndex: '' };
            style.left = ((i - min) / perPxValue) + 'px';
            style.zIndex = currBtn === index ? 2 : 1;
            return style
        },
        /**
         * 已选线段样式
         * @returns {{width: string, marginLeft: string}}
         */
        rangeLineStyle() {
            let { maxValue, minValue, perPxValue, min, selectColor } = this;
            let style = { width: '0px', marginLeft: '0px', backgroundColor: selectColor };
            style.width = (maxValue - minValue) / perPxValue + 'px';
            style.marginLeft = (minValue - min) / perPxValue + 'px';
            return style
        }
    }

};
</script>
<style rel="stylesheet/scss"
       lang="scss">
$bgColor: #333333;
$themeColor: #1cc19f;
.range-container {
    position: relative;
    width: 100%;
    height: 80px;
    margin: 0 auto 0 auto;
    border: none;
    background: transparent;

    .line {
        width: 100%;
        height: 6px;
        border-radius: 5px;
        user-select: none;
        background: $bgColor;
        position: absolute;
        bottom: calc(50% - 1px);

        .btn-wrapper {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            user-select: none;
            .value-input {
                position: absolute;
                top: -27px;
                left: 50%;
                padding: 4px 6px;
                line-height: 12px;
                font-size: 12px;
                text-align: center;
                border: 1px solid #999999;
                border-radius: 5px;

                color: #333333;
                background: transparent;
                box-sizing: border-box;
                white-space: nowrap; /* 自适应宽度*/
                word-break: keep-all; /* 避免长单词截断,保持全部 */
                &:after {
                    content: '';
                    width: 0;
                    height: 0;
                    position: absolute;
                    bottom: 0;
                    left: calc(50% - 4px);
                    cursor: pointer;
                    border-width: 6px 4px 0 4px;
                    transform: translateY(100%);
                    border: none;
                }
                .box {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }
                .textBox {
                    display: block;
                    width: 100%;
                    height: 100%;
                    font-size: 12px;
                    line-height: 12px;
                }

                .layData {
                    position: absolute;
                    top: calc(100% + 15px);
                }

                .inputBox {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    padding: 0;
                    border: none;

                    background: transparent;
                    color: #333333;
                    overflow: hidden;
                    text-indent: 0;
                    font-size: 12px;
                    text-align: center;
                    line-height: 12px;
                    outline: none;

                }
            }

            .btn {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                cursor: w-resize;
                &:hover {
                    transform: scale(1.3);
                }

            }

        }
    }

    .rangeLine {
        height: 6px;
        float: left;
        border-radius: 5px;
    }
}

</style>
