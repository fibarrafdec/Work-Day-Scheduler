let timeDisplayEl = $('#time-display');
let timeSet = document.getElementById("timeSet");
let clearButton = document.getElementById("clearDay") 

function displayTime() {
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}  

displayTime();
setInterval(displayTime, 1000);

let currentHour = dayjs().format('H');

let nine = $("hour-9");
let ten = $("hour-10");
let eleven = $("hour-11");
let twelve = $("hour-12");
let thirteen = $("hour-13");
let fourteen = $("hour-14");
let fiveteen = $("hour-15");
let sixteen = $("hour-17");
let seventeen = $("hour-17");

let hour = moment().hours();
let userInput;
let hourSpan;

function background() {
    $(".time-block").each(function () {
        hour = parseInt(hour);
        console.log(hour);
        $(this).toggleClass('past', hour < currentHour);
        $(this).toggleClass('present', hour === currentHour);
        $(this).toggleClass('future', hour > currentHour);
    });
}

function textEntry() {
    $('.saveBtn').on('click', function() {
      let key = $(this).parent().attr('id');
      let value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
}

function updateBackground() {
    $('.time-block').each(function() {
      let blockHour = parseInt(this.id);
      if (blockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
}

background();
textEntry();
updateBackground();

