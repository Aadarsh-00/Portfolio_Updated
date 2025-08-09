const greetings = ["नमस्ते", "Hello", "Bonjour", "こんにちは", "Hola", "Ciao", "안녕하세요"];
document.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.querySelector(".greetings");
  const preloader = document.querySelector(".preloader");
  let index = 0;

  function showGreeting() {
    greetingEl.style.opacity = 0;
    setTimeout(() => {
      greetingEl.textContent = greetings[index];
      greetingEl.style.opacity = 1;
      index++;
      if (index < greetings.length) {
        setTimeout(showGreeting, 300);
      } else {
        setTimeout(() => {
          if (preloader) preloader.style.display = "none";
          window.location.href = "index.html";
        }, 200);
      }
    }, 100);
  }

  if (greetingEl && preloader) {
    preloader.style.display = "flex";
    showGreeting();
  }
});

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("slideOut");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000); 
},1500); 