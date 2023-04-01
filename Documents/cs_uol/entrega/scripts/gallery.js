// Filters images in the gallery based on a search input
function searchGallery() {
  // Get the search input and gallery container
  var input, filter, container, cards, i, card;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  container = document.getElementById("myGallery");

  // Get all the cards in the gallery and loop through them
  cards = container.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    card = cards[i];

    // Check if the card's content matches the search input
    if (card.innerHTML.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

// Filters images in the gallery based on a filter selection
function filterGallery() {
  // Get the filter selection and gallery container
  var filter, container, cards, i, card, title;
  filter = document.getElementById("myFilter").value.toUpperCase();
  container = document.getElementById("myGallery");

  // Get all the cards in the gallery and loop through them
  cards = container.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
    card = cards[i];

    // Get the title of the card and check if it matches the filter
    title = card.getElementsByClassName("card-text")[0].getElementsByTagName("h2")[0].innerText.toUpperCase();
    if (title.indexOf(filter) > -1 || filter === "ALL") {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
}

// Changes the view of the gallery to a grid with a specified number of images per row
function changeView(view, button) {
  // Remove the "selected" class from all buttons
  var buttons = document
    .getElementsByClassName("change-view")[0]
    .getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }

  // Add the "selected" class to the clicked button
  button.classList.add("selected");

  // Get the gallery container and set the number of images per row based on the view
  var container = document.getElementById("myGallery");
  var imagesPerRow;
  switch (view) {
    case "grid-2":
      imagesPerRow = 2;
      break;
    case "grid-3":
      imagesPerRow = 3;
      break;
    default:
      imagesPerRow = 2;
  }

  // Set the CSS class and property for the gallery container
  if (container) {
    container.classList.remove("grid-2", "grid-3", "grid-4");
    container.classList.add(view);
    container.style.setProperty("--images-per-row", imagesPerRow);
  }

  // Set the max width of all images in the gallery
  var images = container.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.maxWidth = getComputedStyle(images[i]).getPropertyValue(
      "--max-image-width"
    );
  }
}

// Opens a new window with the clicked image enlarged
function enlargeImage(img) {
  var newWindow = window.open("", "imageWindow", "width=800,height=600");
  newWindow.document.write(
    "<img src='" + img.src + "' style='width:100%;height:100%'>"
  );
}

// Get the modal container
function enlargeImage(img) {
  var newWindow = window.open("", "imageWindow", "width=800,height=600");
  newWindow.document.write(
    "<img src='" + img.src + "' style='width:100%;height:100%'>"
  );
}

window.addEventListener("load", function () {
  changeView();
});

// Get the modal container
var videoModal = document.getElementById("videoModal");
var imageModal = document.getElementById("imageModal");

// Get the video player
var video = document.getElementById("myVideo");

// Get the close buttons
var videoCloseBtn = videoModal.getElementsByClassName("close")[0];
var imageCloseBtn = imageModal.getElementsByClassName("close")[0];

// When the user clicks on a video thumbnail
function openVideoModal(videoElement) {
  // Set the video source to the path of the clicked video thumbnail
  video.src = videoElement.getElementsByTagName("source")[0].src;
  // Show the modal
  videoModal.style.display = "block";
  // Add class to body to disable image hover
  document.body.classList.add("modal-open");
  document.body.classList.add("no-scroll");

}

// When the user clicks on an image thumbnail
function openImageModal(imageElement) {
  var modalImg = document.getElementById("img01");
  // Set the image source to the path of the clicked image thumbnail
  modalImg.src = imageElement.src;
  // Show the modal
  imageModal.style.display = "block";
  // Add class to body to disable image hover
  document.body.classList.add("modal-open");
  document.body.classList.add("no-scroll");

}

// When the user clicks on the close button for the video modal
videoCloseBtn.onclick = function () {
  // Hide the modal
  videoModal.style.display = "none";
  // Remove class from body to re-enable image hover
  document.body.classList.remove("modal-open");
};

// When the user clicks on the close button for the image modal
imageCloseBtn.onclick = function () {
  // Hide the modal
  imageModal.style.display = "none";
  // Remove class from body to re-enable image hover
  document.body.classList.remove("modal-open");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
    // Remove class from body to re-enable image hover
    document.body.classList.remove("modal-open");
  }
  if (event.target == imageModal) {
    imageModal.style.display = "none";
    // Remove class from body to re-enable image hover
    document.body.classList.remove("modal-open");
  }

   cardText.querySelector('h2').innerText = "Video 3 Title";
    cardText.querySelector('p').innerText = "Description of Video 3";
};

function filter(type) {
  var images = document.getElementsByClassName("image");
  var videos = document.getElementsByClassName("video");

  if (type === "image") {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "block";
    }
    for (var i = 0; i < videos.length; i++) {
      videos[i].style.display = "none";
    }
  } else if (type === "video") {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    for (var i = 0; i < videos.length; i++) {
      videos[i].style.display = "block";
    }
  }
}

function closeModal(event) {
  const modal = document.getElementById("imageModal");
  
  // Check if the click event target is the modal or the close button
  if (event.target === modal || event.target.classList.contains("close-btn")) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}


function filterByPrice() {
  const slider = document.getElementById("priceSlider");
  const value = slider.value;
  document.getElementById("sliderValue").textContent = value;

  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    const priceTag = cards[i].querySelector(".price-tag");
    const priceString = priceTag.textContent.replace("R$", "").replace(",", ".");
    const price = parseFloat(priceString);

    if (price <= value) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
