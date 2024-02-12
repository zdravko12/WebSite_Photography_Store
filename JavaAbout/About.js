// sreach Function
jQuery(document).ready(function($) {
  var wHeight = window.innerHeight;
  //search bar middle alignment
  $('#mk-fullscreen-searchform').css('top', wHeight / 3);
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




$(document).ready(function () {
  var images = $('.MyScaleAn');
  var windowHeight = $(window).height();
  
  function scaleImageWithDelay(index) {
      setTimeout(function () {
          images.eq(index).addClass('scaled');
      }, index * 600); //delay time 
  }

  $(window).scroll(function () {
      var scrollTop = $(this).scrollTop();

      images.each(function (index) {
          var offsetTop = $(this).offset().top;

          if (scrollTop > offsetTop - windowHeight && scrollTop < offsetTop + windowHeight) {
              scaleImageWithDelay(index);
          } else {
              $(this).removeClass('scaled');
          }
      });
  });
});



var imageContainer = document.getElementById('zoomImage');
var imageElement = imageContainer.querySelector('img');
var initialImageSrc = '/Images/AboutCoverr.jpg';
var newImageSrc = '/Images/AboutCoverr1.jpg';


function changeImage(newSrc) {
    imageElement.src = newSrc;
}

var scrollPosition = 0;

window.addEventListener('scroll', function() {
    var currentScroll = window.scrollY;

    if (currentScroll > scrollPosition) {
        // Scrolling down
        changeImage(newImageSrc);
        
    } else {
        // Scrolling up
        changeImage(initialImageSrc);
    }

    scrollPosition = currentScroll;
});





//element
const mySection = document.querySelector('.my-section');

// Function to handle scroll event
function handleScroll() {
  //  scale 
  const scaleValue = 1 + window.scrollY * 0.001; 
  // scale3d transformation
  mySection.style.transform = `scale3d(${scaleValue}, ${scaleValue}, 1)`;
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);






// Get all the images 
var images = document.querySelectorAll('.my-img-portfolio');

// Get the modal 
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImg');
var closeBtn = document.getElementsByClassName('close')[0];

//  click  listener
images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

// Close the modal when the 'x' button is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close the modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};




/* Initial styles  for store text*/

document.addEventListener('scroll', function() {
  var element = document.getElementById('VisitStoreText');
  var position = element.getBoundingClientRect();

  // Check if the element is in the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visited');
  } else {
    element.classList.remove('visited');
  }
});




// za about text
$(document).ready(function() {
  var aboutMe = $('#about-me');
  var originalTransform = aboutMe.css('transform');

  $(window).scroll(function() {
    // Check scroll position
    var scroll = $(window).scrollTop();

    // Apply scaling effect when scrolling down
    if (scroll > 50) { // Change '50' to your desired scroll position
      aboutMe.css('transform', 'scale(0.9)');
    } else {
      aboutMe.css('transform', originalTransform);
    }
  });
});


const sections = document.querySelectorAll('.sub-section');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8; // Adjust this value as needed

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', checkScroll);


