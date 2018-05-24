$(function () {
  // use strict
  var countDown = new Date("April 27, 2019 15:37:25").getTime();

  var timeInterval = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDown - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    $("#demo").text( days + "d " + hours + "h " + minutes + "m " + seconds + "s " );

    // If the count down is finished, write some text 
    if (distance  < 0 ) {

      clearInterval(timeInterval);
      $("#demo").text("EXPIRED");
    }

  },1000);

});