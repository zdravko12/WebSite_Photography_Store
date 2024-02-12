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
                    <div class="search-card" onclick="handleSearch('${item.term}')">
                        <img src="${item.imagePath}" alt="${item.term} Album">
                        <span>${item.term.toUpperCase()}</span>
                    </div>`;
            }
        });
    }
});

// Function to handle the search
function handleSearch(term) {
    document.getElementById('mk-fullscreen-search-input').value = term;
}
      // scrol none
      const searchButton = document.getElementById('search-button-listener');
const searchOverlay = document.getElementById('mk-search-overlay');

// Toggle class on body to disable scrolling
function toggleBodyOverflow() {
document.body.classList.toggle('no-scroll');
}

// Add event listeners to toggle class when search button is clicked and search overlay is closed
searchButton.addEventListener('click', toggleBodyOverflow);
document.getElementById('mk-fullscreen-close-button').addEventListener('click', toggleBodyOverflow);
    // scrol none



      // Function to handle the search
document.getElementById('mk-fullscreen-searchform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the search query
    var query = document.getElementById('mk-fullscreen-search-input').value.toLowerCase().trim();

   
    if (query === 'nature') {
        //gallery page and text 'NATURE'
        document.getElementById('search-results').innerHTML = '<a href="/Galery/GaleryNature.html"><img src="/Images/sarplaninaWinter.png" alt="Nature Album"><span>Nature Album</span></a>';
     } else if (query === 'animals') {
        // Display the album image and text for 'animals'
        document.getElementById('search-results').innerHTML = '<a href="/Galery/GaleryAnimals.html"><img src="/Images/Cat.jpg" alt="Animals Album"><span>Animals Album</span></a>';
    } else if (query === 'landscapes') {
        // Display the album image and text for 'animals'
        document.getElementById('search-results').innerHTML = '<a href="/Galery/LandscapesAnimals.html"><img src="/Images/Cat.jpg" alt="Animals Album"><span>Landscapes Album</span></a>';
    } else {
        // Display a message indicating no results found
        document.getElementById('search-results').innerHTML = 'No results found.';
    }
});