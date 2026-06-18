document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".next-card");

  // entrada
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * 120);
  });

  // toggle cards
  cards.forEach(card => {
    card.addEventListener("click", () => {

      const isActive = card.classList.toggle("active");

      if (isActive) {
        document.body.classList.add("overboost");

        clearTimeout(window._ob);
        window._ob = setTimeout(() => {
          document.body.classList.remove("overboost");
        }, 900);
      }
    });
  });

});