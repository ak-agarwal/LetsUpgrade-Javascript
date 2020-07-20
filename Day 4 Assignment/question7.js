{
let num = +prompt("Enter the number to check if prime or not");

let prime=1;
for(i=2;i<num;i++){
    if(num%i == 0){
        prime=0;
    }
}
if (prime == 0) {
    console.log('Not a prime no');
}
else{
    console.log('Is a prime no');
}


}