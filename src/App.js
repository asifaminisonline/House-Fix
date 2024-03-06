import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
