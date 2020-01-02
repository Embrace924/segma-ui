import element from './element';
import directives from './directives/index';

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
