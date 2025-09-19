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
// ---- İLETİŞİM FORMU DOĞRULAMA & YANIT ----

// Elemanları yakala
const form = document.getElementById("contactForm");          // Formun kendisi
const fullName = document.getElementById("fullName");         // Ad Soyad inputu
const email = document.getElementById("email");               // E-posta inputu
const message = document.getElementById("message");           // Mesaj alanı

const errName = document.getElementById("errName");           // Ad Soyad hata yazısı
const errEmail = document.getElementById("errEmail");         // E-posta hata yazısı
const errMsg = document.getElementById("errMsg");             // Mesaj hata yazısı
const formResult = document.getElementById("formResult");     // Genel sonuç metni

// Basit e-posta regex'i (çoğu durumu kapsar, aşırı katı değil)
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                 // a@b.c formatını kontrol eder

// Submit olayını dinle
form.addEventListener("submit", (e) => {
  e.preventDefault();                                         // Sayfanın yenilenmesini engelle

  // Önce eski hata mesajlarını temizle
  errName.textContent = "";                                   // Temizle
  errEmail.textContent = "";
  errMsg.textContent = "";
  formResult.textContent = "";                                // Sonuç mesajını sıfırla

  // Alan değerlerini al ve kırp
  const nameVal = fullName.value.trim();                      // Boşlukları kırp
  const emailVal = email.value.trim();
  const msgVal = message.value.trim();

  // Doğrulama bayrağı
  let ok = true;                                              // Başta her şey doğru varsay

  // Ad Soyad kontrolü
  if (nameVal.length < 2) {                                   // En az 2 karakter
    errName.textContent = "Lütfen en az 2 karakter yaz.";     // Hata mesajı
    ok = false;                                               // Başarısız işaretle
  }

  // E-posta kontrolü
  if (!emailRe.test(emailVal)) {                              // Regex ile kontrol
    errEmail.textContent = "Geçerli bir e-posta gir.";        // Hata mesajı
    ok = false;
  }

  // Mesaj kontrolü
  if (msgVal.length < 10) {                                   // En az 10 karakter
    errMsg.textContent = "Mesaj en az 10 karakter olmalı.";   // Hata mesajı
    ok = false;
  }

  // Tüm kontroller geçtiyse
  if (ok) {
    // Normalde burada backend’e istek atarız (fetch POST)
    // Şimdilik demo: başarılı mesajı göster ve formu temizle
    formResult.textContent = "Teşekkürler! Mesajın alındı ✅"; // Başarı mesajı
    form.reset();                                             // Formu sıfırla

    // İsteğe bağlı: 3 sn sonra sonucu temizle
    setTimeout(() => { formResult.textContent = ""; }, 3000); // Mesajı gizle
  }
});

// Anlık (on-the-fly) doğrulama: kullanıcı yazarken geri bildirim
[fullName, email, message].forEach((el) => {                  // Üç inputu diziye koyduk
  el.addEventListener("input", () => {                        // Her yazışta tetiklenir
    // Hızlı kontrol: ilgili alanın hata yazısını temizle
    if (el === fullName) errName.textContent = "";           // Ad Soyad hatasını temizle
    if (el === email) errEmail.textContent = "";             // E-posta hatasını temizle
    if (el === message) errMsg.textContent = "";             // Mesaj hatasını temizle
  });
});
