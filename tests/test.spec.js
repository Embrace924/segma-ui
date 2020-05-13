let expect = require('chai').expect;
let tablePageSize = require('../src/test/test.js');
describe('测试表格行数',  ()=> {
    it('表格行数为10', () => {
        expect(tablePageSize(100, 100, 40)).to.be.equal(1);
    });
});
