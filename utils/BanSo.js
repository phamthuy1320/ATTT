// chuyen ban chu thanh ban so

// banso la chuyen chuoi 3 ky tu thanh so
const banso = (str) =>{
    var _str = str.toUpperCase();
    var c = 0;
    for(var i = 0; i<3;i++){
       c+= w2n[_str[i]]*Math.pow(26,(2-i));
    }
    
    return c;
}


const chiaNhomBa = (str) =>{
    var arr = [];
    var _str = str.toUpperCase();
    var n = Math.ceil(str.length/3);
    var e = n*3-str.length;
    if(e>0){
        for(var i = 0; i<e;i++){
            _str+="Z";
        }
    }
    // console.log(_str)
    var j = 0;
    for(var i = 0; i<n; i++){
        arr.push(_str.slice(j,j+3));
        j+=3;
    }
    return arr;
}
// console.log(chiaNhomBa(str2))
// console.log(banso('dog'));
const arrBanSo = (str) =>{
    var arr = chiaNhomBa(str);
    var _arr = [];
    for(var i =0; i<arr.length;i++){
        _arr.push(banso(arr[i]))
    }
    return _arr;
}
module.exports = arrBanSo;