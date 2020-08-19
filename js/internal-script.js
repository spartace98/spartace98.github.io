// Sidenav
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav, {
onOpenStart: true,
});

// Slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
indicators: false,
height: 600,
transition: 500,
interval: 6000,
});

// Scrollspy
const scrollspy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollspy, {
    scrollOffset: 100,
});

// collapsible
const collapsible = document.querySelectorAll(".collapsible");
M.Collapsible.init(collapsible, {});
$("[data-click]").on("click", function (e) {
$($(this).attr("href")).trigger("click");
});

// Modal
const modal = document.querySelectorAll(".modal");
M.Modal.init(modal, {});

// Material Boxed
const materialboxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialboxed, {});

// Carousel
const carousel = document.querySelectorAll(".carousel");
M.Carousel.init(carousel, {
fullWidth: true,
indicators: true,
});

// Tap-target
const tap_target = document.querySelectorAll(".tap-target");
M.TapTarget.init(tap_target, {});