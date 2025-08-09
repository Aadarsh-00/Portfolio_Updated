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
});


window.addEventListener("DOMContentLoaded", () => {
gsap.fromTo(".pfp", 
  { y: 550, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1.6, ease: "power3.out" }
);
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
