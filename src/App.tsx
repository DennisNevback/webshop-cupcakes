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


type CartItem = {
  id: number,
  name: string,
  price: number,
  image: string
  amount: number
}


function App() {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (newItem: CartItem) => {
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
          <Route path="/webshop-cupcakes/" element={<Home />} />
          <Route path="/webshop-cupcakes/contact" element={<Contact />} />
          <Route path="/webshop-cupcakes/about" element={<About />} />
          <Route path="/webshop-cupcakes/products" element={<Products onAddToCart={addToCart} />} />
          <Route path="/webshop-cupcakes/checkout" element={<Checkout customerCart={cartItems} setCustomerCart={setCartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
