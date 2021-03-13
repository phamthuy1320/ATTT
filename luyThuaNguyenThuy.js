// import {soNguyenTo} from './utils/soNguyenTo';

var soNguyenTo = require('./utils/soNguyenTo');
// Mang cac so nguyen to ma hop thanh so x
const cacThuaSoNguyenTo = (x) =>{
  var arr = [];// De luu cac so nguyen to pi
    for(var i = 1; i<=x;i++){
        if(x%i==0&&soNguyenTo(i)){
            arr.push(i)
        }
    }
  return arr;
}
// Kiem tra n co phai phan tu Nguyen Thuy 
const kiemTraPhanTuNguyenThuy = (n,p) =>{
  // Phan tich p-1 thanh tich cac so nguyen to
  var arr = cacThuaSoNguyenTo(p-1);
  // Kiem tra n
  for(var i = 0; i<arr.length; i++){
    var _n = Math.pow(n,p/arr[i])%p;
    if(_n!=1){
      return true;
    }
  }
  return false
}

const luyThuaNguyenThuy = (p) =>{
    // Tim cac so nguyen thuy cua Zp* tu [1..p]
    var arr = []

    // for(var i = 1; i<=p;i++){
    //   kiemTraPhanTuNguyenThuy(i,p)?arr.push(i):null
    // }
    // return arr;

    // Tra ve phan tu nguyen thuy dau tien
    for(var i = 1; i<=p;i++){
      if(kiemTraPhanTuNguyenThuy(i,p)){
        return i
      }
    }
    return 0
}

module.exports = luyThuaNguyenThuy