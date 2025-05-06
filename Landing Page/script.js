// Navbar Hide Scroll Animation
window.addEventListener("scroll", function() {
    const navbar = document.getElementById('navbar');

    if(window.pageYOffset >= 700) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  })

const listIcon = document.getElementById("icon-list");
const listMenu = document.getElementById("menu-ul");

listIcon.addEventListener("click", () => {
  listMenu.classList.toggle("hidden");
});

//   End