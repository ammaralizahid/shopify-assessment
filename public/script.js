document.addEventListener('DOMContentLoaded', function () {
  const addToCartButton = document.getElementById('add-to-cart');
  const successMessage = document.getElementById('success-message');

  addToCartButton.addEventListener('click', function () {
    const variantId = this.getAttribute('data-variant-id');

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: variantId,
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          successMessage.style.display = 'block';
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
