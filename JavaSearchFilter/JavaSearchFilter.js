 
 // Function to open modal with specified image
 function openModal(imgSrc) {
    var modal = document.getElementById("myModalPhoto");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
  }
  
  // Function to close modal
  document.getElementsByClassName("closePhotos")[0].onclick = function() {
    document.getElementById("myModalPhoto").style.display = "none";
  };



