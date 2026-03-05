const buttons = document.querySelectorAll(
  ".unbounded-ripple-effect, .bounded-ripple-effect"
);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    const ANIMATION_SPEED = 1000;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("div");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, ANIMATION_SPEED);

  });
});