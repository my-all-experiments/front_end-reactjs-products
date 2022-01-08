import React from "react";
const Products = () => {
  let getAllProducts = async () => {
    const userInfo = localStorage.getItem("user");
    const user_id = JSON.parse(userInfo)._id;
    let products = await fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify({ user_id }),
      headers: { "Content-Type": "application/json" },
    });

    products = await products.json();
 
console.log(products);

  };
  return (
    <div className="div-form">
      <button onClick={getAllProducts} className="form-btn">
        Login
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="products">
      
        </tbody>
      </table>
    </div>
  );
};
export default Products;
