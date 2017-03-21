$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").slideToggle();
  });
});
