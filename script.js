document.getElementById("sayHiBtn").addEventListener("click", () => {
  alert("Selam Bora! 🎯 İlk etkileşimi yaptık.");
});
// selamlama
document.getElementById("sayHiBtn").addEventListener("click", () => {
  alert("Selam Bora! 🎯 Navbar + hero hazır.");
});

// mobil menü
const menuBtn = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const isOpen = links.style.display === "block";
  links.style.display = isOpen ? "none" : "block";
});
