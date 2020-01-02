/**
 * Created by cld on 2019/7/31.
 */
// js 文件
import '../../assets/css/load.css';

import load from '../../assets/images/loading/load.svg';

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

export default {
    inserted: (el, binding, vnode) => {
        const tempDiv = document.createElement('div');
        tempDiv.className = 'custom-loading';
        const round = document.createElement('div');
        round.innerHTML = `<img src=${load}>`;
        round.className = 'custom-loading-round';
        tempDiv.appendChild(round);
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
};