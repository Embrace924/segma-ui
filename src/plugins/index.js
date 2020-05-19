import element from './element';
import directives from './../directives/src/index'

const plugins = [
    element,
    directives
];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
