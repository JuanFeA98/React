import React, { useState } from 'react'

import '../styles/ProductItem.css'

import Cart from '../images/icons/bt_add_to_cart.svg'

export default function ProductItem() {
  const [cart, setCart] = useState([]);
  
  const handleCart = () =>{
    setCart([]);
  }

  return (
    <div className='ProductItem'>
		<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure onClick={handleCart} >
                <img src={Cart} alt="" />
            </figure>
        </div>
    </div>
  )
}
