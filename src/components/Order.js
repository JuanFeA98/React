import React from 'react'

import '../styles/Order.css'

import Flecha from '../images/icons/flechita.svg'

export default function Order() {
  return (
    <div className='Order'>
        <p>
            <span>03.05.2021</span>
            <span>6 articles</span>
        </p>
        <p>$560.00</p>
        <img src={Flecha} alt="arrow" />
    </div>
  )
}
