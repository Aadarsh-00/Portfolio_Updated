console.log("GSAP loaded?", typeof gsap !== "undefined");

document.fonts.ready.then(() => {
  gsap.from(".arrow-tip-text", {
    y: -650,
    // opacity: 1,
    // scale: 0.5,
    duration: 2,
    ease: "power3.out",
    delay: 1.8 // holds for 2 seconds before starting
  });

  // Animate arrow-4 like arrows 1, 2, 3
  var arrow4 = document.querySelector('.arrow-4');
  if (arrow4) {
    arrow4.querySelectorAll('path').forEach(function(path) {
      gsap.fromTo(path, {
        strokeDasharray: path.getTotalLength ? path.getTotalLength() : 900,
        strokeDashoffset: path.getTotalLength ? path.getTotalLength() : 900
      }, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        delay: 2
      });
    });
    arrow4.querySelectorAll('.arrow-head').forEach(function(head) {
      gsap.fromTo(head, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.6,
        delay: 3
      });
    });
  }

  // Animate arrow-3 like arrow-2
  var arrow3 = document.querySelector('.arrow-3');
  if (arrow3) {
    arrow3.querySelectorAll('path').forEach(function(path) {
      gsap.fromTo(path, {
        strokeDasharray: path.getTotalLength ? path.getTotalLength() : 900,
        strokeDashoffset: path.getTotalLength ? path.getTotalLength() : 900
      }, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        delay: 2
      });
    });
    arrow3.querySelectorAll('.arrow-head').forEach(function(head) {
      gsap.fromTo(head, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.6,
        delay: 3
      });
    });
  }

  // Animate all red arrows (draw path and fade in heads)
  gsap.utils.toArray('.red-arrow').forEach(function(svg) {
    // Animate all <path> elements inside .red-arrow
    svg.querySelectorAll('path').forEach(function(path) {
      // Only animate if it's not a marker/arrow-head (those have stroke-width 3 or 2)
      gsap.fromTo(path, {
        strokeDasharray: path.getTotalLength ? path.getTotalLength() : 900,
        strokeDashoffset: path.getTotalLength ? path.getTotalLength() : 900
      }, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        delay: 2
      });
    });
    // Animate arrow-heads (if present)
    svg.querySelectorAll('.arrow-head').forEach(function(head) {
      gsap.fromTo(head, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.6,
        delay: 3
      });
    });
  });
});


window.addEventListener("DOMContentLoaded", () => {
gsap.fromTo(".pfp", 
  { y: 550, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1.6, ease: "power3.out" }
);

  // Scroll to tech-stack-wrapper when 'Languages I tame' is clicked
  const langText = document.querySelector('.text3');
  const techStack = document.querySelector('.tech-stack-wrapper');
  if (langText && techStack) {
    langText.style.cursor = 'pointer';
    langText.addEventListener('click', function() {
      techStack.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
gsap.set(".logo", { y: 0 });
gsap.to(".shake",
  {
    rotation: 4,
    duration: 1.6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: 1.8 // holds for 2 seconds before starting
  }
);

//Tech Stack scroll animation
window.addEventListener("scroll", () => {
  const techStack = document.querySelector('.tech-stack-wrapper');
  const hero = document.querySelector('.hero-wrapper');
  if (!techStack || !hero) return;
  const techRect = techStack.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.7;
  if (techRect.top < triggerPoint) {
    // Animate hero out, tech stack in
    gsap.to(hero, { opacity: 0, duration: 0.8, ease: "power2.inOut" });
    gsap.to(techStack, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" });
  } else {
    // Reset if scrolled back up
    gsap.to(hero, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
    gsap.to(techStack, { opacity: 0, x: window.innerWidth, duration: 1.2, ease: "power2.in" });
  }
});
