/*
//Hero sliders
var sliders__holder = document.querySelector('.sliders__holder');
var all_sliders = sliders__holder.getElementsByClassName('hero_item');
var last_slide = all_sliders[all_sliders.length - 1];

// var sliders__holder = document.getElementById('sliders__holder');
// var last_slide = sliders__holder.getElementsByClassName('pane');
// last_slide = last_slide[last_slide.length - 1];
var dummy_x = null;

window.onscroll = function() {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  sliders__holder.scrollLeft = -y;

  var x = document.body.getBoundingClientRect().right;
  sliders__holder.scrollLeft = -x;

  // Looping Scroll.
  var diff = window.scrollY - dummy_x;
  if (diff > 0) {
    window.scrollTo(0, diff);
  } else if (window.scrollY == 0) {
    window.scrollTo(0, dummy_x);
  };
  
};
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = sliders__holder.scrollWidth - window.innerWidth + window.innerHeight;
  document.body.style.height = w + 'px';

  dummy_x = last_slide.getBoundingClientRect().left + window.scrollY;
}
*/

// Upcoming events sliders
var initialScrollLeft = 0;

var upcomingEventsTab = document.querySelectorAll(
  '.upcoming_events__holder'
)[0];
var upcomingEventsLeftBtn = document.querySelectorAll(
  '#upcomingEventsLeftBtn'
)[0];
var upcomingEventsRightBtn = document.querySelectorAll(
  '#upcomingEventsRightBtn'
)[0];
upcomingEventsLeftBtn.addEventListener('click', e => {
  initialScrollLeft = initialScrollLeft - 300;
  upcomingEventsTab.scrollLeft = initialScrollLeft;
});

upcomingEventsRightBtn.addEventListener('click', e => {
  initialScrollLeft = initialScrollLeft + 300;
  upcomingEventsTab.scrollLeft = initialScrollLeft;
});


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} 