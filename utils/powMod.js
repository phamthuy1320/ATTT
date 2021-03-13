// Tinh b^e mod m
const powmod =(b,e,m)=>{
    if(m ==1){
        return 0
    }
    var c = 1
    for(var i = 1;i<=e;i++){
        c = (c*b%m)
    }
    return c;
}
module.exports = powmod;