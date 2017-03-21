$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initial-hidden").show();
    $(".initial-showing").hide();
  });
});

$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  // $(".initial-hidden").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("initial-hidden");
  // });
});
