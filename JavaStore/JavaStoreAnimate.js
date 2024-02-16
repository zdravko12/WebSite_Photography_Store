


$(document).ready(function() {
  // Initial background color
  var initialColor = 'lightwhite';

  // Change background color on scroll
  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    // Calculate color opacity based on scroll position
    var opacity = scrollPosition / 300; // Adjust the value as needed

    // Set the new background color
    var newColor = 'rgba(239, 235, 226, ' + opacity + ')';

    // Apply the new background color
    $('#ColorBackgroundChange').css('background-color', newColor);
  });

  // Reset background color when scrolling to the top
  $(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
      $('#ColorBackgroundChange').css('background-color', initialColor);
    }
  });
});







$(document).ready(function () {
    // Animate left on page load
    $(".navbar-collapse").addClass("animated-left");

    // Reset animation class when the animation ends
    $(".navbar-collapse").on("animationend", function () {
      $(this).removeClass("animated_Left");
    });
  });