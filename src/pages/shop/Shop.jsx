import React from 'react'
import { PRODUCTS } from '/src/products'
import Product from './Product'
import './Shop.css'

function shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>SivaStoic Products</h1>
        </div>
        <div className='products'>
               {PRODUCTS.map((product)=>(
                <Product data={product}/>
               ))}
               
        </div>
    </div>
  )
}

export default shop