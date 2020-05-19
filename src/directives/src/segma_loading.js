/**
 * Created by cld on 2020/3/20.
 */
// js 文件
import Vue from 'vue'
import '../../assets/css/segma_loading.css';
import segma_loading from '../../assets/images/loading/segma_loading.svg';

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

const segmaLoading = {}
segmaLoading.install = Vue => {
}

Vue.directive('segma-loading', {
    inserted: (el, binding, Vnode) => {
        let bgColor = 'rgba(255, 255, 255, 0.65)'
        let text = ''
        if (Vnode.data && Vnode.data.attrs) {
            bgColor = typeof Vnode.data.attrs['segma-loading-background'] !== 'undefined' ? Vnode.data.attrs['segma-loading-background'] : 'rgba(255, 255, 255, 0.65)'
            text = typeof Vnode.data.attrs['segma-loading-text'] !== 'undefined' ? Vnode.data.attrs['segma-loading-text'] : ''
        }
        //背景框
        const tempDiv = document.createElement('div');
        tempDiv.className = 'custom-loading';
        tempDiv.style.backgroundColor = bgColor
        //loading总区域
        const roundDiv = document.createElement('div');
        roundDiv.className = 'custom-loading-round';
        //loading图
        const roundEle = document.createElement('div');
        roundEle.className = 'custom-loading-icon';
        if (text !== '') {
            //文字区域
            const textEle = document.createElement('div');
            textEle.innerHTML = text;
            textEle.className = 'custom-loading-text';
            roundDiv.appendChild(textEle);
        }
        //注册
        roundDiv.appendChild(roundEle);
        tempDiv.appendChild(roundDiv);
        el.loadingElement = tempDiv;

        const position = getElementStyle(el, 'position');
        if (position !== 'absolute' && position !== 'relative') {
            el.style.position = 'relative';
        }
        if (binding.value) {
            el.appendChild(tempDiv);
        }
    },
    update: (el, binding) => {
        if (binding.value) {
            if (el.loadingElement.parentNode === null) {
                el.appendChild(el.loadingElement);
            }
        } else {
            if (el === el.loadingElement.parentNode) {
                el.removeChild(el.loadingElement);
            }
        }
    },
    unbind: (el) => {
        if (el.loadingElement.parentNode === el) {
            el.removeChild(el.loadingElement);
        }
        el.loadingElement = null;
    }
});
export default segmaLoading