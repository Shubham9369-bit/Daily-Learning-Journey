//Chapter 8
let arr1=[1,2,3,4,5];
function print(el){
    console.log(el);
}
// arr.forEach(print);
arr1.forEach((el)=>{
    // console.log(el);
})

///Map function
let nums=[1,2,3,4];
let result=nums.map(num=>num*2);
// console.log(result);


//Filter function
let arr=[2,3,6,18,22,24,23,29,81,89,80];
let even=arr.filter(num=>num%2==0);
// console.log(even);


//Every and sum;
let every=[2,,4];
let checkk=every.every(el=>el%2==0)
// console.log(checkk);


let numms=[1,2,3,5,11,44,10,100,49,203];
// let max=-1;
// for(let i=0;i<maxArr.length;i++){
//     if(max<maxArr[i]){
//         max=maxArr[i];
//     }
// }
// console.log(max);

let resullt=numms.reduce((max,el)=>{
    if(el>max){
        return max;
    }
    else{
        return el;
    }
})
// console.log(resullt);
let arrray=[10,20,30,1000,23,40];

let reeesult=arrray.every((el)=>el%10==0);
// console.log(reeesult);



//Default Parameter

function func(a,b=3){
    return a+b;
}
// console.log(func(2));



//Spread

let aarr=[1,2,3,54,3];
let newArr=[...aarr];
// console.log(newArr);



//Rest ---> Rest ka kaam hota hai multiple values ko ek sath karke array me store karna.
function sum(...num){
    console.log(num);
}
// sum(10,20,20,30);

//Sum of elements;
function summ(...nummm){
    let total=0;
    for(let num of nummm){
        total+=num;
    }
    return total;
}
// console.log(summ(10,20,30));

//Destructuring

let names=["Shubham","Aman","Atul","abc","xyz","pyq"];

let[winner,runnerup,...others]=names;
console.log(winner);
console.log(runnerup);
console.log(others);


