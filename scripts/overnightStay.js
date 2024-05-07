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
    let estimateForm = document.querySelector("#estimateStayForm");
    theForm.addEventListener("submit", estimateStay);

}
function estimateStay(event) {


    event.preventDefault();

    let theForm = event.target;
    let roomtype = 0;
    let totalRoomPrice = roomtype * Number(theForm.seasonQueenOrKing.value);

}
function getRoomRate(checkInDate, roomType) {
    let outSeasonSuite = 250;
    let seasonSuite = 350;
    let outSeasonQueenOrKing = 150;
    let seasonQueenOrKing = 250;
    let tax = 12 / 100;

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
    } else if (theForm.roomType.value === "queen" || roomType === "king") {
        if (inSeason) {
            roomRate = seasonQueenOrKing;

        } else {
            roomRate = outSeasonQueenOrKing;
        }
    } else {
        roomRate = 0;

    }

    // dicount
    let dicountAmount = 0;
    if (theForm.aaa.value.checked === "aaa") {
        dicountAmount = roomRate * (10 / 100);
    } if (theForm.military.value.checked === "military") {
        dicountAmount = roomRate * (20 / 100);

    } else {
        return roomRate;

    }













}