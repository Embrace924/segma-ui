/**
 * Created by cld on 2019/12/25.
 */
import {
    MessageBox,
} from 'element-ui';

const $alert = async (message = '', title = '提示', option = {}) => {
    try {
        await MessageBox.alert(message, title, {
            confirmButtonText: '确定',
            customClass: 'segma-alert',
            confirmButtonClass: 'el-button--danger',
            center: true,
            closeOnClickModal: true,
            ...option
        })
        return true
    } catch (e) {
        return false
    }
}
const $confirm = async (message = '', title = '提示', option = {}) => {
    try {
        await MessageBox.confirm(message, title, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            customClass: 'segma-message',
            cancelButtonClass: 'el-button--primary is-plain',
            ...option
        })
        return true
    } catch (e) {
        return false
    }
}
export {
    $alert, $confirm
}