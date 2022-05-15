import React from 'react'

import '../styles/Menu.css'

export default function Menu() {
  return (
    <div className='Menu'>
        <ul>
            <li><a href="/" className='title'>My Orders</a></li>
            <li><a href="/">My account</a></li>
            <li><a href="/">Sign Out</a></li>
        </ul>
    </div>
  )
}
