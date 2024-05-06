"use strict"
console.log("works");
window.onload = function(){
    let estimateForm =document.querySelector("#estimateStayForm");
    estimateForm.addEventListener("submit",estimateStay);

}
function estimateStay(event){
    event.preventDefault();
    let estimateForm = event.target;

    

    let roomType = Number(estimateForm.numberOfNights.value)* getRoomRate(estimateForm.checkInDate.value,estimateForm.roomType.value);

    console.log(roomType);
    console.log("you submitted the form");

    console.log(estimateForm.checkInDate.value)
}
function getRoomRate(checkInDate,roomType){

    if(roomType === "suite"){
        return 150;
    }
    return 150
    



}