document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
  
        // Redirect based on the grid clicked
        if (name === "Flowers") {
          window.location.href = "flower.htm";
        } else if (name === "Gallery") {
          window.location.href = "gallery.htm";
        } else if (name === "Messages") {
          window.location.href = "messages.htm";
        } else if (name === "Other") {
          window.location.href = "other.htm";
        }
      });
    });
  });
  