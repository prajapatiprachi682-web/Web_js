import React, { useState } from "react";

const Task = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    if (search.trim() === "") {
      alert("Please enter a product name");
      return;
    }

    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );

    const data = await res.json();

    setProducts(data.products);
  };

  const lowToHigh = () => {
    const sortedProducts = [...products].sort(
      (a, b) => a.price - b.price
    );

    setProducts(sortedProducts);
  };

  const highToLow = () => {
    const sortedProducts = [...products].sort(
      (a, b) => b.price - a.price
    );

    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Product Listing</h1>

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <button onClick={lowToHigh}>
        Low to High
      </button>

      <button onClick={highToLow}>
        High to Low
      </button>

      <div className="products-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <h3>{item.title}</h3>

            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;