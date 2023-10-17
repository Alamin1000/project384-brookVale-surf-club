// sticky-menu
var wind = $(window);
var sticky = $(".header-area");
wind.on("scroll", function () {
  var scroll = wind.scrollTop();
  if (scroll < 5) {
    sticky.removeClass("sticky");
  } else {
    sticky.addClass("sticky");
  }
});
$(window).on("load resize", function () {
  $("body").css("--header-height", $(".header-area").outerHeight() + "px");
});

// OFFSET MENU
const offsetSide = document.querySelectorAll(".offset-sidebar");
offsetSide.forEach((offset) => {
  let trigger = document.querySelectorAll(".menu-trigger");
  trigger.forEach((btn) => {
    btn.addEventListener("click", () => {
      offset.classList.toggle("active");
    });
  });

  window.addEventListener("click", (e) => {
    if (
      !e.target.closest(".offset-sidebar") &&
      !e.target.closest(".menu-trigger")
    ) {
      offset.classList.remove("active");
    }
  });
});

// slider animation
const heroWrapper = document.querySelectorAll(".hero-slide");
heroWrapper.forEach((wrap) => {
  let content = wrap.querySelector(".hero-content");
  let top;

  window.addEventListener("scroll", (e) => {
    top = wrap.getBoundingClientRect().top;
    let moveSpace =
      (top + window.innerHeight / 2 - content.clientHeight / 2) * -1;
    content.style.transform = `translateY(${moveSpace}px)`;
  });
});

// simpleParallax
new simpleParallax(document.querySelectorAll(".bg-parallax img"));

// slide overlay animation
const slideOverlay = document.querySelectorAll(".slide-overlay");
slideOverlay.forEach((overlay) => {
  window.addEventListener("load", () => {
    overlay.classList.add("hide");
  });
});
