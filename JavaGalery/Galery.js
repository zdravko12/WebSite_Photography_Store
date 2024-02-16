document.getElementById("mk-fullscreen-searchform").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the default form submission

  var category = document.getElementById("category").value;
  var searchInput = document.getElementById("mk-fullscreen-search-input").value;

  // Define the base URL for redirection
  var baseURL = "/SearchFilter/";

  // Define the redirection URL based on the selected category
  var redirectURL;
  if (category === "all") {
      redirectURL = document.querySelector('#category option[value="all"]').getAttribute('data-url');
    } else if (category === "landscape") {
      redirectURL = baseURL + "SearchFilterLandscapes.html";
      
  } else {
      redirectURL = baseURL + "SearchFilter" + category.charAt(0).toUpperCase() + category.slice(1) + ".html";
  }

  // Redirect to the constructed URL
  window.location.href = redirectURL + "?search=" + encodeURIComponent(searchInput);
});


    
 
 
 
 
 // sreach Function
 jQuery(document).ready(function($) {
    var wHeight = window.innerHeight;
    //search bar middle alignment
    $('#mk-fullscreen-searchform').css('top', wHeight / 10);
    //reform search bar
    jQuery(window).resize(function() {
      wHeight = window.innerHeight;
      $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    });
    // Search
    $('#search-button').click(function() {
      console.log("Open Search, Search Centered");
      $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
    });
    $("a.mk-fullscreen-close").click(function() {
      console.log("Closed Search");
      $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
    });
  });