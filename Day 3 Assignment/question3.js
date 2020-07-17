let marks=+prompt("Enter your marks");


//using switch
// switch (true) {
//     case (marks <= 40):
//         console.log("Failed");
//         break;

//     case(marks>=40 && marks <50):
//     console.log(`marks is ${marks} and grade is D`);
//     break;

//     case(marks>=50 && marks <60):
//     console.log(`marks is ${marks} and grade is C+`);
//     break;

//     case(marks>=60 && marks <70):
//     console.log(`marks is ${marks} and grade is C`);
//     break;

//     case(marks>=70 && marks <80):
//     console.log(`marks is ${marks} and grade is B+`);
//     break;

//     case(marks>=80 && marks <90):
//     console.log(`marks is ${marks} and grade is A`);
//     break;

//     case(marks>=90 && marks <=100):
//     console.log(`marks is ${marks} and grade is A+`);
//     break;

//     default:
//         console.log('Enter valid input');
//         break;
        
// }

//using conditional

// if (marks<=40) {
//     console.log(`Marks is ${marks} and reslt is failed`);
// } else if(marks >40 && marks <=50){
//     console.log(`Marks is ${marks} and reslt is C`)
// }
// else if(marks >50 && marks <=60){
//     console.log(`Marks is ${marks} and reslt is C+`)
// }
// else if(marks >60 && marks <=70){
//     console.log(`Marks is ${marks} and reslt is B`)
// }
// else if(marks >70 && marks <=80){
//     console.log(`Marks is ${marks} and reslt is B+`)
// }
// else if(marks >80 && marks <=90){
//     console.log(`Marks is ${marks} and reslt is A`)
// }
// else if(marks >90 && marks <=100){
//     console.log(`Marks is ${marks} and reslt is A+`)
// }


//ternary operator
marks<=40?console.log(`Marks is ${marks} and reslt is failed`):marks>40&&marks<=50?console.log(`Marks is ${marks} and reslt is C`):marks>50&&marks<=60?console.log(`Marks is ${marks} and reslt is C+`):marks>60&&marks<=70?console.log(`Marks is ${marks} and reslt is B`):marks>70&&marks<=80?console.log(`Marks is ${marks} and reslt is B+`):marks>80&&marks<=90?console.log(`Marks is ${marks} and reslt is A`):marks>90&&marks<=100?console.log(`Marks is ${marks} and reslt is A+`):console.log("Enter a valid grade");