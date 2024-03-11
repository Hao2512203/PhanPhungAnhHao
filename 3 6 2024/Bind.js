var CNRange = function(value){
    if(typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
}
var range = {minimum: 10,maximum: 20};
var range1 = {minimum: 15,maximum: 20};
var BCNRange = CNRange.bind(range);
var BCNRange1 = CNRange.bind(range1);
var result = BCNRange(12);
var result1 = BCNRange1(12);
console.log(result)
console.log(result1);