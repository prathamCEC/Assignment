/*--------------------------------------
  MOBILE MENU TOGGLE
---------------------------------------*/
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

/*--------------------------------------
  DARK/LIGHT MODE TOGGLE
---------------------------------------*/
function toggleTheme() {
  const body = document.body;

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}

/*--------------------------------------
  TYPING EFFECT IN HERO TEXT
---------------------------------------*/
const roles = [
  "a Developer",
  "an Engineer",
  "an Innovator",
  "a Problem Solver",
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  const textElement = document.getElementById("typingText");

  if (!textElement) return;

  if (charIndex < roles[roleIndex].length) {
    textElement.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect() {
  const textElement = document.getElementById("typingText");

  if (!textElement) return;

  if (charIndex > 0) {
    textElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

window.onload = () => {
  typeEffect();
};

/*--------------------------------------
  AOS Initialization
---------------------------------------*/
AOS.init({
  duration: 1000,
  once: true,
});
