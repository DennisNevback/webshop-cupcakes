import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'
import Home from "./pages/Home.tsx"
import Contact from "./pages/Contact.tsx"
import About from "./pages/About.tsx"
import Products from "./pages/Products.tsx"
import Checkout from "./pages/Checkout.tsx"
import { useEffect, useState } from "react"

function App() {

  const [cartItems, setCartItems] = useState([])

  const addToCart = (newItem) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === newItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      } else {
        return [...prevCart, newItem];
      }
    });
  };


  return (
    <div className="w-screen min-h-screen bg-gray-100 grid">
      <Router>
        <Header customerCart={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout customerCart={cartItems} setCustomerCart={setCartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
