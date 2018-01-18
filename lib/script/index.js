'use strict';

/*
* @Author: dangxiaoli
* @Date:   2018-01-04 20:45:28
* @Last Modified by:   dangxiaoli
* @Last Modified time: 2018-01-11 18:30:09
*/
// const fn = (x, y) => {
//     return x + y;
// }
require('babel-polyfill');

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core').transform(es6Code, {
  presets: ['es2015']
}).code;