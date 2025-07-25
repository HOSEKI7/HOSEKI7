function buatPengali(pengali) {
    return function(angka) {
        return angka * pengali;
    }
}

const pengaliDua = buatPengali(2);
console.log(pengaliDua(5));