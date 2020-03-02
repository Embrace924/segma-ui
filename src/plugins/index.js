import element from './element';

const plugins = [
    element,
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
