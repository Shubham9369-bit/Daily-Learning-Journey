// Practice Exercise 2: Online Food Order (with error handling practice)
// Scenario: 3 steps hain:

// placeOrder() — order place karo (1 second lage), resolve karo "Order placed" ke saath
// prepareFood(message) — khana taiyar karo (1.5 second lage), lekin 50% chance se yeh fail bhi ho sakta hai (jaise "ingredients khatam") — agar fail ho toh reject("Ingredients out of stock") karo, warna resolve karo "Food prepared" ke saath
// deliverFood(message) — delivery karo (1 second lage), resolve karo "Food delivered" ke saath



function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order Placed")
        },1000)
    })
}

function prepareFood(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success: Your Food is prepared");
        }
        else{
            reject("Failure: Due to weak connection");
        }
        },1500);
    })
}
function deliverFood(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Food Delivered");
        },1000);
    })
}

// Promising chain
placeOrder()
.then((message)=>{
    console.log(message);
    return prepareFood(message);
})
.then((message)=>{
    console.log(message);
    return deliverFood(message);
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log("Something wrong",error);
})
