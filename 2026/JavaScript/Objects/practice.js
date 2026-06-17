let student={
    Name:"Shubham",
    Age:22,
    Marks:98
};
console.log(student["Name"]);

const Student2=["Shubham",25,95.5];

console.log(student);
console.log(Student2);


const student={
    Name:"Shubham",
    Age:23,
    Marks:95.5,
    City:"Delhi"
};
student.City="Mumbai";
console.log(student.City);
console.log(student);



const Student={
    Shubham:{
        name:"Shubham Tiwari",
        age:22,
    },
    Atul:{
        name:"Atul",
        age:22
    },
    Aman:{
        name:"Aman",
        age:23
    },
};
console.log(Student.Aman.age);



const classInfo=[
    {   
        name:"Shubham",
        city:"Mumbai"
    },
    {
        name:"Atul",
        city:"Deoria"
    },
    {
        name:"Aman",
        city:"Kushinagar"
    },
];


console.log(classInfo[1]);


const num=Math.random();
let nums=num*10;
let final=Math.floor(num);
final=(final*10)+1;
// console.log(final);
console.log(Math.floor(Math.random()*10+1));



const max=prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User Quit!");
        break;
    }
    if(guess==random){
        console.log("You are right");
        break;
    }
    else {
        guess = prompt("Guess the number again");
    }
};
