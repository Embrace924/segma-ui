import directives from './src/index';

const install = function(Vue) {
    Vue.use(directives.onlyNumber);
    Vue.use(directives.segmaLoading);
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    onlyNumber: directives.onlyNumber,
    segmaLoading: directives.segmaLoading
};
