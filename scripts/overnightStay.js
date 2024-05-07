"use strict"
console.log("works");
// You price a stay using the in-season and out-of-season rates based on their check-in date. For
// example, if someone checks in to a Queen room on 3/20 (March) the rate is $150/night, but if
// they check in on 6/20 (June), the rate is $250/night. NOTE: The same rate is applied
// throughout the entire stay and is solely based on check-in date.


// In this program, you should implement a function named getRoomRate() that is passed in
// the check-in date and room type. It will return a value like $250 or $150 that represents the
// nightly rate for that room.
// DEVELOPER's TRICK: To make pricing a room easy, start by always returning 150.00
// from the function and get the rest of the page working. Then go back in that function
// and put the correct logic for the specified inputs.
// If the user has AAA or requests a senior discount, we take 10% off the room rate. If they are a
// veteran or request military pricing, we take 20% off the room rate.
// Taxes are 12% of the after-discount room cost.

// * getRoomRate(estimateForm.checkInDate.value,estimateForm.roomType.value);

window.onload = function () {
    let estimateForm = document.querySelector("#theForm");
    estimateForm.addEventListener("submit", estimateStay);

}
function estimateStay(event) {


    event.preventDefault();

    let theForm = event.target;
    let checkInDate = theForm.checkInDate.value;
    let roomType = theForm.roomType.value;
    let numberOfNights = parseInt(theForm.numberOfNights.value);

    let totalAmount = getRoomRate(checkInDate,roomType,numberOfNights);
    console.log(`total room rate for ${roomType} on ${checkInDate} $${totalAmount}`);
}
function getRoomRate(checkInDate, roomType, numberOfNights) {
    let outSeasonSuite = 250;
    let seasonSuite = 350;
    let outSeasonQueenOrKing = 150;
    let seasonQueenOrKing = 250;
    let tax = 12 / 100;
    
    //to
    let checkInMonth = new Date(checkInDate).getMonth();
    // june-August
    let inSeason = [5, 6, 7];
    inSeason = inSeason.includes(checkInMonth);

    let roomRate;
    if (theForm.roomType.value === "suite") {

        if (inSeason) {
            roomRate = seasonSuite;
            

        } else {
            roomRate = outSeasonSuite;
        }
    } else if (theForm.roomType.value === "queen" || theForm.roomType.value === "king") {
        if (inSeason) {
            roomRate = seasonQueenOrKing;

        } else {
            roomRate = outSeasonQueenOrKing;
        }
    } else {
        roomRate = 0;

    }
    roomRate *= numberOfNights;
   


    // dicount
    let discountAmount = 0;
    if (theForm.discount.value === "aaa") {
        discountAmount = roomRate * (10 / 100);
    }else if (theForm.discount.value === "military") {
        discountAmount = roomRate * (20 / 100);

    } 

    roomRate -= discountAmount;
    let taxes = roomRate * tax;
    let totalAmount = roomRate + taxes;
    
    return totalAmount;
    
    

    
    
   
    // need to fix the multple of the night staying number of night.



}


