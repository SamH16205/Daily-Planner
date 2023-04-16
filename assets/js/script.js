// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeBlocks = $(".row")
var currentHour = dayjs().format('H')
var saveButtons = $('.saveBtn')
console.log(currentHour)

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    for (var btn of saveButtons){
      btn.addEventListener("click", function(event){
        LSkey = event.target.parentElement.id
        LSinput = event.target.parentElement.querySelector("textArea").value
        localStorage.setItem(LSkey, LSinput)
      })
    }

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

  
    for (var block of timeBlocks){
      // if block is in the future
      if(Number(block.getAttribute("data-value")) > currentHour){
      block.classList.replace(block.classList[2], "future")
      // if block is in the past
    }else if(Number(block.getAttribute("data-value")) < currentHour){
      block.classList.replace(block.classList[2], "past")
      // if block is in the present
    }else{
      block.classList.replace(block.classList[2], "present")
  }
}

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // sets the value of text areas to its value in local storage
    for (block of timeBlocks){
      block.querySelector("textArea").value = localStorage.getItem(block.id)
    }
    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D"))
  });
  