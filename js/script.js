document.addEventListener("DOMContentLoaded", function () {
  //initializing animation with scrool
  AOS.init({
    duration: 1000,
  });

  //----------typer setting

  var Typeoptions = {
    strings: ["a Mobile Developer.^2000", "a Web Developer.^1000"],
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
const options = {
  root: null,
  threshold: 1,
};
var communication = document.querySelector(".fab-container");
// function activateHover() {
//   communication.classList.add("touchmobile");

//   console.log("toggled somehow");
//   $(document).on("click", function (e) {
//     if ($(e.target).is(".fab-container .touchmobile") === false) {
//       $(".fab-container").removeClass("touchmobile");
//       console.log("did it again hah fuck you ");
//     }
//   });
// }
function activateHover() {
  $(".fab-container").on("click", function (e) {
    $(".fab-container").toggleClass("touchmobile");
  });
  $(document).on("click", function (e) {
    if ($(e.target).is("#contact-me") === false) {
      $(".fab-container").removeClass("touchmobile");
    }
  });
}

// $("body")
//   .not("#contact-me")
//   .click(function (e) {
//     $(".fab-container").removeClass("touchmobile");
//     console.log("removed class :v");
//   });
