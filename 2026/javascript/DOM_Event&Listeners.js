//OnClick and Onmouseenter events....



let btn=document.querySelector('button');
let btns=document.querySelectorAll('button');
for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("You entered a button");
    }
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("You doubled clicked me")
    });
}
// function sayHello(){
//     alert("Hello!")
// }
// function sayName(){
//     alert("Apna College");
// }
// btn.onclick=function(){
//     console.log("button was clicked");
//     alert("Clicked");
// }


//events listeners on elements
// let p=document.querySelector('p');

// let box=document.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box");
// })
// p.addEventListener("click",function(){
//     console.log("Paragraph was clicked")
// })

//This in event listeners
// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }
// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


let inp=document.querySelector("input");

inp.addEventListener("keydown",function(event){
    console.log("code=",event.code); //Arrow up arrow down arrow right arrow left
    if(event.code=="KeyU"){
        console.log("Character moves upward");
    }else if(event.code=="KeyD"){
        console.log("Character moves downward");
    }
    else if(event.code=="KeyL"){
        console.log("Character moves left direction");
    }
    else if(event.code=="KeyR"){
        console.log("Character moves right direction")
    }







    // console.log("key= ",event.key);
    // console.log("code= ",event.code);
    // console.log("Key was pressed");
})









