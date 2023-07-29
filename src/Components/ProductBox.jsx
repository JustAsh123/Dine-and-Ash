import React from 'react'
import './ProductBox.css'
import ProductCard from './ProductCard'

const ProductBox = ({products, filter}) => {
  return (
    <div className='product-box'>
    {products.map((product)=> <ProductCard product={product} filter={filter}/>)}
    </div>
  )
}

export default ProductBox