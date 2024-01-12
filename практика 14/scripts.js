// Get the #contents element
var contentsElement = document.getElementById('contents');

// Add a click event listener to the #contents element
contentsElement.addEventListener('click', function(event) {
  // Check if the event target is a link
  if (event.target.tagName === 'A') {
    // Ask the user if they really want to leave the page
    var userConfirmation = confirm('Do you really want to leave the page?');

    // If the user does not want to leave, prevent the link's default action
    if (!userConfirmation) {
      event.preventDefault();
    }
  }
});


// Get the #contents element
var contentsElement = document.getElementById('contents');

// Assign new content to the element
contentsElement.innerHTML = '<a href="https://example.com">Example Link</a>';



