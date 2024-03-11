class Car {
    constructor(){
        this.speed = 0;
    }
    printSpeed() {
        console.log(`${this.speed}`);
    }
};

var car = new Car();
car.instanceMethod = function(){
    console.log(`An instance method`)
};
car.speed = 50;
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car{
    constructor(){
        super(Car);
        this.topState = 'closed';
    }
    openTop(){
        this.topState = 'opened';
        console.log(`Top: ${this.topState}`);
        return this.topState;
    }
    closeTop(){
        this.topState = 'closed';
        console.log(`Top: ${this.topState}`);
        return this.topState;
    }
};
var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet{
    constructor(){
        super(Cabriolet);
        this.name = 'Tesla http://www.teslamotors.com/roadster';
    }
    sayName(){
        console.log(`${this.name}`);
        return this.name;
    }
};

var tesla = new TeslaCabriolet();
tesla.sayName();
tesla.openTop();
