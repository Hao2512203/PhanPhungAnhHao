var sachs = [
    {
        tacgia: 'A',
        tieude: 'BBBB',
        namXuatBan: 2000,
        trangthai: true
    },
    {
        tacgia: 'B',
        tieude: 'AAAA',
        namXuatBan: 2011,
        trangthai: false,
    }
]
for(let sach in sachs) {
    console.log(sachs[sach].tacgia)
    console.log(sachs[sach].tieude)
    console.log(sachs[sach].namXuatBan)
    console.log(sachs[sach].trangthai)
}
