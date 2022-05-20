// galary-carousel
$(document).ready(function () {
  $(".ihsdc-galary-carousel").owlCarousel();
});

$(".ihsdc-galary-carousel").owlCarousel({
  items: 8,
  loop: true,
  nav: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
  smartSpeed: 2000,
  autoplayHoverPause: false,
  responsiveClass: true,
  //   margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    324: {
      items: 1,
      nav: false,
    },
    524: {
      items: 1,
      nav: false,
    },
    824: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  },
});

// response carousel
$(document).ready(function () {
  $(".ihsdc-response-carousel").owlCarousel();
});

$(".ihsdc-response-carousel").owlCarousel({
  items: 6,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2500,
  smartSpeed: 2000,
  autoplayHoverPause: true,
  responsiveClass: true,
  //   margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    324: {
      items: 1,
    },
    524: {
      items: 1,
    },
    824: {
      items: 2,
    },
    1024: {
      items: 2,
    },
  },
});

// ===== Scroll to Top ====
var btn = $('#button');

$(window).scroll(function() {
 if ($(window).scrollTop() > 280) {
 btn.addClass('show');
 } else {
 btn.removeClass('show');
 }
});
btn.on('click', function(e) {
 e.preventDefault();
 $('html, body').animate({scrollTop:0}, '300');
});