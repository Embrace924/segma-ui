/**
 * Created by cld on 2020/2/18.
 */

import directive from './src/directive';
import service from './src/index';

export default {
    install(Vue) {
        Vue.use(directive);
        Vue.prototype.$loading = service;
    },
    directive,
    service
};
