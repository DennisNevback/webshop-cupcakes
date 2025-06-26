import { NavLink, Link } from "react-router"
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'



function Header({ customerCart }) {

  const [isOpen, setOpen] = useState(false)

  const toggleOpen = (isOpen) => {
    setOpen(!isOpen)
  }


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
      <Link to="/checkout" onClick={toggleOpen} className="flex pt-5">{customerCart.length} items</Link>
    </nav >
  )
}

export default Header