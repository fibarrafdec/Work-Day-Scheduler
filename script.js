let interval = setInterval(function() {
    let presentMoment = moment();
    $('#currentDay').html(presentMoment.format('YYYY MMMM DD') + ' '
                        + presentMoment.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + presentMoment.format('hh:mm:ss A'));
  }, 100);

let currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let currentHour = moment().format('h:mm:ss a');
  

let nine = $("hour-9");
let ten = $("hour-10");
let eleven = $("hour-11");
let twelve = $("hour-12");
let thirteen = $("hour-13");
let fourteen = $("hour-14");
let fiveteen = $("hour-15");
let sixteen = $("hour-17");
let seventeen = $("hour-17");

function initPage() 

function status () 



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
