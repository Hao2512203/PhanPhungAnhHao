const x = 100;
const result = (x < 1000)?"nhỏ hơn 1000":"lớn hơn hoặc bằng 1000";
console.log(result)

var variable1 
const variable2 = variable1 || ""
console.log(variable2)

let x1,y,z=3;

let isTurnon;
if(isTurnon);

for (let item in sampleArr);

for (let i = 0;i< 1e5;i++){}

const x2 = 1,y1 = 2;
const obj = {x2,y1};

sayHello = name => console.log('Hello',name);

setTimeout(() => console.log('loaded'),2000);

list.array.forEach(element => console.log(item));

getValue = ratio =>ratio * 6.9;

getValue = (a,b = 3,c = 4) => (a*b+c);

const welcome = `You have logged in as ${first} ${last} .`;

const lorem = `Lorem ipsum dolor sit consectetur
    adipisicing elit, sed do eiusmod temor incidiunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse.`;

import { action,service} from 'lib';
const { form, errors, entity, controller, component } = this.props;

mandatory = () => {throw new Error('Thiếu tham số"'); }
sample = (param1 = mandatory()) => param1

const employees = [
    { name: 'Emp A', age: 25},
    { name: 'Emp B', age: 28},
    { name: 'Emp C', age: 35}
]
const name = 'Emp A'
emp = employees.find(item => item.name === name)

function validute(fullName) {
    if(!fullName.firstName)
        return false;
    if(!fullName.lastName)
        return false;
    return true;
}

console.log(validute({firstName:'Duy',lastName:'Buffet'}));

const rule = {
    firstName: {
        required:true
    },
    lastName: {
        required:true
    }
}

const validute = (rule,values) => {
    for(prop in rule){
        if (rule[prop].required) {
            if(!values[prop]){
                return false;
            }
        }
    }
    return true;
}

console.log(validute(rule, {firstName:'Duy'}));
console.log(validute(rule, {firstName:'Duy',lastName:'Buffet'}));

~~6.9 === 6