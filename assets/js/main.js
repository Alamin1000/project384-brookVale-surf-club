const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
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
