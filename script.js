new SmoothScroll('a[href*="#"]');

var textSizeInput = document.querySelector("#text-size-adjust input");
var textSizeOutput = document.querySelector("#text-size-adjust output");

textSizeInput.addEventListener("input", function(event) {
  textSizeOutput.innerText = event.target.value;
  document.body.style.setProperty("--text-size-demo", event.target.value + "px");
});
