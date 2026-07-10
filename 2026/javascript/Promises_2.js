// Poora scenario: Ek movie ticket booking system banana hai jisme 3 steps hain:

// checkSeatAvailability() — check karo seat available hai ya nahi (1 second lage), resolve karo "Seat available hai" message ke saath
// bookSeat(message) — pichle step ka message lekar, seat book karo (1 second lage), resolve karo "Seat book ho gayi" message ke saath
// sendConfirmation(message) — booking confirm hone ke baad, confirmation bhejo (1 second lage), resolve karo "Confirmation email bhej diya" message ke saath


//Availabilty check kar rha hu 

function checkSeatAvailability(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Seat is available");
        },1000);
    });
}

//Seat Booking
function bookSeat(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Seat has been booked");
        },1000);
    });
}

//Seat Confirm kar rha hu

function sendConfirmation(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Confirmation email has been send to your mobile number and email id")
        },2000);
    })
}

checkSeatAvailability()
    
    .then((message)=>{
        console.log(message);
        return bookSeat(message);
    })
    .then((message)=>{
        console.log(message);
        return sendConfirmation(message);
    })
    .then((message)=>{
        console.log(message);
    })
    
    .catch((error)=>{
        console.log("Something went wrong",error);
    })
