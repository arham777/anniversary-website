document.addEventListener("DOMContentLoaded", function() {
    /* ---------- Animated Greeting Messages ---------- */
    const greetings = [
      "Happy Anniversary Begum Sahiba G😚",
      "You Complete Me!",
      "Forever Together ❤️"
    ];
    let greetingIndex = 0;
    const greetingElement = document.getElementById("greeting-message");
    setInterval(() => {
      greetingIndex = (greetingIndex + 1) % greetings.length;
      greetingElement.textContent = greetings[greetingIndex];
    }, 4000); // Rotate every 4 seconds
  
    /* ---------- Love Quotes Carousel ---------- */
    const quotes = [
      "\"Love is composed of a single soul inhabiting two bodies.\" - Aristotle",
      "\"I love you not only for what you are, but for what I am when I am with you.\" - Roy Croft",
      "\"In all the world, there is no heart for me like yours.\" - Maya Angelou"
    ];
    let quoteIndex = 0;
    const quoteElement = document.querySelector("#quotes-carousel .quote");
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteElement.textContent = quotes[quoteIndex];
    }, 4000);
  
    /* ---------- Autoplay Fix ---------- */
    const bgMusic = document.getElementById("bg-music");
    const video = document.querySelector("video");
    const muteBtn = document.getElementById("mute-btn");
    
    // Try to play the audio and video immediately
    try {
      // For the background music
      bgMusic.play().then(() => {
        console.log("Background music started successfully");
      }).catch(error => {
        console.log("Autoplay prevented by browser:", error);
        // Music will be enabled after user interaction
      });
      
      // For the video
      video.play().then(() => {
        console.log("Video started successfully");
      }).catch(error => {
        console.log("Video autoplay prevented:", error);
        // Video will be enabled after user interaction
      });
    } catch (e) {
      console.log("Error attempting to play media:", e);
    }
    
    // Function to unmute both audio and video after user interaction
    function enableMedia() {
      bgMusic.muted = false;
      video.muted = false;
      
      // Try to play again after user interaction
      bgMusic.play().catch(e => console.log("Still couldn't play audio:", e));
      video.play().catch(e => console.log("Still couldn't play video:", e));
      
      muteBtn.textContent = "Mute Music";
      document.removeEventListener("click", enableMedia);
    }
    
    // Listen for the first user interaction
    document.addEventListener("click", enableMedia);
  
    /* ---------- Background Music Mute/Unmute ---------- */
    muteBtn.addEventListener("click", function() {
      if (bgMusic.paused) {
        // If music is paused, play it
        bgMusic.play()
          .then(() => {
            bgMusic.muted = false;
            muteBtn.textContent = "Mute Music";
          })
          .catch(error => {
            console.log("Couldn't play music:", error);
          });
      } else if (bgMusic.muted) {
        // If music is playing but muted, unmute it
        bgMusic.muted = false;
        muteBtn.textContent = "Mute Music";
      } else {
        // If music is playing and not muted, mute it
        bgMusic.muted = true;
        muteBtn.textContent = "Unmute Music";
      }
    });
  
    /* ---------- Mobile Optimization ---------- */
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  
    /* ---------- Confetti Effect ---------- */
    function createConfetti() {
      const confettiContainer = document.getElementById("confetti-container");
      // Reduce confetti count on mobile for better performance
      const confettiCount = isMobile ? 40 : 100;
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confettiContainer.appendChild(confetti);
      }
    }
    createConfetti();
  
    /* ---------- Floating Hearts ---------- */
    function createHeart() {
      const heartContainer = document.getElementById("heart-container");
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      // Adjust heart size based on device
      heart.style.fontSize = isMobile ? 
        (Math.random() * 10 + 14) + "px" : 
        (Math.random() * 20 + 20) + "px";
      heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
      heartContainer.appendChild(heart);
      
      // Reduce heart lifetime on mobile for better performance
      const heartLifetime = isMobile ? 5000 : 7000;
      setTimeout(() => heart.remove(), heartLifetime);
    }
  
    // Reduce heart creation frequency on mobile
    const heartInterval = isMobile ? 800 : 500;
    setInterval(createHeart, heartInterval);
  
    /* ---------- Surprise Button Navigation ---------- */
    const revealBtn = document.getElementById("reveal-btn");
    revealBtn.addEventListener("click", function() {
      window.location.href = "./surprise.html";
    });
  
    /* ---------- Typewriter Effect for a Heartfelt Letter ---------- */
    const typewriterText = "My dearest love, every moment with you is a treasure. Thank you for filling my life with joy and endless love. Happy anniversary and here's to many more beautiful memories together.";
    const typewriterElement = document.getElementById("typewriter");
    let charIndex = 0;
    function typeWriter() {
      if (charIndex < typewriterText.length) {
        // Reset white-space property to allow text wrapping
        typewriterElement.style.whiteSpace = "normal";
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        console.log(`Character added: ${typewriterText.charAt(charIndex)}`);
        charIndex++;
        setTimeout(typeWriter, 50); // Adjust typing speed as needed
      } else {
        console.log("Completed typing. Restarting in 5 seconds.");
        setTimeout(() => {
          typewriterElement.textContent = "";
          charIndex = 0;
          typeWriter();
        }, 5000); // Restart after 5 seconds
      }
    }
    typeWriter();
  
    /* ---------- Gallery Modal for Images ---------- */
    const galleryItems = document.querySelectorAll(".gallery-item img");
    galleryItems.forEach(item => {
      item.addEventListener("click", function() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `<span class="close">&times;</span><img src="${item.src}" alt="${item.alt}">`;
        document.body.appendChild(modal);
        modal.querySelector(".close").addEventListener("click", function() {
          modal.remove();
        });
      });
    });
  
    /* ---------- Virtual Bouquet Reveal ---------- */
    const bouquetBtn = document.getElementById("bouquet-btn");
    const bouquetDisplay = document.getElementById("bouquet-display");
    const bouquetImage = document.getElementById('bouquet-image');
    const bouquetSection = document.querySelector('.bouquet-section');
  
    // Update the bouquet button click handler
    bouquetBtn.addEventListener("click", function() {
      // Scroll to the bouquet section to trigger the animation
      bouquetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Force the animation if already in view
      setTimeout(() => {
        bouquetSection.classList.add('in-view');
        bouquetImage.classList.add('show');
      }, 500);
    });
  
    // Remove the original toggle function since we're using scroll-based animation
    const bouquetHeading = document.querySelector('.bouquet-section button');
  
    /* ---------- Memories Slideshow ---------- */
    let slideIndex = 0;
    const slides = document.getElementsByClassName("memory-slide");
    const dots = document.getElementsByClassName("dot");
  
    // Show slides automatically
    function showSlides() {
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot");
        slides[i].classList.remove("active-slide");
      }
      
      // Move to the next slide
      slideIndex++;
      
      // Reset to first slide if at the end
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      
      // Display the current slide and highlight its dot
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active-dot");
      slides[slideIndex - 1].classList.add("active-slide");
      
      // Change slide every 3 seconds
      setTimeout(showSlides, 3000);
    }
  
    // Function to manually control slides
    window.currentSlide = function(n) {
      // Reset the automatic slideshow timer
      clearTimeout(window.slideshowTimeout);
      
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active-dot");
        slides[i].classList.remove("active-slide");
      }
      
      // Show the selected slide
      slideIndex = n;
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active-dot");
      slides[slideIndex - 1].classList.add("active-slide");
      
      // Resume automatic slideshow after manual selection
      window.slideshowTimeout = setTimeout(showSlides, 3000);
    }
  
    // Start the slideshow when the page loads
    if (slides.length > 0) {
      // Show the first slide immediately
      slides[0].style.display = "block";
      dots[0].classList.add("active-dot");
      slides[0].classList.add("active-slide");
      
      // Start the automatic slideshow after 3 seconds
      setTimeout(showSlides, 3000);
    }
  
    /* ---------- Memories Section Parallax Effect ---------- */
    const gallerySection = document.querySelector('.gallery-section');
    const slideshowContainer = document.querySelector('.slideshow-container');
  
    // Add a simpler effect for all devices
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * 0.05;
      
      // Simple parallax effect based on scroll position
      if (gallerySection) {
        gallerySection.style.backgroundPosition = `center ${offset}px`;
      }
    });
  
    // Add a subtle hover effect for the slideshow
    if (slideshowContainer) {
      slideshowContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
        this.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.15)';
      });
      
      slideshowContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      });
    }
  
    /* ---------- Scroll Animation for Bouquet Section ---------- */
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
  
    // Function to handle scroll events for animations
    function handleScrollAnimations() {
      const bouquetSection = document.querySelector('.bouquet-section');
      const bouquetImage = document.getElementById('bouquet-image');
      
      if (isElementInViewport(bouquetSection)) {
        bouquetSection.classList.add('in-view');
        bouquetImage.classList.add('show');
        
        // Remove the click event once animation is triggered by scroll
        if (bouquetHeading) {
          bouquetHeading.removeEventListener('click', toggleBouquet);
        }
      }
    }
  
    // Store the original bouquet toggle function
    function toggleBouquet() {
      bouquetImage.classList.toggle('show');
    }
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Trigger check on page load in case section is already in view
    setTimeout(handleScrollAnimations, 500);
  });
  