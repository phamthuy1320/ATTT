var luyThuaNguyenThuy = require('./luyThuaNguyenThuy.js');
var powMod = require('./utils/powMod.js')

var p = 1234567
var Anpha = luyThuaNguyenThuy(p);
var a = 131099;
var Beta = powMod(Anpha, a, p);
console.log(Beta)