import onlyNumber from './only_number';
import segmaLoading from './segma_loading';

export default {
    install(Vue) {
        Vue.use(onlyNumber)
        Vue.use(segmaLoading)
    },
    onlyNumber,
    segmaLoading
};
