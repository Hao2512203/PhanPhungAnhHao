var person1 = {name: `Nhat Minh`, age: 12};
var person2 = {name: `Nhat Trung`, age: 32};
var sayHello = function(){
    console.log('Hello,' + this.name);
};
var sayGoodbye = function(){
    console.log('Goodbye,' + this.name);
};
sayHello();
sayGoodbye();

sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);