let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [];

loadProduct();
renderCart(cart);

async function loadProduct() {
  const data = await fetchProducts();
  data.forEach((product) => createProductBox(product));
}

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Fetch API failed");
    }

    const data = await response.json();

    products = data.products.map(({ stock, id, title, price, thumbnail }) => ({
      stock,
      id,
      title,
      price,
      thumbnail,
    }));

    return products;
  } catch (err) {
    console.error(`Error: ${err.message}`);
    throw err;
  }
}

function createProductBox(product) {
  const div = document.getElementById("products");
  const subdiv = document.createElement("div");

  subdiv.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    
    <h3>${product.title}</h3>
    <h4>₹${product.price}</h4>
    <button class="addtocart">
      Add to Cart
    </button>
  `;

  const btn = subdiv.querySelector(".addtocart");
  btn.addEventListener("click", () => {
    addToCart(product);
  });

  div.appendChild(subdiv);
}

function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  renderCart(cart);
}

function removeFromCart(product) {
  if (product.quantity == 1) {
    cart = cart.filter((item) => item.id != product.id);
  } else {
    product.quantity -= 1;
  }
  saveCart();
  renderCart(cart);
}
function saveCart() {
  const deepCopy = structuredClone(cart);
  localStorage.setItem("cart", JSON.stringify(deepCopy));
}

function renderCart(cart) {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item) => {
    const subdiv = document.createElement("div");
    subdiv.className = "cart-item";

    subdiv.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <div>
        <h3>${item.title}</h3>
        <p>Price: ₹${item.price}</p>
        <p>Qty: ${item.quantity}</p>
    <button class="removefromcart">
    RemoveFromCart
    </button>
      </div>
    `;

    const btn = subdiv.querySelector(".removefromcart");
    btn.addEventListener("click", () => {
      removeFromCart(item);
    });

    cartDiv.appendChild(subdiv);
  });

  document.getElementById("total").innerText =
    "Total: ₹" + calculateCartTotal(cart);

  const btn = document.querySelector(".clear-cart");
  btn.addEventListener("click", () => {
    clearCart();
  });
}

function calculateCartTotal(cart) {
  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

function clearCart() {
  cart.length = [];
  saveCart();
  renderCart(cart);
}
