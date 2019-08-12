/**
 * ScrollPersist Framework
 * Begin reading you favourite post
 * from where you left even after closing
 * your browser.
 *
 * @version 1.0.0
 * @author  Yash Gupta
 * @license MIT
 *
 * **/

// Event triggers everytime user's scroll offsets.
window.addEventListener('scroll', () => {
  // Creating an array of scroll positions
  let offset = [window.pageXOffset, window.pageYOffset];

  // Stringifying it to store in Local Storage
  let offsetStr = JSON.stringify(offset);

  // Key of Local Storage which is unique for each page
  let key = document.URL;

  // Set the page position in local storage
  localStorage.setItem(key, offsetStr);
});

// When the webpage is re-opened/refreshed trigger these events
document.addEventListener('DOMContentLoaded', () => {
  // Get the last time offsets from LS
  let newOffset = localStorage.getItem(document.URL);

  // Convert those offsets to Arrays
  let newOffsetArr = JSON.parse(newOffset);

  // Set the new scroll values
  window.scrollTo(newOffsetArr[0], newOffsetArr[1]);
});
