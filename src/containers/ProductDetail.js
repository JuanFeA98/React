import React from 'react'

import ProductInfo from '../components/ProductInfo'

import '../styles/ProductDetail.css'

import Close from '../images/icons/icon_close.png'

export default function ProductDetail() {
  return (
    <aside className='ProductDetail'>
        <div className="ProductDetail-close">
            <img src={Close} alt="close" />
        </div>
        <ProductInfo />
    </aside>
  )
}
