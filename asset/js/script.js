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
    opacity: 1,
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
  gsap.registerPlugin(ScrollTrigger);

  // Typewriter effect animation
  gsap.fromTo(
    ".about_me p",
    {
      width: "0", // Start with zero width
    },
    {
      width: "100%", // Expand to full width
      duration: 2, // Adjust typing duration
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".about", // Trigger animation when the About section is in view
        start: "top 80%", // Trigger starts when the top of the section is 80% visible
        toggleActions: "play none none none", // Play animation once
      },
    }
  );
   
    // Animate the project images
    gsap.from(".myprojects li", {
        y: 100, // Slide in from below
        opacity: 0, // Start fully transparent
        duration: 1, // Animation duration
        stagger: 0.3, // Delay between animations for each list item
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: ".myworks", // Start animation when this section comes into view
          start: "top 80%", // Trigger when top of the section is 80% visible
          toggleActions: "play none none none", // Play animation once
        },
      });
  
  
})