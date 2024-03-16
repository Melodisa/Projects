let products = null;

function sidebarOpen() {

    //creates a sidebar that toggles upon pressing search button //
    // fetching from both product files
    document.getElementsByClassName('navbar__sidebar')[0].classList.toggle('show');
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });
    fetch('products2.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
        });
}

// Adds the product data to HTML and the sidebar + searchbar //
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
                // function to search for product name, div displays price corresponding to product name //
                // added styling inside of each function//
                if (product.name.toLowerCase() === search) {
                    listProductHTML.innerHTML =
                        `<h2 style = "text-align: center; margin-bottom: 10px; font-family: arial;">${product.name}</h2>
                    <img src="${product.image}"width = "170" height = "200" style = "display: flex; margin-left: 70px; margin-bottom: 5px; border-radius: 20px; ">
                    <div class="price" style = "font-size: large; text-align: center; font-family: arial; margin-top: 10px;">£${product.price}</div>`;
                }
            });
        }
        else {
            alert("Please enter a valid product name!");
        }
    }
}



