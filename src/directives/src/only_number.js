import Vue from 'vue';

/**
 * 设置输入框的值,触发input事件,改变v-model绑定的值
 * */
const setVal = (val, el, vNode) => {
    if (vNode.componentInstance) {
        // 如果是自定义组件就触发自定义组件的input事件
        vNode.componentInstance.$emit('input', val);
    } else {
        // 如果是原生组件就触发原生组件的input事件
        el.value = val;
        el.dispatchEvent(new Event('input'));
    }
};

/**
 * 参数检查
 * */
const optionCheck = (binding) => {
    // 范围值是否为数值
    if ((binding.value.max && typeof binding.value.max !== 'number') || (binding.value.min && typeof binding.value.min !== 'number')) {
        throw new Error('Range parameter must be numeric');
    }
    // 最大最小值存在的时候判断最大值与最小值是否相等
    if (binding.value.max === binding.value.min && typeof binding.value.max !== 'undefined' && typeof binding.value.min !== 'undefined') {
        throw new Error('The maximum and minimum values cannot be equal');
    }
};

/**
 * 判断是否为无效值
 * */
const isInvalidVal = (bindValue) => {
    return bindValue === null || isNaN(Number(bindValue)) || bindValue.toString().indexOf('.') === bindValue.length - 1 || bindValue.toString().indexOf('e') !== -1;
};

/**
 * 处理数值范围，如果输入值超过最大值或最小值，将会被自动设置为边界值
 * */
const dealRange = (inputValue, binding) => {
    let bindMax = typeof binding.value.max === 'undefined' ? Infinity : binding.value.max;
    let bindMin = typeof binding.value.min === 'undefined' ? -Infinity : binding.value.min;
    let result = inputValue;
    if (inputValue < bindMin) {
        result = bindMin;
    }
    if (inputValue > bindMax) {
        result = bindMax;
    }
    return result;
};

/**
 * 阻止输入
 * */
const preventInput = (event) => {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
};
const onlyNumber = {}
onlyNumber.install = Vue => {

}
Vue.directive('number', {
    bind: (el, binding, vNode) => {
        optionCheck(binding);
        // 处理无效值
        let bindValue = vNode.data.model.value;
        if (isInvalidVal(bindValue)) {
            setVal(null, el, vNode);
            return;
        }

        // 处理数值范围
        let inputVal = dealRange(bindValue, binding);
        setVal(inputVal, el, vNode);
    },
    inserted: (el, binding, vNode) => {
        let content;
        // 按键按下=>只允许按照一定规则输入 数字/小数点/减号
        el.addEventListener('keypress', e => {
            const inputKey = String.fromCharCode(typeof e.charCode === 'number' ? e.charCode : e.keyCode);
            const inputReg = /\d|\.|-/;
            content = e.target.value;
            /**
             * 1.输入值不是数字、小数点、减号
             * 2.输入框为空或只有减号，不能输入小数点
             * 3.重复输入小数点
             * 4.输入框已有值，不能输入减号
             * 5.重复输入减号
             */
            // todo:已有值的时候，选中输入框的所有值输入减号‘-’，无法覆盖输入
            if (!inputReg.test(inputKey)) {
                preventInput(e);
            } else if (((content === '' || content === '-') && inputKey === '.')) {
                preventInput(e);
            } else if ((content.indexOf('.') !== -1 && inputKey === '.')) {
                preventInput(e);
            } else if ((content !== '' && inputKey === '-')) {
                preventInput(e);
            } else if ((content.indexOf('-') !== -1 && inputKey === '-')) {
                preventInput(e);
            }
        });
        // 按键弹起=>并限制最大最小
        el.addEventListener('keyup', e => {
            if (e.keyCode === 8) {
                return;
            }
            // 处理无效值
            let bindValue = e.target.value;
            if (bindValue === null) {
                setVal(null, el, vNode);
                return;
            }

            // 处理数值范围
            let inputVal = dealRange(bindValue, binding);
            setVal(inputVal, el, vNode);
        });
        // 失去焦点=>保留指定位小数
        el.addEventListener('focusout', e => { // 此处会在 el-input 的 @change 后执行
            // 处理无效值
            let bindValue = e.target.value;
            if (isInvalidVal(bindValue)) {
                setVal(null, el, vNode);
                return;
            }

            content = parseFloat(e.target.value);
            let contentStr = String(content);
            if (contentStr.indexOf('.') >= 0 && contentStr.split('.')[1].length > binding.value.precision) {
                let arg_precision = 0;// 默认保留至整数
                if (binding.value.precision) {
                    arg_precision = parseFloat(binding.value.precision);
                }
                content = content.toFixed(arg_precision);
            }
            setVal(content, el, vNode);
        });
    }
})
export default onlyNumber;
