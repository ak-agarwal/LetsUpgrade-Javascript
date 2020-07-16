//Explain with examples the remaining methods of String and Array

let str="Ever loved someone so much, you would do anything for them? Yeah, well make that someone yourself and do whatever the hell you want.";

console.log(str);

console.log(str.charAt(2));
console.log(str.charCodeAt(2));

console.log(str.concat("- Harvey"));

let str2="Ever loved someone so much, you would do anything for them? Yeah, well make that someone yourself and do whatever the hell you .";

str="  I don't play the odds I play the man ";
console.log(str.localeCompare(str2));   //returns 0 if same and 1 when diff

console.log(str.repeat(2));

str2=str.slice(2,5);
console.log(str2);

console.log(str.trim());


console.log(str.valueOf());
console.clear();

//arrays
let cars = ["Audi", "Volvo", "BMW"];
console.log(cars.sort());

console.log(cars.toString());

console.log(cars.unscarshift("Honda"));