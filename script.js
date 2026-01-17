/* CURSOR GLOW */
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

/* TYPING EFFECT */
const text = ["Flutter Developer", "Full Stack Engineer", "Problem Solver"];
let index = 0, char = 0;
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

/* MAGNETIC BUTTONS */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - r.left - r.width/2) * 0.2}px,
                                     ${(e.clientY - r.top - r.height/2) * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
  });
});

/* CARD SPOTLIGHT */
document.querySelectorAll('.project, .card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - r.left}px`);
    card.style.setProperty('--y', `${e.clientY - r.top}px`);
  });
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add('active');
    }
  });
});
