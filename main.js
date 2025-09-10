  const toggle = document.getElementById("headerToggle");
    const mobileMenu = document.getElementById("headerMobile");

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });








     const testimonials = [
      {
        name: "ROSE JONSON",
        role: "Professional Teacher",
        image: "./image/user1.jpeg",
        stars: "★★★★★",
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`
      },
      {
        name: "DAVID SMITH",
        role: "Travel Blogger",
        image: "./image/user2.jpg",
        stars: "★★★★☆",
        text: `"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."`
      },
      {
        name: "SOPHIA WILLIAMS",
        role: "Entrepreneur",
        image: "./image/user3.jpeg",
        stars: "★★★★★",
        text: `"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`
      }
    ];

    let currentIndex = 0;

    const testimonialContent = document.getElementById("testimonial-content");
    const prevBtn = document.getElementById("testimonial-prev");
    const nextBtn = document.getElementById("testimonial-next");

    function showTestimonial(index) {
      const t = testimonials[index];
      testimonialContent.innerHTML = `
        <div class="testimonial-profile">
          <img src="${t.image}" alt="${t.name}">
          <div class="testimonial-profile-info">
            <h3>${t.name}</h3>
            <span>${t.role}</span>
          </div>
        </div>
        <div class="testimonial-stars">${t.stars}</div>
        <div class="testimonial-text">${t.text}</div>
      `;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });

    // Load first testimonial
    showTestimonial(currentIndex);