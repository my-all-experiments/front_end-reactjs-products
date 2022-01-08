import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Use to store login info in browser
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  //Login btn click
  const loginClick = async () => {
    let result = await fetch("http://localhost:4000/account/login", {
      method: "POST",
      body: JSON.stringify({email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result) {
      localStorage.setItem("user",JSON.stringify(result));  
      navigate("/");
    }
  };

  // Cancel btn click
  const cancelClick = () => {
    setEmail("");
    setPassword("");
  };

  //Page design
  return (
    <div className="div-form">
      <h1 className="form-h1">Login</h1>
    
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
      <button onClick={loginClick} className="form-btn">
        Login
      </button>
      <button onClick={cancelClick} className="form-btn-cancel">
        Cancel
      </button>
    </div>
  );
};

export default Login;
