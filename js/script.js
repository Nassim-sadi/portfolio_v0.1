document.addEventListener("DOMContentLoaded", function () {
  //initializing animation with scrool
  AOS.init({
    duration: 1000,
  });

  //----------typer setting

  var Typeoptions = {
    strings: ["i'm a Mobile Developer .^2000", "i'm a Web Developer .^1000"],
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
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("com_animation");
    console.log(entry.target);
  });
}, options);
//observer.observe(com);
var communication = document.querySelector(".fab-container");
function activateHover() {
  if (communication.classList.contains("fab-hover")) {
    communication.classList.remove("fab-hover");
  } else {
    communication.classList.add("fab-hover");
  }
}
