// Typing effect
const text = [
  "Software Developer",
  "Flutter App Developer",
  "Problem Solver"
];

let index = 0;
let char = 0;
const typing = document.getElementById("typing");

function type() {
  if (char < text[index].length) {
    typing.textContent += text[index][char++];
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (char > 0) {
    typing.textContent = text[index].substring(0, --char);
    setTimeout(erase, 40);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  }
}

type();

// Cursor glow
document.addEventListener("mousemove", e => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
