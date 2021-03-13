// Tinh a^-1 mod m
const modInverse = (a,m)=>{
    for (var x = 1; x < m; x++){
        if (((a%m) * (x%m)) % m == 1){
            return x;
        }
    }
    return 1;
}

module.exports = modInverse;