document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".price-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.5s ease ${i * 0.15}s`;
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200);
  });
});
