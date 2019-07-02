$(document).ready(function() {
  $(".menu").click(function() {
    $(".overlay").fadeIn();
    $(".image").each(function(index) {
      $(this)
        .delay(400 * index)
        .slideDown("slow");
    });
    $(".mobile-nav li")
      .delay(1200)
      .each(function(index) {
        $(this)
          .delay(400 * index)
          .slideDown("slow");
      });
  });
  $(".close").click(function() {
    $(".overlay").fadeOut();
    $(".image").fadeOut();
    $(".mobile-nav li").fadeOut();
  });
});
