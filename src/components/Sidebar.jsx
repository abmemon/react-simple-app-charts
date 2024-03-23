import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <aside>
        <h3>Menu</h3>
        <ul>
            <li><Link to="/home" className="navbar-brand">Home</Link></li>
            <li><Link to="/chart" className="nav-link">Chart</Link></li>
            <li><Link to="/todo" className="nav-link">Todo</Link></li>
        </ul>
    </aside>
  )
}

export default Navbar