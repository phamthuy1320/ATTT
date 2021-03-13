const {w2n, n2w} = require('./data')
const CODE = "BEEAKFYDJXUQYHYJIQRYHTYJIQFBQDUYJIIKFUHCQD"
// const CODE = "WRLDQDBDWKDDYLUXV"
// const CODE = "TOINAYTHAVIRUS"
// const CODE = "THISISACRYPTOSYSTEM"
const n = 26;

function myScript(str,k){
    var s = "";
    for(var i=0;i<str.length;i++){
       var c = (w2n[str[i]]+k)%26;
       s+=n2w[c]; 
    }
    return s;
}

// function u(str){
//     var c = 0
//     for(var i=0;i<str.length;i++){
//        c+ = w2n[str[i]]*(pow(26, str.length-i));
//     }

//     console.log(c)
//     // return s;
// }
// u('THUY')
function myPrint(){
    for (var i =0;i<=n;i++){
        console.log(i,myScript(CODE.toUpperCase(), i))
    }
}

function myVigenere(str, k){
    var n = Math.ceil(str.length/k.length);
    var s = "";
    for (var i = 0;i<n; i++){
        for(var j = 0; j<k.length;j++){
            if((j+i*k.length)>=str.length) break;
            var c = (w2n[str[j+i*k.length]]+w2n[k[j]])%26;
            // console.log(j+i*k.length)
            s+=n2w[c];
        }
        s+=" "
    }
    return s;
}
myPrint();
// console.log(myScript(CODE.toUpperCase(),10));
// console.log(myVigenere("THISISACRYPTOSYSTEM", "KWORD"))
