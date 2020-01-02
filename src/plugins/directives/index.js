/**
 * Created by cld on 2019/07/31.
 */

import segmaLoading from './load';

const directives = [
    {
        name: 'segma-loading',
        directive: segmaLoading
    }
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};