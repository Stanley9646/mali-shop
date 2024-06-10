import Container from '@/app/components/Container';
import React from 'react'
import { products } from '@/utils/product';
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
interface IPrams {
    productId?: String;
}

const Product = ({ params} : {params :IPrams}) => {
    console.log("params", params)



    

  return (
    <div>
      <Container>
        <ProductDetails product={products}/>
      <div className='flex flex-col mt-20 gap-4'>
        <div>Add Rating</div>
        
        <ListRating product={products} />
      </div>
      
      </Container>
    </div>
  )
}

export default Product
