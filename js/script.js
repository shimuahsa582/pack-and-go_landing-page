// navbar active menu code
var btnContainer = document.getElementById("myDIV");
var navLink = btnContainer.getElementsByClassName("nav-link");

for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// popular part ar slider add
$('.popularSliderPart').slick({
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '300px',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
////////////////// Travel part ar counter added code ////////////////
$('.travelPrice').counterUp({
  delay: 10,
  time: 1000
});