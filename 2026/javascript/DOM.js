//Java Script DOM ko in detail me padha hu is chapter me (Chapter 9)




let smallImages=document.getElementsByClassName("oldImg");

for(let i=0;i,smallImages;i++){
    console.dir(smallImages[i])
}

Query Selector
console.dir(document.querySelectorAll("div a"));

console.dir(document.querySelector("#mainImg"))

console.log(document.querySelector(".box"))

console.dir(document.querySelector(".box h4"));

let heading=document.querySelector("#heading");
heading.innerText="Namaste";
console.dir(heading);

//Manupulating attribute

// let img=document.querySelector("img");

// let links=document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color="red";
// }
// for(let i=0;i<links.length;i++){
//     links[i].style.color="Red";
// }


//ClassList Property

// let heading=document.querySelector("h1");
// heading.classList;


//Navigation on page

// navigation me hum parent/children and previousElementSibling ad nextElementSibling dekhte hai by using 
//--->let h4=document.querySelector("h4");
// -->h4.parentElemtent
// -->h4.children
// -->h4.previousElementSibiling
// -->h4.nextElementSibiling



///////////Adding Elements on the page--->doccument.createElement('p')
// -->appendChild(element)
//-->append(element)
//-->prepend(element)
//-->insertAdjacent(where,element)
// let newP=document.createElement('p');
// console.dir(newP);
// newP.innerText="Hi i am new para";
// //appendChild(element)
// let body=document.querySelector('body');
// body.appendChild(newP);

// let box=document.querySelector('.box');
// box.appendChild(newP);

// let btn=document.createElement('button');

// btn.innerText="Click me";

// box.appendChild(btn);
// newP.append(".This is the new text which i want to add in the box.")
//Prepend ka use box ke starting me lane ke kiye karte hai.
// box.prepend(newP)
// box.prepend(btn )

// let p=document.querySelector('p');
// let btnn=document.createElement('button');
// btnn.innerHTML="New Button!!!";
// p.insertAdjacentElement('beforebegin',btnn);
// p.insertAdjacentElement('beforeend',btnn);
// p.insertAdjacentElement('afterbegin',btnn);
// p.insertAdjacentElement('afterend',btnn);


// Now i am going to learn removeChild from the page...
// let body=document.querySelector('body');
// body.removeChild(btnn);
// p.insertAdjacentElement('afterend',btnn);


// body.remove(); this remove tag is very dangerous so use it carefully...because it remove all the content form the diplay..

//practice questions

//----->1 question--a <p> with with red text says "Hey I'm Red";

// let para=document.createElement("p");
// para.innerText="Hey I'm Red";
// document.querySelector('body').append(para);
// para.classList.add('red');

//---->2nd Question--a <h3> tag with blue says "Hey i am h3!!"

let h3=document.createElement('h3');
h3.innerText="Hey i am h3!!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

//---->3rd Question--> A div with a black border and pink background color with the following elements inside of it..
   //--> another <h1> that says "I'm a div"
   //--> a <p>  that says "Me too!"


let div=document.createElement("div");
let h1=document.createElement("h1");
let para=document.createElement("p");

h1.innerText="Hey I'm a div";
para.innerText="Me too";

div.append(h1);
div.append(para);
div.classList.add('box');
document.querySelector('body').append(div);

document.querySelector('body').prepend(div);
