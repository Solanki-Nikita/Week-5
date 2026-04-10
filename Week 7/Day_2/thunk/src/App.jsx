import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import Header from './container/Header'

//import ProductComponent from './container/ProductComponent';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
import "./App.css";
export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productID" element={<ProductDetail />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}  
