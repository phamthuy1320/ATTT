// Kiem tra n co phai so nguyen to
const soNguyenTo =(n)=>{
    for(var i = 2; i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}
module.exports = soNguyenTo;