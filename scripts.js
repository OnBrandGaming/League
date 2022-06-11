

/******************
Table of Contents

1. Countdown Timer
2. Horizontal Scroll Reminder
3. 
4. 
5. 
******************/

/*****************
  Countdown Timer
 *****************/

// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element
  document.getElementById("countDown").innerHTML = days + " days<br>" + hours + " hours "
  + minutes + " minutes " + seconds + " seconds";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Next Tournament Coming Soon!";
  }
}, 1000);


/***********
  Horizontal Scroll Reminder
***********/
let widthScrollArea = document.getElementById('eventsDiv').scrollWidth;
let horizontalScreenArea = window.innerWidth;
let pageY;
const lowthreshold = 450;
const highthreshold = 1200;

function scrollReminder() {
    
    widthScrollArea = document.getElementById('eventsDiv').scrollWidth;
    horizontalScreenArea = window.innerWidth + 5;
    pageY = window.pageYOffset;
    let sweetSpot; 
    
    if(pageY >= lowthreshold && pageY <= highthreshold) {
        sweetSpot = true;
    }else{sweetSpot = false}
        if (sweetSpot === true && (widthScrollArea >= horizontalScreenArea)) {
        document.getElementById('contentIndicator').style.display = 'block';
        }
        else
        {
            document.getElementById("contentIndicator").style.display = "none";
        }
    }


scrollReminder();