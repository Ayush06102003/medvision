import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import OrderPage from './Pages/OrderPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
    <ScrollToTop/>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/OrderPage" element={<OrderPage></OrderPage>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
