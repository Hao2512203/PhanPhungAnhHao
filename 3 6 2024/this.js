var student = {
    name: 'Phan Phung Anh Hao',
    getName: function(){
        console.log(this.name);
        return this.name
    }
};
var deStudent = student.getName();
