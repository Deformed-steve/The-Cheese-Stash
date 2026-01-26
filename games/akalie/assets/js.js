
window.addEventListener("load", () => {
  window.focus();
  document.body.addEventListener("click", () => window.focus());
});


window.addEventListener("keydown", e => {
  if ([32, 37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault();
  }
});
