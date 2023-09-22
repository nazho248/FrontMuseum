$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".card").toggleClass("active");
  });

  $(".icon.close").click(function () {
    $("#nav-icon").toggleClass("open");
    $(".card").toggleClass("active");
  });
});
