import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { About, Home, Store } from "./components";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import StoreCard from "./components/StoreCard";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div style={{ background: "#fff" }}>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
