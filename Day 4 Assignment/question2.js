let student={
    name:'Helsinki',
    age:24,
    projects:{
        diceGame: 'Two player dice game using Javascript',
    }
}

let {name,age, projects:{diceGame}}=student;

console.log(name , age , diceGame );


//  student={
//     name:'Helsinki',
//     age:24,
//     projects:{
//         diceGame: 'Two player',
//     },
//     friends:['tokyo','berlin'],
// }

// let {name,age, projects:{diceGame},friends:[item1,item2]}=student;

// console.log(name , age , diceGame , item1 , item2);
