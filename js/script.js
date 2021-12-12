document.addEventListener("DOMContentLoaded", function () {
  //initializing animation with scrool
  AOS.init({
    duration: 1000,
  });

  //----------typer setting

  var Typeoptions = {
    strings: [
      "a Mobile Developer using Flutter.^2000",
      "a junior web developer.^1000",
    ],
    typeSpeed: 100,
    loop: true,
  };

  var typed = new Typed("#identity", Typeoptions);

  //tilt setting -----------------
  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.5,
    reset: false,
  });
});

var com = document.querySelector(".communication");
var communication = document.querySelector(".fab-container");

function activateHover() {
  communication.classList.toggle("touchmobile");
}
