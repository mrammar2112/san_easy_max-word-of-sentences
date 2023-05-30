/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */

const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

// fungsi untuk menghitung kata dalam kalimat
function hitungKata(str) {
  const arr = str.split(' ');
  return arr.filter(word => word !== '').length;
}

function result(sentences) {
  // mengecek variabel berupa array atau tidak
  let checkData = Array.isArray(sentences);
  if (checkData == true) {
    // variabel temporary untuk memasukan jumlah kata dari setiap kalimat
    const tmpData = [];
    sentences.forEach(function (item) {
      // menghitung jumlah kata dalam kalimat lalu mendata jumlah kata dari setiap kalimat
      tmpData.push(hitungKata(item));
    });
    // mencari jumlah kata terbanyak dari kalimat yang dihitung
    data = Math.max(...tmpData);
  } else {
    // menghitung jumlah kata dalam kalimat di dalam variabel bukan array
    data = hitungKata(sentences);
  }
  return data;
}

console.log(result(sentences));