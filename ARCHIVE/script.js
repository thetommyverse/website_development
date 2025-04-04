// ! Scripting for the fading tabs on the top of the page
// ! ----------------------------------------------------

function openTab (evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName ('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName ('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace (' active', '');
  }
  document.getElementById (tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// ! ----------------------------------------------------

//! Scripting for the Image Gallery
// ! ----------------------------------------------------

// Next/previous controls
function plusSlides (n) {
  showSlides ((slideIndex += n));
}

// Thumbnail image controls
function currentSlide (n) {
  showSlides ((slideIndex = n));
}

function showSlides (n) {
  let i;
  let slides = document.getElementsByClassName ('mySlides');
  let dots = document.getElementsByClassName ('demo');
  let captionText = document.getElementById ('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace (' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// ! ----------------------------------------------------

// ! Dark Mode Toggle Script

function toggleDarkMode () {
  var element = document.body;
  element.classList.toggle ('dark-mode');
}

// ! ----------------------------------------------------

// ! Scripting for the blog page (filtering)
function filterSelection (c) {
  var x, i;
  x = document.getElementsByClassName ('blog_column');
  if (c == 'all') c = '';
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass (x[i], 'show');
    if (x[i].className.indexOf (c) > -1) w3AddClass (x[i], 'show');
  }
}

// Show filtered elements
function w3AddClass (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split (' ');
  arr2 = name.split (' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf (arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split (' ');
  arr2 = name.split (' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf (arr2[i]) > -1) {
      arr1.splice (arr1.indexOf (arr2[i]), 1);
    }
  }
  element.className = arr1.join (' ');
}


function openBlogPage(specified_page) {
  if (specified_page == 'sample_page') {
    window.location.href = 'blog/sample_blog_page.html';
  }
  if (specified_page == 'sample_page_2') {
  window.location.href = 'blog/sample_blog_page_2.html';
  }

  if (specified_page == 'hello_world') {
  window.location.href = 'blog/hello-world.html';
}

}

// ! Booking Page / Section Styling
// ! ----------------------------------------------------

var currentDateTime = new Date ();
var year = currentDateTime.getFullYear ();
var month = currentDateTime.getMonth () + 1;
var date = currentDateTime.getDate () + 1;

if (date < 10) {
  date = '0' + date;
}
if (month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + '-' + month + '-' + date;
var eventDateElem = document.querySelector ('#event-date');

eventDateElem.setAttribute ('min', dateTomorrow);

eventDateElem.onchange = function () {
  eventDateElem.setAttribute ('min', this.value);
};

// ! ----------------------------------------------------
// ! Video Image Gallery Scripting
// ! ----------------------------------------------------

function myFunction (imgs) {
  // Get the expanded image
  var expandImg = document.getElementById ('expandedImg');
  // Get the image text
  var imgText = document.getElementById ('imgtext');
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = 'block';
}









