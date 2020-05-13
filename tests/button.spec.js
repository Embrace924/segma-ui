import Vue from 'vue'
import { expect } from 'chai'
import Element from 'element-ui'
import { mount } from '@vue/test-utils'
import {
    createVue,
    destroyVM,
    triggerEvent,
    waitImmediate
} from './util';
import test from './test.vue'
import '../src/assets/css/index.less'
import './var.less'
Vue.use(Element)
describe('Input', () => {
    let vm;
    let primaryColor = 'rgb(83, 116, 192)';
    let primaryFontColor = 'rgb(255, 255, 255)'
    let primaryHoverColor = 'rgb(54, 75, 124)'

    let primaryDisabledColor = 'rgb(233, 235, 240)'
    let primaryDisabledFontColor = 'rgb(170, 175, 181)'

    it('主按鈕normal', async () => {
        vm = createVue({
            template: `
            <el-button id="create" 
                       type="primary" 
                       size="small" 
                       :class="{'hover' : isEnter}"
                       @mouseenter="mouseenter"  
                       @mouseleave="mouseleave">主按钮normal
            </el-button>
            `,
            data () {
                return {
                    isEnter: false
                }
            },
            methods: {
                mouseenter () {
                    this.isEnter = true;
                },
                mouseleave () {
                    this.isEnter = false;
                }
            }
        }, true);
        const button = document.getElementById('create');
        expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryColor);
        expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryColor);
        expect(window.getComputedStyle(button, null).fontSize).to.equal('14px');
        expect(window.getComputedStyle(button, null).padding).to.equal('7px 16px');
        expect(window.getComputedStyle(button, null).borderRadius).to.equal('4px');
        expect(window.getComputedStyle(button, null).height).to.equal('30px');
        expect(window.getComputedStyle(button, null).color).to.equal(primaryFontColor);
        expect(vm.isEnter).to.be.false;
        triggerEvent(button, 'mouseenter');
        setTimeout(_ => {
            expect(vm.isEnter).to.be.true;
            expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryHoverColor);
            expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryHoverColor);
            done();
        }, 300);

        triggerEvent(button, 'mouseleave');
        setTimeout(_ => {
            expect(vm.isEnter).to.be.false;
            expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryColor);
            expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryColor);
            done();
        }, 300);
    });
    it('主按鈕帶上icon', () => {
        vm = createVue({
            template: `
            <el-button id="create" 
                       type="primary" 
                       icon="el-icon-search" 
                       size="small" 
                       :class="{'hover' : isEnter}"
                       @mouseenter="mouseenter"  
                       @mouseleave="mouseleave">
                       主按钮normal
            </el-button>
            `,
            data () {
                return {
                    isEnter: false
                }
            },
            methods: {
                mouseenter () {
                    this.isEnter = true;
                },
                mouseleave () {
                    this.isEnter = false;
                }
            }
        }, true);
        const button = document.getElementById('create');
        const icon = vm.$el.querySelector('.el-icon-search');
        expect(icon).to.exist;
        expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryColor);
        expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryColor);
        expect(window.getComputedStyle(button, null).fontSize).to.equal('14px');
        expect(window.getComputedStyle(button, null).padding).to.equal('7px 16px');
        expect(window.getComputedStyle(button, null).borderRadius).to.equal('4px');
        expect(window.getComputedStyle(button, null).height).to.equal('30px');
        expect(window.getComputedStyle(button, null).color).to.equal(primaryFontColor);

        expect(vm.isEnter).to.be.false;
        triggerEvent(button, 'mouseenter');
        setTimeout(_ => {
            expect(vm.isEnter).to.be.true;
            expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryHoverColor);
            expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryHoverColor);
            done();
        }, 300);

        triggerEvent(button, 'mouseleave');
        setTimeout(_ => {
            expect(vm.isEnter).to.be.false;
            expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryColor);
            expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryColor);
            done();
        }, 300);
    });

    it.only('主按鈕disabled', () => {
        vm = createVue({
            template: `
            <el-button id="create"
                       type="primary"
                       disabled>
                       主按钮normal
            </el-button>
            `,
        }, true);
        const button = document.getElementById('create');
        const icon = vm.$el.querySelector('.el-icon-search');
        expect(icon).to.not.exist;
        expect(window.getComputedStyle(button, null).backgroundColor).to.equal(primaryDisabledColor);
        expect(window.getComputedStyle(button, null).borderColor).to.equal(primaryDisabledColor);
        expect(window.getComputedStyle(button, null).fontSize).to.equal('14px');
        expect(window.getComputedStyle(button, null).padding).to.equal('7px 16px');
        expect(window.getComputedStyle(button, null).borderRadius).to.equal('4px');
        expect(window.getComputedStyle(button, null).height).to.equal('30px');
        expect(window.getComputedStyle(button, null).color).to.equal(primaryDisabledFontColor);
    });

    it('主按鈕loading', async () => {
        vm = createVue({
            template: `
            <el-button id="create"
                       :loading="loading"
                       type="primary">
                       主按钮normal
            </el-button>
            `,
            data () {
                return {
                    loading: false
                }
            }
        }, true);
        const button = document.getElementById('create');
        const icon = vm.$el.querySelector('.el-icon-loading');
        expect(icon).to.exist;
        expect(vm.loading).to.be.true;
        vm.loading = false;
        setTimeout(() => {
            expect(icon).to.not.exist;
            expect(vm.loading).to.be.false;
        }, 300);
    });
})
