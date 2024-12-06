const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = `<h3>Your Cart:</h3>`;
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });
  cartDiv.innerHTML += `<button onclick="checkout()">Checkout</button>`;
}

function checkout() {
  alert('Checkout complete!');
}

displayProducts();
