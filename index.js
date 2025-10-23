
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!btn.closest("form")) alert("Готово!");
  });
});


const form = document.getElementById("subscribeForm");
const email = document.getElementById("emailInput");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.value.trim()) {
    msg.textContent = "Введіть email";
    msg.style.color = "red";
  } else {
    msg.textContent = "Дякую!";
    msg.style.color = "green";
    email.value = "";
  }
});
