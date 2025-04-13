

  const portfolioImages = document.querySelectorAll(".portfolios_card_img_div img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  portfolioImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.remove("hidden");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  // Close lightbox
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // Close on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });

