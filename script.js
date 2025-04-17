
document.getElementById('funForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get button and show loading state
  const button = this.querySelector('button');
  const originalText = button.innerHTML;
  button.disabled = true;
  button.innerHTML = 'Sending...';

  // Get form data
  const formData = new FormData(this);

  // Submit to Formspree
  fetch(this.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        // Success
        this.reset();
        button.innerHTML = 'Message sent! ✓';
      } else {
        // Error
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error(error);
      button.innerHTML = 'Error sending message';
    })
    .finally(() => {
      // Reset button after 3 seconds
      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 3000);
    });
});

console.log('what');