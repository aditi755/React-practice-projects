import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from "../Context";
function Header() {
  return (
    <div>
 <span className="header">React Context Api Tutorial</span>
 <ul className="nav">
    <li className="prod">
        <Link to="/">Home Page</Link>
    </li>
    <li className="prod1">
        <Link to="/cart">Cart</Link>
    </li>
 </ul>
 </div>

  )
}

export default Header