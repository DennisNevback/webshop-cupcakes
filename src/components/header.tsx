import { NavLink, Link } from "react-router"
import { useState, useEffect } from 'react';
import { Spin as Hamburger } from 'hamburger-react'



function Header({ customerCart }) {

  const [isOpen, setOpen] = useState(false)
  const [cartAmount, setCartAmount] = useState(0)


  //for hamburgermenu
  const toggleOpen = (isOpen) => {
    setOpen(!isOpen)
  }

  //amount in shopping cart
  useEffect(() => {
    let sum = 0;
    customerCart.forEach(item => {
      sum += item.amount
    });
    setCartAmount(sum)
    sum = 0
  }, [customerCart]);

  return (

    <nav className="flex min-w-full items-start justify-between p-3 h-30">
      <div className="flex flex-col">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
        {isOpen && (
          <ul className="absolute flex flex-col items-center top-0 p-5 pt-20 left-0 w-80 h-full z-50 bg-black opacity-90 shadow-lg text-white space-y-5 text-xl">
            <li>
              <NavLink to="/" onClick={toggleOpen} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={toggleOpen}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleOpen}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleOpen}>Contact</NavLink>
            </li>
          </ul>
        )}
      </div>
      <Link to="/" className="h-full"> <img src="/images/logo/dennisDesertLogo.png" alt="Logo" className="h-full" onClick={toggleOpen} /> </Link>
      <Link to="/checkout" onClick={toggleOpen} className="flex flex-col relative h-1/2 justify-center mr-3 mt-1 hover:cursor-pointer">
        <p className="absolute right-0 top-0 z-2 bg-amber-300 px-1 rounded-xl shadow-md">{cartAmount}</p>
        <img src="/public/images/icons/shopping_cart_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" className="h-1/2 mr-2 mt-1" />
      </Link>
    </nav >
  )
}

export default Header