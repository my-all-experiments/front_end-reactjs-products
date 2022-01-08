import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const [full_name, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Use to read login info from browser
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  //Signup btn click
  const signupClick = async () => {
    let result = await fetch("http://localhost:4000/account/signup", {
      method: "POST",
      body: JSON.stringify({ full_name, phone, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      localStorage.setItem("user",JSON.stringify(result));  
      navigate("/products");
    }
  };

  // Cancel btn click
  const cancelClick = () => {
    setFullname("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  //Page design
  return (
    <div className="div-form">

      <h1 className="form-h1">Signup</h1>
      <input
        className="form-input-box"
        type="text"
        value={full_name}
        onChange={(e) => setFullname(e.target.value)}
        placeholder="Enter full name"
      />
      <input
        className="form-input-box"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
      />
      <input
        className="form-input-box"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <input
        className="form-input-box"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
     <button onClick={signupClick} className="form-btn">
        Sign Up
      </button>
      <button onClick={cancelClick} className="form-btn-cancel">
        Cancel
      </button>
    </div>
  );
};

export default SignUp;
