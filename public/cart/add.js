// cart/add.js

// Mock cart data
const cart = [];

// Function to add item to the cart
function addToCart(variantId, quantity) {
  // Find if the item already exists in the cart
  const itemIndex = cart.findIndex((item) => item.variantId === variantId);

  if (itemIndex !== -1) {
    // Update quantity if item exists
    cart[itemIndex].quantity += quantity;
  } else {
    // Add new item to the cart
    cart.push({ variantId, quantity });
  }
  console.log('Current cart:', cart);

  // Simulate success response
  return { success: 1 };
}

// Handle POST request
addEventListener('fetch', (event) => {
  if (event.request.method === 'POST') {
    event.respondWith(
      (async () => {
        const { variantId, quantity } = await event.request.json();
        const response = addToCart(variantId, quantity);
        return new Response(JSON.stringify(response), { status: 200 });
      })()
    );
  }
});
