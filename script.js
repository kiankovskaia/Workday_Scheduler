

// Moment.js syntax is used to place current date and time at the top of the page 

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function(){

    // store these input values in localStorage

          console.log(this);
          var text = $(this).siblings(".description").val();
          var time = $(this).parent().attr("id");  
  
          localStorage.setItem(time, text);
      });
      
      // get values from localStorage for each timeblock

      $("#9am .description").val(localStorage.getItem("9am"));
      $("#10am .description").val(localStorage.getItem("10am"));
      $("#11am .description").val(localStorage.getItem("11am"));
      $("#12pm .description").val(localStorage.getItem("12pm"));
      $("#13pm .description").val(localStorage.getItem("13pm"));
      $("#14pm .description").val(localStorage.getItem("14pm"));
      $("#15pm .description").val(localStorage.getItem("15pm"));
      $("#16pm .description").val(localStorage.getItem("16pm"));
      $("#17pm .description").val(localStorage.getItem("17pm"));

   
    // each time block is color-coded to indicate whether it is in the past, present, or future

function changeColor(){
    let hour = moment().hours();

// console.log(hour)

$(".time-block").each(function(){
    let currentHour = parseInt($(this).attr("id"));

 // console.log(this)

// change color of each block depending on current time. Grey for past, red for current hour and green for future tasks.

 if (currentHour > hour) {
     $(this).addClass("future");
 }
 else if (currentHour === hour){
     $(this).addClass("present");
 }
 else {
     $(this).addClass("past");
 }
})
}
changeColor()
    


// localStorage.setItem ("tasks", storedTasks)
// }


// turn object into a string before saving

// at top of page localstorage.getItem
