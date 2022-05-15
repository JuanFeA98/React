import React from 'react'

import '../styles/header.css'

import Logo from '../images/logos/logo_yard_sale.svg'
import Menu from '../images/icons/icon_menu.svg'
import Cart from '../images/icons/icon_shopping_cart.svg'

export default function Header() {
  return (
    <div>
        <nav>
            <img src={Menu} alt="menu" className="menu"/>
            <div className="navbar-left">
            <img src={Logo} alt="logo" className="logo"/>
            <ul>
                <li> <a href="/">All</a> </li>
                <li> <a href="/">Clothes</a> </li>
                <li> <a href="/">Electronics</a> </li> 
                <li> <a href="/">Furnitures</a> </li>
                <li> <a href="/">Toys</a> </li>
                <li> <a href="/">Others</a> </li>
            </ul>
            </div>
            <div className="navbar-right">
            <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                <img src={Cart} alt="shopping cart"/>
                <div>2</div>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}
