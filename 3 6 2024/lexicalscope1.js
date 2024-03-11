var myFun = function() {
    var name = 'Anh Hao';
    var myOFun = function(){
        console.log('I am ' + name);
    };
    console.log(name);
    myOFun();
};

myFun()