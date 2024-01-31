$(document).ready(function () {
    // Animate left on page load
    $(".navbar-collapse").addClass("animated-left");

    // Reset animation class when the animation ends
    $(".navbar-collapse").on("animationend", function () {
      $(this).removeClass("animated_Left");
    });
  });