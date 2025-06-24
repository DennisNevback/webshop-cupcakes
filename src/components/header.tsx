import { Link } from "react-router-dom"
import React, { useState } from 'react';
function Header({ customerCart }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex min-w-full items-start justify-between p-3 h-30">
      <div className="flex flex-col">

        <button onClick={handleClick}
          className="flex flex-col justify-center items-center bg-transparent z-51 m-3">

          <span className={`bg-black m-1 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1 bg-white' : '-translate-y-0.5'}`} ></span>

          <span className={`bg-black m-1 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1 bg-white' : '-translate-y-0.5'}`} ></span>

          <span className={`bg-black m-1 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
        </button>
        {isOpen && (
          <ul className="absolute flex flex-col items-center top-0 p-5 pt-20 left-0 z-50 w-80 h-full bg-black opacity-90 shadow-lg text-white space-y-5 text-xl">
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/products" onClick={handleClick}>Products</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        )}
      </div>
      <img src="/images/logo/dennisDesertLogo.png" alt="Logo" className="h-full" />
      <Link to="/checkout" className="flex pt-5">{customerCart.length} items</Link>
    </nav >
  )
}

export default Header