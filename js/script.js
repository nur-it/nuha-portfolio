const headerOpenBtn = document.querySelector(".mobile_menu");
const headerCloseBtn = document.querySelector(".mobile_nav_close_btn");
const mobileNav = document.querySelector(".mobile_menu_overlay");

headerOpenBtn.addEventListener("click", () => {
  console.log("ok", mobileNav);
  mobileNav.style.display = "block";
});

headerCloseBtn.addEventListener("click", () => {
  console.log("ok", mobileNav);
  mobileNav.style.display = "none";
});
