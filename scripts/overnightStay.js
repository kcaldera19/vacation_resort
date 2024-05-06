"use strict"
console.log("works");
// You price a stay using the in-season and out-of-season rates based on their check-in date. For
// example, if someone checks in to a Queen room on 3/20 (March) the rate is $150/night, but if
// they check in on 6/20 (June), the rate is $250/night. NOTE: The same rate is applied
// throughout the entire stay and is solely based on check-in date.
// In this program, you should implement a function named getRoomRate() that is passed in
// the check-in date and room type. It will return a value like $250 or $150 that represents the
// nightly rate for that room.


// * getRoomRate(estimateForm.checkInDate.value,estimateForm.roomType.value);

window.onload = function () {
    let estimateForm = document.querySelector("#estimateStayForm");
    estimateForm.addEventListener("submit", estimateStay);

}
function estimateStay(event) {


    event.preventDefault();
    let estimateForm = event.target;



    let numberOfNights = Number(estimateForm.numberOfNights.value);
    let CheckInDate = estimateForm.checkInDate.value;
    let roomType = estimateForm.roomType.value;
    console.log(roomType);
    console.log("you submitted the form");

    console.log(estimateForm.checkInDate.value)
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





    if (roomType === "suite") {
        if (inSeason) {
            return seasonSuite;

        } else {
            return outSeasonSuite;
        }
    }else if (roomType === "queen" || roomType === "king"){
        if (inSeason) {
            return seasonQueenOrKing;

        } else {
            return outSeasonQueenOrKing;
        }
    }
    

    // if(roomType === "")




}