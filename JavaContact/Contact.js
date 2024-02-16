window.addEventListener('scroll', function() {
  var scrollImage = document.getElementById('scrollImage');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Adjust this threshold as needed
      scrollImage.classList.add('show');
  } else {
      scrollImage.classList.remove('show');
  }
});

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

 // Function to handle the search
 document.getElementById('mk-fullscreen-search-input').addEventListener('input', function(event) {
  // Get the search query
  var query = event.target.value.toLowerCase().trim();

  // Reference to the search results container
  var searchResults = document.getElementById('search-results');

  // Clear previous search results
  searchResults.innerHTML = '';

  // If the query is not empty
  if (query !== '') {
      // Define search terms and their associated images
      var searchTerms = [
          { term: 'nature', imagePath: '/Images/sarplaninaWinter.png', href: '/Galery/GaleryNature.html' },
          { term: 'animals', imagePath: '/Images/Cat.jpg', href: '/Galery/GaleryAnimals.html' },
          { term: 'landscapes', imagePath: '/Images/Cat.jpg', href: '/Galery/LandscapesAnimals.html' }
         
      ];

      // Iterate over search terms
      searchTerms.forEach(function(item) {
          // Check if the query matches the term or is a partial match
          if (item.term.includes(query)) {
              // Display the search result card
              searchResults.innerHTML += `
                  <a href="${item.href}">
                      <div class="search-card">
                          <img src="${item.imagePath}" alt="${item.term} Album">
                          <span>${item.term.toUpperCase()}</span>
                      </div>
                  </a>`;
          }
      });
  }
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
  // sreach Function