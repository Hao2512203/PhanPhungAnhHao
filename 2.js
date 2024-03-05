function checkmaxmin() {
    var Max = mang[0]
    var Min = mang[0]
    for(let i = 0 ; i< mang.length ; i++){
        if (Max < mang[i]){
            Max = mang[i];
        }
        if (Min > mang[i]){
            Min = mang[i]
        } 
    }
    return console.log(Max,Min)
}

var mang = [1,2,3,4,9];
console.log(checkmaxmin())

function checklenght(){
    const Mang2 = sentence.split(' ')
    var kt = Mang2[0];
    var Max = Mang2[0].length;
    for(let i = 0;i < Mang2.length;i++){
        if(Max < Mang2[i].length){
            Max = Mang2[i].length;
            kt = Mang2[i];
        }
    }
    return kt;
}
var sentence = 'Co thuy dep gai'
console.log(checklenght())

function plusall(){
    var res = 0;
    for(var i in arguments){
        res += arguments[i];
    }
    return res;
}

console.log(plusall(1))
console.log(plusall(2,3,5))

function func1(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1,2,3)

var person1 = {name: `Nhat Minh`, age: 12};
var person2 = {name: `Nhat Trung`, age: 32};

var sayHello = function(){
    alert('Hello,' + this.name);
};
var sayGoodbye = function(){
    alert('Goodbye,' + this.name);
};
