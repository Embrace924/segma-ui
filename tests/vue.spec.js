import Vue from 'vue'
import { expect } from 'chai'
import Element from 'element-ui'
import {
    createVue
} from './util';

Vue.use(Element)
describe('Input', () => {
    it('renders a div', () => {
        const wrapper = createVue({
            template: ` <el-input placeholder="请输入内容"
                            @focus="handleFocus"
                            v-model="value">
                        </el-input>`,
            data() {
                return {
                    value: 1,
                    inputFocus: false
                };
            },
            methods: {
                handleFocus() {
                this.inputFocus = true;
                }
            }
        }, true)
        
        const input = wrapper.$el.querySelector('.el-input__inner');
        input.focus();
        expect(wrapper.inputFocus).to.be.true;
    })
})
