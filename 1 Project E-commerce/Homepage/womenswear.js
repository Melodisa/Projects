document.addEventListener('DOMContentLoaded', function () { });

let products = null;

// Obtaining data from product.json file
fetch('products2.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
    });

function addDataToHTML() {
    let listProductHTML = document.querySelector('.listProduct');
    // adding new data
    if (products != null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML =
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">£${product.price}</div>
                <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>`;
            listProductHTML.appendChild(newProduct);
        });
    }
}

function addToCart(id, name, price) {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Creating a new cart item
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${name} - £${price}`;
    cartItems.appendChild(cartItem);

    // Updating the total price
    let totalPrice = parseFloat(totalPriceElement.innerText);
    totalPrice += price;
    totalPriceElement.innerText = totalPrice.toFixed(2);
}

function clearCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clearing cart items
    cartItems.innerHTML = '';

    // Reseting the total price
    totalPriceElement.innerText = '0.00';
}

// Function to go back in the browser history using an arrow
function goBack() {
    window.history.back();
}
