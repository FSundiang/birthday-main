  window.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.image-slot');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 300); 
      });
    });