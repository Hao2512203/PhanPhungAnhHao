function timSoChan(arr, callback) {
    const ketQua = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        ketQua.push(arr[i]);
      }
    }
    return ketQua;
  }
  function laSoChan(so) {
    return so % 2 === 0;
  }
  const mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const result = timSoChan(mangSo, laSoChan);
  console.log("Các số chẵn trong mảng là:", result);
  