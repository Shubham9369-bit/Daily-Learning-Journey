function isAdult(){
    let age=18;
    if(age>=18){
        console.log("You are an adult");
    }
    else{
        console.log("U are not not an adult");
    }
}


function rollDice(){
    let rand=Math.floor(Math.random()*6+1);
    console.log(rand);
}

// rollDice();



//function with arguments

function printName(name,age){
    console.log(`${name}'s age is ${age}`);
}
// printName("Shubham",22);

function sum(a,b){
    console.log(`Sum of ${a} and ${b} is:${a+b}`);
}

// sum(2,5);

//calculate average

function calAverage(a,b,c){
    let average=(a+b+c)/3;
    console.log(average);
}
// calAverage(1,2,3);



//Priting table by using function
function printTable(n){
    for(let i=5;i<=n*10;i=i+n){
        console.log(i);
    }
}
// printTable(7);



//Return Keyword

function sum(a,b){
    return a+b;
}
// console.log(sum(2,1));


function issAdult(age){
    console.log("bye bye")
    if(age>18){
        return "Adult";
    }
    else{
        return "Not adult";
    }
    
}
// console.log(issAdult(28));

function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
// console.log(getSum(3));

//Concatination of an string

let str=["My","name","is","Shubham"];

function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
}
// console.log(concat(str));


///Scope in Java script

let summ=23;//It is a global scope and can be access from anywhere....
function calSum(a,b){
    // let summ=a+b;   // it is a function scope and it cannot be accessible from anywhere..
    console.log(summ);//
}
// calSum(1,2);
// console.log(summ);

//Lexical Scope....
function outerFun(){
    let x=3;
    let y=5;

    function innerFunc(){
        console.log(y);
    }
    innerFunc();
}
// outerFun();


/// Function Expression....

let summm=function(a,b){
    return a+b;
}
// console.log(summm(2,3));


let hello=function(){
    console.log("Namaste!");
}
// console.log(hello());


//    Hihger order function
function  multipleGreet(func,count){
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("Hello");

}
// multipleGreet(greet,10);


///higher order function with returns


let odd=function(n){
    console.log(!(n%2==0));
}
let even=function(n){
    console.log(n%2==0);
}
odd(5);
odd(4);

// even(2);
// even(3);


const calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};


console.log(calculator.add(1,2));









