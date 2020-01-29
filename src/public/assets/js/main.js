$(document).ready(() => {
  // Navbar Hover dropdown
  $('nav li.dropdown').hover(
    function() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(100)
        .fadeIn(100);
    },
    function() {
      $(this)
        .find('.dropdown-menu')
        .stop(true, true)
        .delay(100)
        .fadeOut(100);
    }
  );
  // show the alert
  setTimeout(function() {
    $('.alert').alert('close');
  }, 60000);
});