// Get the navigation element
const nav = document.getElementById('nav');

// Get the original offset position of the navbar
const sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
    stickyNav();
};