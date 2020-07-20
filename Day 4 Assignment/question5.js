let employee1={
    sales:4000,
    total:0,

}

let employee2={
    sales:6000,
    total:0,
}

let employee3={
    sales:12000,
    total:0,
}


let employee4={
    sales:40300,
    total:0,
}

function Myfunction({sales,total}){
    if(sales>=0 && sales<=5000){
        total=sales+sales*1.02;
        console.log(total);
    }
    else if(sales>=5001 && sales<=10000){
        total=sales+sales*1.02;
        console.log(total);
    }
    else if(sales>=10001 && sales<=20000){
        total=sales+sales*1.02;
        console.log(total);
    }
    else if(sales>=20000){
        total=sales+sales*1.02;
        console.log(total);
    }
}

Myfunction(employee1);
Myfunction(employee2);
Myfunction(employee3);
Myfunction(employee4);

