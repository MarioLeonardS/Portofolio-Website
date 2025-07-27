// Variable User dan Password (Input akan tersimpan kedalam Array)
let user = [];
let password = [];

// Kita gunakan while karena kodenya sederhana dan akan hanya butuh kondisi
while (user !== "Mario Leonard Salim" || password !== "ac251525") {
  // Pop-Up Login Yang Mengarah Ke Array
  user = prompt("Input Your Name", []);
  password = prompt("Input Your Password", []);
  // Jawaban Ketika True Dan False
  if (user == "Mario Leonard Salim" && password == "ac251525") {
    // Jika Pass Benar
    alert(`Hello ${user}, Welcome Back`);
  } // Jika Pass Salah
  else {
    alert("Your Password Is Wrong Try Again");
  }
}

// Navbar Hide Scroll Animation
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.pageYOffset >= 700) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const listIcon = document.getElementById("icon-list");
const listMenu = document.getElementById("menu-ul");

listIcon.addEventListener("click", () => {
  listMenu.classList.toggle("hidden");
});

//   End
