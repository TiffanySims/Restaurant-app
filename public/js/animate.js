//Scroll animations //

$(document).ready(function () {
  $(".js-scroll-menu").click(function () {
    $("html,body").animate({ scrollTop: $(".js-menu").offset().top }, 1000);
  });

  $(".js-scroll-about").click(function () {
    $("html,body").animate({ scrollTop: $(".js-about").offset().top }, 1000);
  });

  $(".js-scroll-special").click(function () {
    $("html,body").animate({ scrollTop: $(".js-special").offset().top }, 1000);
  });

  $(".js-scroll-testimonies").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js-testimonies").offset().top },
      1000
    );
  });

  // Animations //
  $(".js-wp-1").waypoint(
    function (direction) {
      $(".js-wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js-wp-2").waypoint(
    function (direction) {
      $(".js-wp-2").addClass("animated rotateIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js-wp-3").waypoint(
    function (direction) {
      $(".js-wp-3").addClass("animated slideInLeft");
    },
    {
      offset: "50%",
    }
  );
  $(".js-wp-4").waypoint(
    function (direction) {
      $(".js-wp-4").addClass("animated rotateIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js-wp-5").waypoint(
    function (direction) {
      $(".js-wp-5").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js-wp-6").waypoint(
    function (direction) {
      $(".js-wp-6").addClass("animated slideInRight");
    },
    {
      offset: "50%",
    }
  );
  $(".js-wp-7").waypoint(
    function (direction) {
      $(".js-wp-7").addClass("animated rotateIn");
    },
    {
      offset: "50%",
    }
  );

  //Menu animation //

  $(".show_dinner").click(function () {
    $(".dinner").fadeIn().css("display", "grid");
    $(".desserts").hide();
    $(".drinks").hide();
  });
  $(".show_drinks").click(function () {
    $(".dinner").hide();
    $(".desserts").hide();
    $(".drinks").fadeIn().css("display", "grid");
  });

  $(".show_desserts").click(function () {
    $(".dinner").hide();
    $(".desserts").fadeIn().css("display", "grid");
    $(".drinks").hide();
  });
});

// Testimony slider //

const testimonies = [
  { quote: "One of the few places I trust to make my food", cite: "Kelly D" },
  { quote: "Every dish is cutomizable and I love that", cite: "Chrissy K" },
  { quote: "Number one on my list whenever I'm in town", cite: "Joey H" },
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
  document.querySelectorAll(".circle").forEach((circle) => {
    if (circle.classList.contains("circle-active")) {
      circle.classList.remove("circle-active");
    }
    if (circle.classList.contains(`circle-${i}`)) {
      circle.classList.add("circle-active");
    }
  });
}, 3000);

// Hero background image slider//
const imageGallery = ["b1.jpg", "b2.jpg", "b3.jpg", "b0.jpg"];
let count = 0;
const image = document.querySelector(".hero__container--right");
setInterval(() => {
  document.querySelectorAll(".image__gallery--circle").forEach((item) => {
    item.classList.remove("activeClass");
  });
  image.style.backgroundImage = `url(img/${imageGallery[count]})`;

  document.querySelector(`.circle${count}`).classList.add("activeClass");

  if (count === 3) {
    count = 0;
  } else {
    count++;
  }
}, 3500);

const slideBack = document.querySelector(".slide__back");
const slideForward = document.querySelector(".slide__forward");

slideBack.addEventListener("click", () => {
  document.querySelectorAll(".image__gallery--circle").forEach((item) => {
    item.classList.remove("activeClass");
  });
  if (count === 0) {
    count = 3;
  } else {
    count--;
  }
  document.querySelector(`.circle${count}`).classList.add("activeClass");

  image.style.backgroundImage = `url(../public/img/${imageGallery[count]})`;
});
slideForward.addEventListener("click", () => {
  document.querySelectorAll(".image__gallery--circle").forEach((item) => {
    item.classList.remove("activeClass");
  });
  if (count === 3) {
    count = 0;
  } else {
    count++;
  }
  document.querySelector(`.circle${count}`).classList.add("activeClass");

  image.style.backgroundImage = `url(../public/img/${imageGallery[count]})`;
});
