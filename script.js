// Scroll smoothly to the different sections
new SmoothScroll('a[href*="#"]');

// Activate the "click to copy" buttons
var clipboard = new ClipboardJS('.button-copy');
clipboard.on('success', function(event) {
  var button = event.trigger;
  button.innerText = "Copied!";
  
  button.addEventListener("mouseout", function(event) {
    button.innerText = "Copy hex";
  });
});

// Dynamically change the font size of the text-sizes example
var textSizeInput = document.querySelector('#text-size-adjust input');
var textSizeOutput = document.querySelector('#text-size-adjust output');

textSizeInput.addEventListener('input', function(event) {
  textSizeOutput.innerText = event.target.value;
  document.body.style.setProperty('--text-size-demo', event.target.value + 'px');
});


// Dynamically change the color of the logo
var logoColorInputs = document.querySelectorAll('#logo-color-switcher input');
logoColorInputs.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var color = event.target.value;
    var colorVar = 'var(--' + color + ')';
    document.body.style.setProperty('--logo-fill', colorVar);
  });
});
