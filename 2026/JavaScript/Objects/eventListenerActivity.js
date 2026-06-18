//Ek chota sa activity practice kiya a div ka color button pe click karne se change hota rahega aur heading change hoga rgb number se
//Event listener ka use karke bnaya hu kafi kuch sikhne ko mila...

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let random=getRandomColor();
    h3.innerText=random;


    let div=document.querySelector("div");
    div.style.backgroundColor=random;   
})


//Generate kar rha hu random color ek fuction bnake kaarenge 
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;

}
