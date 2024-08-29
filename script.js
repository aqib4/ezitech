/* Show Sidebar Hamburger Menu */
function menuSidebar() {
  var Menu = document.querySelector(".Sidebar__menu");
  Menu.classList.add("show-sidebar");
}
/*hide sidebar menu*/
function hideSidebarMenu() {
  var Menu = document.querySelector(".Sidebar__menu");
  Menu.classList.remove("show-sidebar");
  Menu.classList.add("hide-sidebar");
}

/*text blur hero section*/
document.addEventListener("scroll", function () {
  const blurTexth1 = document.querySelector(".blur-text-h1");
  const blurTexth2 = document.querySelector(".blur-text-h2");
  const blurTexth3 = document.querySelector(".blur-text-h3");
  const blurTexth1Mobile = document.querySelector(".blur-text-h1-mobile");

  const scrollPosition = window.scrollY;
  const blurValue = Math.min(scrollPosition / 50, 5); // Adjust the divisor to control blur intensity

  blurTexth1.style.filter = `blur(${blurValue}px)`;
  blurTexth2.style.filter = `blur(${blurValue}px)`;
});
/*text chaning hero section*/
document.addEventListener("DOMContentLoaded", (event) => {
  const words = ["Development", "Programming", "Coding", "Design"];
  let index = 0;

  const dynamicWordElement = document.getElementById("dynamic-word");

  setInterval(() => {
    dynamicWordElement.textContent = words[index];
    index = (index + 1) % words.length;
  }, 2000);
});
