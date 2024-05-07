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



window.onload = function () {
    let estimateForm = document.querySelector("#estimateForm");
    estimateForm.addEventListener("submit", estimateStay);

}
function estimateStay(event) {

    // prevent from the form to submit
    event.preventDefault();
    // event.target refers to the form that was submitted
    let estimateForm = event.target;
    // grabs the value in the input field with the checkInDate 
    let checkInDate = estimateForm.checkInDate.value;
    // grabs the value in the input field of roomtype
    let roomType = estimateForm.roomType.value;
    // used parseInt() to conver from to an interger and stored in variable of number of  Nights.
    let numberOfNights = parseInt(estimateForm.numberOfNights.value);
    // total amount of a room based on the checkinDate , roomtyeo, and number of Nights
    let totalAmount = getRoomRate(checkInDate,roomType,numberOfNights);
    console.log(`total room rate for ${roomType} on ${checkInDate} $${totalAmount}`);
}
function getRoomRate(checkInDate, roomType, numberOfNights) {
    let outSeasonSuite = 250;
    let seasonSuite = 350;
    let outSeasonQueenOrKing = 150;
    let seasonQueenOrKing = 250;
    let tax = 12 / 100;
    
    
    // new date creates a date
    //gives the number of months from 0-11 based on the checkInDate
    
    let checkInMonth = new Date(checkInDate).getMonth();
    // created a new variable to grabs the specific months form 0-11
    let inSeason = [5, 6, 7];
    // checks whether the month stored in season is falls within june-august
    inSeason = inSeason.includes(checkInMonth);

    //created variabel for roomRate
    let roomRate;
    // needed to Refactor the if statement below to use a ternary operator
    if (estimateForm.roomType.value === "suite") {

        if (inSeason) {
            roomRate = seasonSuite;
            

        } else {
            roomRate = outSeasonSuite;
        }
            // || means or  created an else if statment for  queen or king
           
    } else if (estimateForm.roomType.value === "queen" || theForm.roomType.value === "king") {
        if (inSeason) {
            roomRate = seasonQueenOrKing;

        } else {
            roomRate = outSeasonQueenOrKing;
        }
    } else {
        roomRate = 0;

    }
    // operator performs multiplication on the two operands and assigns the result to the left operand.
    roomRate *= numberOfNights;
   


    // discount
    let discountAmount = 0;
    if (estimateForm.discount.value === "aaa") {
        discountAmount = roomRate * (10 / 100);
    }else if (estimateForm.discount.value === "military") {
        discountAmount = roomRate * (20 / 100);

    } 
    // The subtraction assignment (-=) operator performs subtraction on the two operands and assigns the result to the left operand.
    roomRate -= discountAmount;
    let taxes = roomRate * tax;
    let totalAmount = roomRate + taxes;
    
    return totalAmount;
    
    

    
    
   
    // need to fix the multple of the night staying number of night.



}


