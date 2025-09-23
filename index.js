
  const text = "I'm Dinosh";
  const animatedName = document.getElementById("animated-name");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      animatedName.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 150); // typing speed (ms)
    }
  }

  // Run on page load
  window.onload = typeEffect;

