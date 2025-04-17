document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    let delay = 0;
  
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.style.transform = 'scale(1.1)';
        step.style.backgroundColor = '#fca311';
        step.style.transition = 'all 0.5s ease-in-out';
      }, delay);
      delay += 700;
    });
  });
  