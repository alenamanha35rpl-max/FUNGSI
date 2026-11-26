function perkenalan(nama, kelas, hobi) {
  console.log('Nama  : ' + nama);
  console.log('Kelas : ' + kelas);
  console.log('Hobi  : ' + hobi);
  console.log('');
}

perkenalan('Raeesa', 'X RPL 2', 'Ngoding dan desain');
perkenalan('Vela', 'X RPL 2', 'Gambar');
perkenalan('Alena', 'X RPL 2', 'Main game');


// soal 2
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

let luas1 = luasPersegiPanjang(10, 4);
let kel1 = kelilingPersegiPanjang(10, 4);
console.log('Luas = ' + luas1);
console.log('Keliling = ' + kel1);

let luas2 = luasPersegiPanjang(12, 5);
let kel2 = kelilingPersegiPanjang(12, 5);
console.log('Luas 2 = ' + luas2);
console.log('Keliling 2 = ' + kel2);


// soal 3
function hitungRataRata(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function tentukanPredikat(rata) {
  if (rata >= 85) {
    return 'A';
  } else if (rata >= 75) {
    return 'B';
  } else if (rata >= 60) {
    return 'C';
  } else {
    return 'D';
  }
}

function cetakRapor(nama, n1, n2, n3) {
  let rata = hitungRataRata(n1, n2, n3);
  let predikat = tentukanPredikat(rata);

  console.log('Nama      : ' + nama);
  console.log('Rata-rata : ' + rata.toFixed(2));
  console.log('Predikat  : ' + predikat);
  console.log('');
}

cetakRapor('Raeesa', 80, 85, 82);
cetakRapor('Vela', 90, 88, 92);
cetakRapor('Alena', 65, 70, 68);