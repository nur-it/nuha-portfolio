const hamburger = document.querySelector('.hamburger');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');

// ✅ Open Menu
hamburger.addEventListener('click', () => {
  sidebarMenu.classList.remove('hidden');
  sidebarMenu.classList.add('active');
  overlay.classList.remove('hidden');
});

// ✅ Close Menu on Overlay Click
overlay.addEventListener('click', () => {
  sidebarMenu.classList.remove('active');
  sidebarMenu.classList.add('hidden');
  overlay.classList.add('hidden');
});

// ✅ Close Menu on Nav Link Click
const menuLinks = sidebarMenu.querySelectorAll('a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarMenu.classList.remove('active');
    sidebarMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});
