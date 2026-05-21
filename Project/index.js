fetch("https://dummyjson.com/products")
.then((res) => {
    return res.json();
})

.then((data) => {

    let body = document.querySelector("body");

    data.products.map((a) => {

        body.innerHTML += `

        <div style="
            border:1px solid black;
            width:250px;
            padding:10px;
            margin:10px;
            display:inline-block;
        ">

            <img src="${a.thumbnail}" width="100%">

            <h2>${a.title}</h2>

            <h3>₹ ${a.price}</h3>

            <button>Add To Cart</button>

        </div>

        `;
    });

});