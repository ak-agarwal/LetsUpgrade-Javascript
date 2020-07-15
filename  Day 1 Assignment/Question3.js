var a;
console.log('a: ', a);
a=10;                               //this is storingn int num
console.log('a: ', a);
a='String';
console.log('a: ', a);
a=10.5;                             //this is storing int double
console.log('a: ', a);
a="This is string "+5;              //this is storing int
console.log('a: ', a);
a="this is invalid"-2;              //this will give o/p as NaN
console.log('a: ', a);
a=[{car:'BMW',model:'x5'},{car:'Audi',model:'A8'},{car:'Mercedes',model:'S-Class'}];    //array of objects
console.table(a);
a=[1,2,3,4,5];                      //this is array
console.log('a: ', a);       
a=true;                             //this is boolean
console.log('a: ', a);
a=null;
console.log('a: ', a);
var x = 16 + 4 + "Volvo";
console.log('x: ', x);
var z = 123e-5;  
console.log('z: ', z);
a=10;
var b="hello";
console.log(a==b);
x= a==b;
console.log(typeof x);
console.log(typeof b);
console.log(typeof b==a);
console.log(typeof undefined);         // undefined
console.log(typeof null);
console.log(null === undefined );      //=== compares value as well as data type
console.log(null == undefined );       //== only compares the value

