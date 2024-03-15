let products = null;
// this is for the sidebar
function sidebarOpen() {

    document.getElementsByClassName('navbar__sidebar')[0].classList.toggle('show');
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });
}
function addDataToHTML() {
    let listProductHTML = document.querySelector('.navbar__sidebar');
    let search = document.getElementById("searchbar").value;
    search = search.toLowerCase();
    if (search == "") {
        alert("Please enter a valid product name");
    }
    else {
        if (products != null) {
            products.forEach(product => {
                if (product.name.toLowerCase() === search) {
                    // let newProduct = document.createElement('div');
                    // newProduct.classList.add('item');
                    listProductHTML.innerHTML = `<h2>${product.name}</h2>
                    <div class="price">£${product.price}</div>`;
                    // listProductHTML.appendChild(newProduct);
                }
            });

        }
        else {
            alert("Please enter a valid product name");
        }
    }
    // // adding new data
    // if (products != null) {
    //     products.forEach(product => {
    //         let newProduct = document.createElement('div');
    //         newProduct.classList.add('item');
    //         newProduct.innerHTML =
    //             `<h2>${product.name}</h2>
    //             <div class="price">£${product.price}</div>`;
    //     });
    // }
}

