import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddProduct from "./components/admin/AddProduct";
import Products from "./components/admin/Products";
import PrivateComponent from "./components/PrivateComponent";
import "./styles/App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

              <Route element={<PrivateComponent />}>
                  <Route path="/products" element={<Products/>}></Route>
                  <Route path="/products/add" element={<AddProduct/>}></Route>
                  <Route path="/update" element={<h1>Update Product Component</h1>} ></Route>
                  <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
                  <Route path="/logout" element={<h1>logout Component</h1>}></Route>

              </Route>

           <Route path="/login" element={<Login />}></Route>
           <Route path="/signup" element={<SignUp />}></Route>

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
