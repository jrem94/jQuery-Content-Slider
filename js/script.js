$(document).ready(() => {
  const speed = 500;
  const autoswitchSpeed = 4000;
  let autoswitch = true;

  $(".slide")
    .first()
    .addClass("active");

  $(".slide").hide();

  $(".active").show();

  $("#next").on("click", nextSlide);

  $("#previous").on("click", prevSlide);

  if (autoswitch === true) {
    setInterval(nextSlide, autoswitchSpeed);
  }

  function nextSlide() {
    $(".active")
      .removeClass("active")
      .addClass("oldActive");
    if ($(".oldActive").is(":last-child")) {
      $(".slide")
        .first()
        .addClass("active");
    } else {
      $(".oldActive")
        .next()
        .addClass("active");
    }

    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }

  function prevSlide() {
    $(".active")
      .removeClass("active")
      .addClass("oldActive");
    if ($(".oldActive").is(":first-child")) {
      $(".slide")
        .last()
        .addClass("active");
    } else {
      $(".oldActive")
        .prev()
        .addClass("active");
    }

    $(".oldActive").removeClass("oldActive");
    $(".slide").fadeOut(speed);
    $(".active").fadeIn(speed);
  }
});
