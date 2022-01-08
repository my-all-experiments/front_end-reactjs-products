import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product_name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // Use to read login info from browser
  useEffect(() => {
   // if (userInfo) navigate("/");
  });

  //Add product btn click
  const addProductClick = async () => {
      
    if (!product_name || !category || !price || !company) {
      setError(true);
      return false;
    }


    const userInfo = localStorage.getItem("user");
    const user_id=JSON.parse(userInfo)._id;
    let result = await fetch("http://localhost:4000/products/add", {
      method: "POST",
      body: JSON.stringify({ product_name, category, price, company,user_id}),
      headers: { "Content-Type": "application/json" },
    });
    if (result) {
        navigate("/products");
      }
  };

    // Cancel btn click
    const cancelClick = () => {
        setName("");
        setCategory("");
        setPrice("");
        setCompany("");
        setError(false);
        navigate("/products");
      };

  return (
    <div className="div-form">

      <h1 className="form-h1">Add Products</h1>
      <input
        className="form-input-box"
        type="text"
        value={product_name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
      />
     {error && !product_name  && <span className="invalid-input">Enter vaild name</span>}
      <input
        className="form-input-box"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter product category"
      />
     {error && !category  && <span className="invalid-input">Enter vaild category</span>}

      <input
        className="form-input-box"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter product price"
      />
     {error && !price  && <span className="invalid-input">Enter vaild price</span>}

      <input
        className="form-input-box"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter product company"
      />
     {error && !company  && <span className="invalid-input">Enter vaild company</span>}
      
      <button onClick={addProductClick} className="form-btn">
        Add
      </button>
      <button onClick={cancelClick} className="form-btn-cancel">
        Cancel
      </button>
    </div>
  );
};

export default AddProduct;
