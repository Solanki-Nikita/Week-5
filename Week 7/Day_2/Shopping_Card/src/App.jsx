import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
          <div className="main-content">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            </Routes>
          </div>
    </div>
    </BrowserRouter>
  );
}