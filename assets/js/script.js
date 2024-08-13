function updatePerthTime() {
  let now = new Date();
  let perthTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Perth" }));
  let hours = perthTime.getHours();
  let minutes = perthTime.getMinutes().toString().padStart(2, '0');
  let seconds = perthTime.getSeconds().toString().padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let formattedTime = `${hours}:${minutes} ${ampm}`;
  let day = perthTime.getDate().toString().padStart(2, '0');
  let month = (perthTime.getMonth() + 1).toString().padStart(2, '0');
  let year = perthTime.getFullYear();
  let formattedDate = `${day}/${month}/${year}`;
  document.getElementById('perth-time').textContent = `${formattedDate} ${formattedTime} AWST`;
}

updatePerthTime();
setInterval(updatePerthTime, 1000);

const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const cartIcon = document.getElementById('cart-icon');
const logo = document.getElementById('logo');

menuIcon.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  menuIcon.classList.toggle('move');
});

if (logo) {
  logo.addEventListener('mouseenter', showRandomGif);
}

function showRandomGif() {
  const gifs = ['cherrygif', 'clickgif', 'clicknowgif', 'skullgif'];
  const gifName = gifs[Math.floor(Math.random() * gifs.length)];
  const gifElement = document.createElement('img');
  gifElement.src = `assets/images/${gifName}.gif`;
  gifElement.className = 'glitch-gif';
  gifElement.style.top = `${Math.random() * 90}vh`;
  gifElement.style.left = `${Math.random() * 90}vw`;
  gifElement.addEventListener('click', () => {
    gifElement.remove();
  });
  document.body.appendChild(gifElement);
  setTimeout(() => {
    gifElement.remove();
  }, 5000);
}

setInterval(showRandomGif, 10000);

// Basket Functionality
let basket = [];

function addToBasket(item) {
  basket.push(item);
  updateBasket();
}

function updateBasket() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  basket.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}

// Example usage:
document.querySelectorAll('.product-item button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('p').textContent;
    const productPrice = parseFloat((Math.random() * 100).toFixed(2)); // Random price for demo
    addToBasket({ name: productName, price: productPrice });
  });
});

// Popup close functionality
document.getElementById('popup-close').addEventListener('click', () => {
  document.getElementById('email-popup').style.display = 'none';
});

document.getElementById('popup-submit').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('email-popup').style.display = 'none';
});

document.getElementById('popup-cancel').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('email-popup').style.display = 'none';
});
