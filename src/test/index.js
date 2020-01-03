import segma_ui from './segma_ui';

/**
 * 使用插件方式引入filter
 * 参考：https://cn.vuejs.org/v2/guide/plugins.html
 * */

const plugins = [
    segma_ui,
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
