import React from 'react'

import '../styles/ProductInfo.css'

import Boton from '../images/icons/bt_added_to_cart.svg'

export default function ProductInfo() {
  return (
      <React.Fragment>
        <div className='ProductInfo'>
            {/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" /> */}
            <p>$35.00</p>
            <p>Bike</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button className='primary-button add-to-cart-button'>
                <img src={Boton} alt="add to cart" />
            </button>
        </div>      
      </React.Fragment>
  )
}
