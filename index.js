var luyThuaNguyenThuy = require('./luyThuaNguyenThuy.js');
var powMod = require('./utils/powMod.js');
const {w2n, n2w} = require('./data.js');
var soNguyenTo = require('./utils/soNguyenTo.js');
var soHoaChuoi = require('./utils/soHoaChuoi.js');
var modInverse = require('./utils/modInverse.js');
var powModInverse = require('./utils/powModInverse.js');
var p = 1000003
var Anpha = luyThuaNguyenThuy(p);
var a = 131099;
var Beta = powMod(Anpha, a, p);
var k = 1310;

const str = 'PHAMTHITHUY';//Chuoi can so hoa
const x = soHoaChuoi(str)%p;
console.log('x:',x);

const MaHoa = (_x,_k) =>{
  var y1 = powMod(Anpha, _k, p);
  var y21 = _x%p;
  var y22 = powMod(Beta,_k,p);
  var y2 = (y21*y22)%p;
  return [y1,y2];
}
console.log('Ma hoa:',MaHoa(x,k));

var arr = MaHoa(x,k)
// console.log('modex',modExponentialInverse(453,765,2579))
const GiaiMa = (y1, y2) =>{
  var d1 = y2%p;
  // var d2 = modInverse(Math.pow(y1,a),p);
  d2 = powModInverse(y1,a,p)
  var d = (d1*d2)%p;
  console.log(d1, d2,d)
  return d;
}

console.log('Giai ma:', GiaiMa(arr[0], arr[1]))