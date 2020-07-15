// Difference betweem let and var

var a;
console.log(a);
a=20;
console.log(a);
{
    a=40
    console.log(a);

}

console.log(a);     //var doesnt have block scope so the value will be affected if any changes are made inside the block but it has function scope

a=5;
for(a=0;a<10;a++){
    a;
}

console.log('a: ', a);  //the value of a will be changes


function myFunction(){
    var b=20;
    console.log('b: ', b);
    console.log('no change a: ', a);
    var a=2;                            //if we redefine it will give a as undefined
    console.log('a: ', a);
}

console.log('outside block a:' ,a);
// console.log('outside block ', b);       //cant acess 

// console.log(b);         //this will throw an error

console.clear();


let c;
console.log('c: ', c);
c=20;
console.log('c: ', c);
{

    // console.log('c inside block : ', c);     //this gives error as reinitialization is done inside the block and will give the error can't access before initialization
    let c=0;
    console.log('c inside block : ', c);
}

console.log('c outside block : ', c);

c=20;
console.log('c: ', c);
{

    console.log('c inside block : ', c);     //this will work and it will change the value of the c even globally and it has global scope if we dont initialize
     c=0;
    console.log('c inside block : ', c);
}

console.log('c outside block : ', c);