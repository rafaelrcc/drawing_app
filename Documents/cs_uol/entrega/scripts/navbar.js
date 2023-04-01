// Get the navbar element and all links inside it
const nav = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar ul li a");

// Add an event listener to the toggle button
document.getElementById("toggle").addEventListener("click", function () {
  // Toggle the "toggle" class on the navbar element
  nav.classList.toggle("toggle");
  // Call setActiveLink() to set the active link in the navbar
  setActiveLink();
});

// When the page is loaded, call setActiveLink() to set the active link in the navbar
window.addEventListener("DOMContentLoaded", setActiveLink);

// A function to set the active link in the navbar based on the current URL
function setActiveLink() {
  // Get the current URL
  const currentUrl = window.location.href;
  // Get all links inside the navbar
  const links = document.querySelectorAll("#navbar a");
  // Loop through all the links
  for (let i = 0; i < links.length; i++) {
    // Get the URL of the current link
    const linkUrl = links[i].href;
    // If the current link's URL is the same as the current URL, add the "active" class to the link's parent element
    if (currentUrl === linkUrl) {
      links[i].parentNode.classList.add("active");
    } else {
      // Otherwise, remove the "active" class from the link's parent element
      links[i].parentNode.classList.remove("active");
    }
  }
}

// A function to scroll smoothly to a specific element on the page
function scroll(element, time) {
  // A function to check whether the document element or body should be scrolled
  function checkBody() {
    // Scroll the document element by one pixel
    document.documentElement.scrollTop += 1;
    // If the document element was scrolled, return it; otherwise, return the body
    const body =
      document.documentElement.scrollTop !== 0
        ? document.documentElement
        : document.body;
    // Scroll the document element back to its original position
    document.documentElement.scrollTop -= 1;
    return body;
  }

  // Get the current time
  const startTime = Date.now();
  // Get the element to scroll to and the duration of the scroll animation
  var body = checkBody();
  var duration = time;
  var div = element;
  // Get the height of the document and the height of the viewport
  var domHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
  var clientHeight = Math.max(document.body.clientHeight);
  // Calculate the margin between the bottom of the document and the bottom of the viewport
  var margin = domHeight - clientHeight;
  // Get the height of the viewport
  var windowHeight = document.documentElement.clientHeight;
  // Calculate the destination of the scroll animation
  var destination =
    domHeight - div.offsetTop + margin < windowHeight
      ? domHeight - windowHeight
      : div.offsetTop - margin;
  // Get the current position of the document element or body
  var start = body.scrollTop;

  // A function to draw each frame of the scroll animation
  function draw() {
    // Get the current time
    var now = Date.now();
    // Calculate the progress of the scroll animation
    var t = Math.min(1, (now - startTime) / duration);
    // Calculate the animation curve
    var animation =
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    // Calculate the new position
    var movement = animation * (destination - start) + start;
    body.scrollTop = movement;
    if (body.scrollTop === destination) {
      return;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
