$(document).ready(function() {
  document.querySelector(".reservations__btn").addEventListener("click", () => {
    alert("We apologize, we are not taking reservations at this time.");
  });

  $(".js-scroll-menu").click(function() {
    $("html,body").animate({ scrollTop: $(".js-menu").offset().top }, 1000);
  });

  $(".js-scroll-about").click(function() {
    $("html,body").animate({ scrollTop: $(".js-about").offset().top }, 1000);
  });

  $(".js-scroll-special").click(function() {
    $("html,body").animate({ scrollTop: $(".js-special").offset().top }, 1000);
  });

  $(".js-scroll-locations").click(function() {
    $("html,body").animate({ scrollTop: $(".js-location").offset().top }, 1000);
  });

  $(".js-scroll-reservations").click(function() {
    $("html,body").animate(
      { scrollTop: $(".js-reservations").offset().top },
      1000
    );
  });

  $(".js-wp-1").waypoint(
    function(direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated slideUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js-wp-2").waypoint(
    function(direction) {
      $(".js-wp-2").addClass("animated slideUp");
    },
    {
      offset: "50%"
    }
  );

  $(".icon").click(function() {
    var nav = $(".nav");
    var icon = $(".icon");

    nav.slideToggle(400);

    if (icon.hasClass("icon-menu")) {
      icon.text("close");
      icon.addClass("icon-cross");
      icon.removeClass("icon-menu");
    } else {
      icon.text("Menu");
      icon.addClass("icon-menu");
      icon.removeClass("icon-cross");
    }
  });

  $(".show_dinner").click(function() {
    $(".dinner")
      .fadeIn()
      .css("display", "grid");
    $(".desserts").hide();
    $(".drinks").hide();
  });
  $(".show_drinks").click(function() {
    $(".dinner").hide();
    $(".desserts").hide();
    $(".drinks")
      .fadeIn()
      .css("display", "grid");
  });

  $(".show_desserts").click(function() {
    $(".dinner").hide();
    $(".desserts")
      .fadeIn()
      .css("display", "grid");
    $(".drinks").hide();
  });
});

const testimonies = [
  { quote: "The best Italian Restaurant in Chicago!", cite: "Kelly D" },
  { quote: "5-stars", cite: "Mike B" },
  { quote: "Number one on my list whenever I'm in town", cite: "Joey H" }
];

let i = 0;
setInterval(() => {
  document.querySelector(
    ".testimonies"
  ).innerHTML = `<blockquote>&quot; ${testimonies[i].quote}&quot;</blockquote><cite>~ ${testimonies[i].cite}</cite>`;
  if (i >= testimonies.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.querySelectorAll(".circle").forEach(circle => {
    if (circle.classList.contains("circle-active")) {
      circle.classList.remove("circle-active");
    }
    if (circle.classList.contains(`circle-${i}`)) {
      circle.classList.add("circle-active");
    }
  });
}, 3000);

document.querySelectorAll(".popup__order").forEach(pop => {
  pop.addEventListener("click", () => {
    let popup = document.querySelector(".popup");
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  let popup = document.querySelector(".popup");
  popup.style.visibility = "hidden";
  popup.style.opacity = 0;
});
