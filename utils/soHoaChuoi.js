// SoHoaChuoi = so hoa chuoi str
const {w2n} = require('../data.js');
const soHoaChuoi = (str) =>{
  var _str = str.toUpperCase();
  var c = 0;
  for(var i = 0; i<str.length;i++){
      c+= w2n[_str[i]]*Math.pow(26,(str.length-1-i));
  }
  return c;
}
module.exports = soHoaChuoi