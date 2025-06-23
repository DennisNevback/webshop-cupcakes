import { Link } from "react-router-dom"
function Header({ customerCart }) {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <span>Cart: {customerCart.length} items</span>
        </li>
      </ul>
    </nav >
  )
}

export default Header