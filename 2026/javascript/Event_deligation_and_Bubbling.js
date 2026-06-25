//chaapter 11

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value="";
    
});
let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        console.log("Element deleted")
        let par=this.parentElement;
        par.remove();
    })
}

//Event Deligation 
//Mujhe event bubbling use karna padega taki mai sare todo list ka delete event manage kar saku
//kyuki delete button sirf pehle se html tag or button pe hi kaam aata hai jabtak hum event bubbing na use kare
ul.addEventListener("clcik",function(event){
    if(event.target.nodeName=="BUTTON");
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
})
