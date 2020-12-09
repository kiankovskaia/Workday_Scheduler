// place current date and time at the top of the page
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
// each time block is color-coded to indicate whether it is in the past, present, or future
function changeColor(){
    let hour = moment().hours();
console.log(hour)
}
changeColor()