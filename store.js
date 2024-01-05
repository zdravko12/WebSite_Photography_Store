 


// zoom slikata about store home 
window.addEventListener('scroll', function() {
  var images = document.querySelectorAll('#zoomPhotosScrol1');
  var scrollPosition = window.scrollY;

  images.forEach(function(image) {
    var imagePosition = image.getBoundingClientRect().top + window.scrollY;
    var windowHeight = window.innerHeight;

    if (imagePosition < scrollPosition + windowHeight - 100 && imagePosition > scrollPosition - 100) {
      image.style.transform = 'scale(1)';
      image.style.transition = 'transform 0.5s ease';
    } else {
      image.style.transform = 'scale(1.2)';
      image.style.transition = 'transform 0.5s ease';
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", revealOnScroll);
});

function revealOnScroll() {
  var images = document.querySelectorAll(".portfolio-grid img");

  images.forEach(function (image) {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var imageOffsetTop = image.offsetTop;
      var imageHeight = image.offsetHeight;

      if (scrollY + windowHeight > imageOffsetTop + imageHeight / 2) {
          image.style.opacity = "1";
          image.classList.add("active");
      } else {
          image.classList.remove("active");
      }
  });
}





// Function to check if element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const elements = document.querySelectorAll('.animate-left');
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add('in-view');
    }
  });
}

// Listen for scroll event
window.addEventListener('scroll', handleScroll);










// animacija za fade na home
// document.addEventListener('DOMContentLoaded', function() {
//   window.addEventListener('scroll', function() {
//     var elementsToShow = document.querySelectorAll('.anmimateAboutStoreText');
//     Array.prototype.forEach.call(elementsToShow, function(element) {
//       if (isElementInViewport(element)) {
//         element.classList.remove('hidden');
//       } else {
//         element.classList.add('hidden');
//       }
//     });
//   });
  
//   function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
// });




// scripts.js
// const header5 = document.querySelector('.main-header1');
// header5.style.animationDuration = '20s'; // Change the duration to your preferred value

// za header scrol slika

// window.addEventListener('scroll', function() {
//   const header1 = document.querySelector('.main-header');
//   const scrollPoss1 = window.scrollY;

//   // Move the background position of the header based on scroll position
//   header1.style.backgroundPositionY = `-${scrollPoss1 / 3}px`; // Adjust the division factor to change the scroll effect
// });

// nav Card scrol

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeaderCard");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// za header scrol slika 1

// window.addEventListener('scroll', function() {
//   const header12 = document.querySelector('.main-header');
//   const scrollPos12 = window.scrollY;

//   // Move the background position of the header based on scroll position
//   header12.style.backgroundPositionY = `-${scrollPos12 / 3}px`; // Adjust the division factor to change the scroll effect
// });



// shoping card store photography

var shoppingCart = (function () {

  cart = [];

  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
  }
  if (localStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count, format, material) {
    for (var item in cart) {
      if (cart[item].name === name && cart[item].format === format && cart[item].material === material && cart[item].material === material) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    item.format = format;
    item.material = material;
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }
  return obj;
})();


// Add item
$('.default-btn').click(function (event) {
  // alert('working');
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  // Get selected format and material
  var format = $('.size-options').val();
  var material = $('#PrintingMaterial').val();

  shoppingCart.addItemToCart(name, price, 1, format, material);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>"
      + "<td>" + cartArray[i].format + "  (" + cartArray[i].material + ")</td>"
      + "<td><div class='input-group'>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "</div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = "
      + "<td>" + cartArray[i].total + "</td>"
      + "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

$('.show-cart').on("change", ".item-format", function (event) {
  var name = $(this).data('name');
  var selectedFormat = $(this).val();
  // You can handle the selected format here
  // Update or store the selected format for the corresponding item in the cart
 shoppingCart.updateFormatForItem(name, selectedFormat);
  displayCart();
});

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});
displayCart();

//////// ui script start /////////
// Tabs Single Page
$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
$('.tab ul.tabs li a').on('click', function (g) {
  var tab = $(this).closest('.tab'), 
  index = $(this).closest('li').index();
  tab.find('ul.tabs > li').removeClass('current');
  $(this).closest('li').addClass('current');
  tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
  tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
  g.preventDefault();
});

// search function
$('#search_field').on('keyup', function() {
var value = $(this).val();
var patt = new RegExp(value, "i");

$('.tab_content').find('.col-lg-3').each(function() {
  var $table = $(this);
  
  if (!($table.find('.featured-item').text().search(patt) >= 0)) {
    $table.not('.featured-item').hide();
  }
  if (($table.find('.col-lg-3').text().search(patt) >= 0)) {
    $(this).show();
    document.getElementById('not_found').style.display = 'none';
  } else {
    document.getElementById("not_found").innerHTML = " Product not found..";
    document.getElementById('not_found').style.display = 'block';
  }
  
});

});



// for deimension sum

function updatePrice(selectElement, itemName) {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const price = selectedOption.getAttribute('data-price');
  
  // Find the price display element and update its content
  const itemContainer = selectElement.closest('.featured-item');
  const priceDisplay = itemContainer.querySelector('.content-in h4');
  priceDisplay.textContent = `€ ${price}`;
  
  // You can also update the data-price attribute of the Add to cart button if needed
  const addToCartButton = itemContainer.querySelector(`button[data-name="${itemName}"]`);
  addToCartButton.setAttribute('data-price', price);
}

// za check form 








// za sliki vo header slide



