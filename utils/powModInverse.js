// (x^a)^-1 mod m
var powMod = require('./powMod.js');
const powModInverse = (x,a,m)=>{
    for (var i = 1; i < m; i++){
        if (((powMod(x,a,m)) * (i%m)) % m == 1){
            return i;
        }
    }
    return 1;
}

module.exports = powModInverse;