//JavaScript ek Single-Threaded Language hai, matlab ek time par sirf ek hi task execute kar sakti hai. 
//Function calls ko manage karne ke liye JavaScript Call Stack ka use karti hai. Jab koi task time leta hai (jaise setTimeout, API Call, Fetch Request),
  //tab JavaScript Asynchronous Programming ka use karti hai taki main thread block na ho.

//call stack example
function first() {
    console.log("First");
}

function second() {
    first();
    console.log("Second");
}

second();

//Execution

// second() Call Stack me push hota hai.
// first() call hota hai aur Stack ke top par push hota hai.
// first() execute hokar Stack se remove (pop) ho jata hai.
// second() ka remaining code execute hota hai.
// second() bhi Stack se remove ho jata hai.



//Call Stack LIFO (Last In First Out) principle follow karta hai, yani jo function sabse last me aata hai wahi sabse pehle bahar nikalta hai.

//Asynchronous JavaScript Example
console.log("Start");

setTimeout(() => {
    console.log("Timer Completed");
}, 2000);

console.log("End");

// //Output
// Start
// End
// Timer Completed



// Explanation
console.log("Start") immediately execute hota hai.
setTimeout() browser ki Web API ko de diya jata hai aur timer start ho jata hai.
JavaScript wait nahi karti aur next line execute kar deti hai.
console.log("End") print ho jata hai.
2 second complete hone ke baad callback function Callback Queue me chala jata hai.
Event Loop check karta hai ki Call Stack empty hai ya nahi.
Jab Stack empty milta hai tab callback ko Stack me bhejkar execute karwa deta hai.

//Key Points

JavaScript Single Threaded hai.
Function calls Call Stack me store hote hain.
Call Stack LIFO (Last In First Out) follow karta hai.
setTimeout, API Calls jaise tasks asynchronous hote hain.
Browser Web APIs async tasks ko handle karti hain.
Completed callbacks Callback Queue me wait karte hain.
Event Loop Stack empty hone par callbacks execute karwata hai.
setTimeout(..., 0) bhi immediately execute nahi hota.





















