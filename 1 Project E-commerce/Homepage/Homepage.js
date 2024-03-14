let products = [];

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayResults(products);
    });

function performSearch() {
    // Get the input value
    var searchTerm = document.getElementById('search').value.toLowerCase();
    displayResults(filterProducts(searchTerm));
}

function filterProducts(searchTerm) {
    // Filter products based on the search term
    return products.filter(product => product.name.toLowerCase().includes(searchTerm));
}

function displayResults(results) {
    var listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    if (results.length === 0) {
        listProductHTML.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(product => {
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

