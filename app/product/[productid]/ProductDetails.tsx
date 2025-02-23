"use client"
import Button from '@/app/components/Button';
import ProductImage from '@/app/components/products/ProductImage';
import SetColor from '@/app/components/products/SetColor';
import SetQuantity from '@/app/components/products/SetQuantity';
import { useCart } from '@/public/hooks/useCart';
import {  Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState , useCallback, useEffect} from 'react'
import { MdCheckCircle } from 'react-icons/md';

interface ProductDetailsProps{
    product:any;
}
export type CartProductType = {
  id: string,
  name: string,
  description: string,
  brand:string,
  selectedImg:SelectedImgType,
  quantity:number,
  price:number,
}

export type SelectedImgType ={
   color: string,
   colorCode: string,
   image:string,
}
const Horizontal =() =>{
    return <hr className='w-[30% my-2]' />
   }
const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {
const {handleAddProductToCart, cartProducts}=useCart()
const [isProductInCart, setIsProductInCart] = useState(false)  
const [cartProduct , setCartProduct] = useState({
    id: product.id,
  name: product.name,
  description:product.description ,
  brand:product.brand,
   selectedImg: {...product.images},
  quantity:1,
  price:product.price,
  })
const router = useRouter()
console.log(cartProducts)

useEffect(()=> {
  setIsProductInCart(false);
  if(cartProducts){
    const existingIndex = cartProducts.findIndex(
      (item) => item.id === product.id
    )
  if(existingIndex > -1){
    setIsProductInCart(true);
  }
  }
}, [cartProducts])
    // const productRating = product.reviews.reduce((acc:number , item:any) => 
    //     item.rating * acc, 0) / product.reviews.length

    const handleColorSelect =useCallback
      ((value: SelectedImgType) => {
        setCartProduct((prev) =>{
          return {
            ...prev , selectedImg:value
          }
        })
      },
      [cartProduct.selectedImg])
     const handleQuantityIncrease = useCallback(() => {
      if (cartProduct.quantity === 200 ) {
        return;
      }
      setCartProduct ((prev) => {
        return { ...prev , quantity: ++prev.quantity}
      })
     } , [cartProduct])
     const handleQuantityDecrease = useCallback(() => {
      if (cartProduct.quantity === 1) {
        return;
      }
      
      setCartProduct ((prev) => {
        return { ...prev , quantity: --prev.quantity}
      })
     } , [cartProduct])
     return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
        <ProductImage cartProduct={cartProduct}
        product={product} handleColorSelect={handleColorSelect}/>
        <div className='flex flex-col gap-1 text-slate-500 text-sm'>
            <h2 className='text-3xl font-medium text-slate-700 '>{product.name}</h2>
            <div className='flex items-center gap-2'> 
            {/* <Rating value={productRating} readOnly /> */}
             </div>
             <Horizontal/>
             <div className='text-justify'>{product.description}</div>
             <div className=''>
                <span className='font-semibold'>{product.category}</span>
             </div>
             <div className=''>
                <span className='font-semibold'>{product.brand}</span>
             </div>
             <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                {product.inStock ? "In stock": "out of stock"}
                
             </div>
             <Horizontal/>
             {isProductInCart ? ( <>
             <p className='mb-2 text-slate-500 flex items-center gap-1'> <MdCheckCircle className='text-teal-400 ' size={20}/><span>Product added to cart</span></p>
             <div className='max-w-[300px]'>
              <Button label='View Cart' 
              outline onClick={()=> {
                router.push("/cart")
              }} />
             </div>
             </>)
             : (<>
             <SetColor cartProduct={cartProduct}
             images={product.image}
             handleColorSelect={handleColorSelect} />
             <Horizontal/>
             <SetQuantity
             cartProduct={cartProduct}
             handleQtyDecrease={handleQuantityDecrease}
             handleQtyIncrease={handleQuantityIncrease} />
             <Horizontal/>
             <div className='max-w-[300px]'>
              <Button label='Add to Cart' 
              onClick={() => handleAddProductToCart(cartProduct)} />
             </div>
             
             </>)}
             
        </div>
      
    </div>
  )
}

export default ProductDetails
