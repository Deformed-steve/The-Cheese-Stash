// Particle.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#00aaff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 1.5 },
    line_linked: { enable: true, color: "#00aaff", opacity: 0.3 }
  }
});

// Search function
const search = document.getElementById("search");
const games = document.querySelectorAll(".game");

search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  games.forEach(game => {
    const name = game.dataset.name.toLowerCase();
    game.style.display = name.includes(term) ? "block" : "none";
  });
});
