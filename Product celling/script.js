let container = document.getElementById("container");
let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
let error = document.getElementById("error");
let sort = document.getElementById("sort");

let products = [];

async function fetchProducts(query = "") {

    let url;

    if(query){
        url = `https://dummyjson.com/products/search?q=${query}`;
    }
    else{
        url = "https://dummyjson.com/products";
    }

    let response = await fetch(url);

    let data = await response.json();

    products = data.products;

    displayProducts(products);
}

function displayProducts(products){

    container.innerHTML = "";

    products.forEach(product => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
        <img src="${product.thumbnail}">
        <h3>${product.title}</h3>
        <p>Price : $${product.price}</p>
        <p>Rating : ⭐ ${product.rating}</p>
        `;

        container.appendChild(card);
    });
}

searchBtn.addEventListener("click", () => {

    let value = search.value.trim();

    if(value === ""){
        error.innerText =
        "Search field cannot be empty";
        return;
    }

    error.innerText = "";

    fetchProducts(value);
});

sort.addEventListener("change", () => {

    let value = sort.value;

    if(value === "priceLow"){
        products.sort((a,b)=>
        a.price-b.price);
    }

    else if(value === "priceHigh"){
        products.sort((a,b)=>
        b.price-a.price);
    }

    else if(value === "rating"){
        products.sort((a,b)=>
        b.rating-a.rating);
    }

    displayProducts(products);
});

fetchProducts();