// import {w2n, n2w} from './data'
// import arrBanSo from './utils/BanSo';
// import powmod from './utils/powMod';
// import modInverse from './utils/modInverse';
const {w2n, n2w} = require('./data')
var arrBanSo = require('./utils/BanSo');
var powmod = require('./utils/powMod');
var modInverse =require('./utils/modInverse');

const str1 = "TheDiaryofSamuelMarchbanks";
const str2 = "LakeWobegonDays";

const bansohoa = (str,n,b) =>{
    var arr = arrBanSo(str);
    var _arr = [];
    for(var i =0; i<arr.length;i++){
       _arr.push(powmod(arr[i],b,n))
    }
    // console.log(_arr)
    return _arr;
}
// console.log(bansohoa(str2,18923,1261))
const bansogiai = ()=>{
    var n = 18721;
    var b = 25
    // var arr = bansohoa(str2,n,b);
    var arr = [365,0,4845,14930,2608,2608,0]
    // console.log(arr)
    var a = modInverse(b,18841);
    var _arr = [];
    for(var i =0; i<arr.length;i++){
        _arr.push(powmod(arr[i],a,n))
     }
     console.log(_arr)
     return _arr;
}
// bansogiai()

const so2chunhom3 = (x) =>{
     var _x = x;
     var a = '';
     var b = '';
     var c = '';

     for(var i = 0;i<26;i++){
         if((_x-i)%26==0){
            // console.log('i',i);
            c = n2w[i];
            _x = (_x-i)/26;
            // console.log('_x',_x)
            for(var j = 0;j<26;j++){
                if((_x-j)%26==0){
                    b = n2w[j];
                    var r =(_x-j)/26
                    a = n2w[r%26];
                    // console.log('_x-j',_x-j);
                    break;
                }
            }
            break;
         }
     }
    //  console.log(a+b+c)
     return a+b+c;
     
}
const arrBanchuhoa = () =>{
    var arr = bansohoa(str1,31313,4912);
    console.log(arr)
    var _arr = [];
    for(var i = 0;i<arr.length;i++){
       _arr.push( so2chunhom3(arr[i]));
    }
    console.log(_arr)
    return _arr;
}
// arrBanchuhoa()
// const square_and_multiply = (a,x,n)=>{
//     var y = 1;
//     for (i)
// }

// console.log(modInverse(Math.pow(14702,15),18721))
// console.log(1234577%2002)
// console.log(powmod(949, 853,2579))
// console.log((777*2003*242 + 973*2003*1087))
// console.log(2495107055%3026533)
// console.log((435*457)%853)
var f_ = powmod(2, 1012,19001)
var f = powmod(18399, 1004,19001)
// console.log(f_)
var g = 66592%19001
// console.log(Math.pow(3,505)%19001)
var h = (f*g)%19001
// console.log(33)
// console.log('h', h)
// for(var i = 0; i<10; i++){
// console.log(i,(Math.pow(i,(10006/5003)))%10007)}
var y1 = 2396%2579 

var y2 = modInverse(Math.pow(453,765),2579);
var r = (y1*y2)%2579
console.log(y2)