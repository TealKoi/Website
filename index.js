
/* Function Definitions */

function darken_on_hover() {
  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

  portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
      portfolioItem.childNodes[1].classList.add('img-darken');
    });

    portfolioItem.addEventListener('mouseout', () => {
      portfolioItem.childNodes[1].classList.remove('img-darken');
    });
  });
};

/* Function Calls */

darken_on_hover();