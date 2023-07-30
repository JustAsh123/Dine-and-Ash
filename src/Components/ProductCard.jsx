import React, { useState, useEffect } from 'react';
import './ProductCard.css'

const ProductCard = ({product,filter}) => {
  
  /* const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    // Dynamically import the image based on product.image_link
    const imagePath = `./images/${product.category}/${product.image_link}`;

    // Use require function to dynamically import the image
    import(imagePath)
      .then((image) => setImageSrc(image.default))
      .catch((error) => console.error('Error loading image:', error));
  }, []); */
  
  
    if (filter=="all"){
      return(
        <div className='product-card'>
        <img src={product.image_link}></img>
        <div className='details'>
        <p className='title'>{product.title}</p>
        <p className='rating'><i className="fa-solid fa-star star"></i>{product.rating}</p>
        <p className='price'>${product.price}</p>
        </div>
        
      </div>
      )
    }else if(product.category==filter){
      return(
        <div className='product-card'>
        <img src={imageSrc}></img>
        <div className='details'>
        <p className='title'>{product.title}</p>
        <p className='rating'><i className="fa-solid fa-star star"></i>{product.rating}</p>
        <p className='price'>${product.price}</p>
        </div>
        
      </div>
      )
    }
}

export default ProductCard