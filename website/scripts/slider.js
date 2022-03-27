$(document).ready(function () {
   $('.slider').slick({
      arrows:true,
      dots:true,
      easing:'ease',
      autoplay:true,
      autoplaySpeed:4000,
      fade:true,
      draggable:false,
      appendArrows:$('.slider_section .container'),
      appendDots:$('.slider_section .container')
   })
});