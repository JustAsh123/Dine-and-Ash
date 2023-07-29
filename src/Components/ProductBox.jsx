import React, { useEffect } from 'react'
import './ProductBox.css'
import ProductCard from './ProductCard'

const ProductBox = ({products, filter,sort}) => {
  const options = ["Featured","Price: High to Low","Rating: High to Low","Price: Low to High","Rating: Low to High"]

  if (sort==options[0]){
    let sortedProducts = products
    sortedProducts.sort((b,a)=>b.id-a.id)
    return (
      <div className='product-box'>
      {sortedProducts.map((product)=> <ProductCard key={product.id} product={product} filter={filter}/>)}
      </div>
    )
  }else if(sort==options[1]){
    let sortedProducts = products
    sortedProducts.sort((a,b)=>b.price-a.price)
    return (
      <div className='product-box'>
      {sortedProducts.map((product)=> <ProductCard key={product.id} product={product} filter={filter}/>)}
      </div>
    )
  }else if(sort==options[3]){
    let sortedProducts = products
    sortedProducts.sort((a,b)=>a.price-b.price)
    return (
      <div className='product-box'>
      {sortedProducts.map((product)=> <ProductCard key={product.id} product={product} filter={filter}/>)}
      </div>
    )
  }else if(sort==options[2]){
    let sortedProducts = products
    sortedProducts.sort((b,a)=>a.rating-b.rating)
    return (
      <div className='product-box'>
      {sortedProducts.map((product)=> <ProductCard key={product.id} product={product} filter={filter}/>)}
      </div>
    )
  }
  else if(sort==options[4]){
    let sortedProducts = products
    sortedProducts.sort((a,b)=>a.rating-b.rating)
    return (
      <div className='product-box'>
      {sortedProducts.map((product)=> <ProductCard key={product.id} product={product} filter={filter}/>)}
      </div>
    )
  }
}

export default ProductBox