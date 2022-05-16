import React from 'react'

import OrderItem from '../components/OrderItem'

export default function CheckOut() {
  return (
    <div className='CheckOut'>
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                </div>
            </div>
            <OrderItem />
        </div>
    </div>
  )
}
