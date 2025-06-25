import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

  const addToCart = (item: object) => {
    setCartItems(prev => [...prev, item])
    console.log("item added!")
  }

  return (
    <div className="w-screen min-h-screen bg-gray-100 grid">
      <Router>
        <Header customerCart={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products onAddToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout customerCart={cartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
