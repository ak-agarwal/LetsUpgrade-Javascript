
console.time('cal');
console.log('This is used to print in the console');
console.error('This is used to create a simple error in the log');
console.warn('This is used to create a simple wanring in the console')
console.timeEnd('cal');    //this is used to calculate the time taken to do all the steps from console.time() to this point


console.assert(5<4,'if the condition is false the message written here is printed in form of error')
console.count('label');
console.count();             //if no string is passed it will consider the string as default
console.count('label');     //this will count the number of times a string is called and will print it 
console.log("");           //not understood this
console.log("");

// console.clear();    //anythig written before this will be cleared in the console

var myArr = ["Orange", "Banana", "Mango", "Kiwi" ];
console.error(myArr);       //this will give error


console.group('mahGroup');      //whatever written in this come inside a grouping
console.log("hello");
console.log("This is grouping");
console.log('I am enjoying letsupgrade');
console.groupEnd('mahGroup');

console.groupCollapsed('JS');      //whatever written in this come inside a grouping but this will be closed
console.log("hello");
console.log("This is grouping");
console.log('JavaScript letsupgrade');
console.groupEnd('JS')


var myObj = { firstname : "John", lastname : "Doe" };
console.info(myObj);
console.info("This is info and i dont know what this do");


var car1 = { name : "Audi", model : "A4" }
var car2 = { name : "BMW", model : "X3" }
var car3 = { name : "Ford", model : "Fusion" }

console.table([car1, car2, car3], ["model","name"]);    //this will print in the table form and it secind parameter is optional and if put it will print that column only (if one col passed willdislplay only one)
    
console.trace(car2); //The console.trace() method displays a trace that show how the code ended up at a certain point.

console.log(' %c This is using css style','color:brown;');      //this will print the custom msg with the help of css formatting 
