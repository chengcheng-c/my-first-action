// add.test.js
const add = require('./add');
const assert = require('assert');

// 测试 1 + 2 是否等于 3
assert.strictEqual(add(1, 2), 3);
console.log('测试通过！');