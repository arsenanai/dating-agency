


window.addEventListener('scroll', function(){
  var el = document.getElementById("photos-row");
  //console.log(el.offsetHeight);
  var viewportOffset = el.getBoundingClientRect();
  var y = viewportOffset.bottom;
  var h = el.offsetHeight;
  console.log("top", y);
  if(y+56<0 && y+56>h*(-1)){
    var x = (-1)*(y+56);

  }
  //console.log("top: "+y);
});

(function($) {
  "use strict"; // Start of use strict

  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 100
  });

  // Scroll to top button appear
  /*$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });*/

  // Closes responsive menu when a scroll trigger link is clicked
  

  // Activate scrollspy to add active class to navbar items on scroll
  

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($(".navbar").offset().top > 100) {
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").removeClass("bg-custom");
      $(".navbar").addClass("navbar-light");
      $(".navbar").addClass("navbar-shrink");
      $(".navbar").addClass("bg-light");
      $(".navbar").addClass("permanent-shadow");
    } else {
      $(".navbar").removeClass("navbar-light");
      $(".navbar").removeClass("navbar-shrink");
      $(".navbar").removeClass("bg-light");
      $(".navbar").removeClass("permanent-shadow");
      $(".navbar").addClass("navbar-dark");
      $(".navbar").addClass("bg-custom");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

var app = new Vue({
  el: '#app',
  data: {
    
  },
  methods:{
    currentYear: function(){
      return new Date().getFullYear();
    }
  },
})