$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50){
            $("header").addClass("active");
        }
        else{
            $("header").removeClass("active");
        }
    })

    //GSAP
      // Fade-in animation for the text elements
  gsap.from(".banner-content h1", {
    opacity: 0,
    duration: 1.5,
    y: 50,
    delay: 0.5
  });

  gsap.from(".names", {
    opacity: 0,
    duration: 1.5,
    x: -50,
    delay: 1
  });

  gsap.from(".contactme", {
    opacity: 0,
    duration: 1.5,
    y: 30,
    delay: 1.5
  });

  // Slide-in animation for the profile image
  gsap.from(".banner-image img", {
    opacity: 0,
    duration: 1,
    x: -200,
    ease: "power2.out",
    delay: 0.5
  });

  // Hover animation for the "Contact Me" button
  gsap.to(".contactme", {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    repeat: -1,
    yoyo: true,
    ease: "ease-in-out"
  });

  
  
  
})