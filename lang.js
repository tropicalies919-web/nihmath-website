// lang.js
let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(translations) {
  const t = translations[currentLang];

  // Apply translations
  for (let key in t) {
    if (document.getElementById(key)) {
      document.getElementById(key).innerText = t[key];
    }
  }

  // Direction (RTL for Arabic)
  document.body.style.direction = currentLang === "ar" ? "rtl" : "ltr";

  // Update button label
  if (document.getElementById("langBtn")) {
    document.getElementById("langBtn").innerText = t.langBtn;
  }
}

function toggleLang(translations) {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("lang", currentLang);
  setLanguage(translations);
}
