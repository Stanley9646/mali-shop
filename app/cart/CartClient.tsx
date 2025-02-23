"use client"
import { useCart } from '@/public/hooks/useCart'
import Link from 'next/link'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import Heading from '../components/Heading'
import Button from '../components/Button'
import ItemContent from './ItemContent'

const CartClient = () => {
  const {cartProducts} = useCart()

  if (!cartProducts || cartProducts.length === 0){
 return (
    <div>
        <div className='flex flex-col items-center'>Your cart is empty.</div>
        <div className='text-2xl'>
            <Link href={"/"} className="
            text-slate-500 flex items-center mt-2 gap-1
            ">
                <MdArrowBack/>
                <span>Start Shopping</span>
            </Link>
            
        </div>
    </div>
 )
  }
    return (
    <div>
        <Heading title='Shopping Cart'/>
      <div className='grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8'> 
        <div className='grid-cols-2 justify-self-start'>Product</div>
        <div className='justify-self-center'>Price</div>
        <div className='justify-self-center'>Quantity</div>
        <div className='justify-self-end'>Total</div>
      </div>
      <div>
        {cartProducts && cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item}/>
        })}
      </div>
      <div className='border-t-[1.5px] border-slate-200 py-4 gap-4 flex justify-between'>
        <div className='w-90px'>
            <Button label='Clear Cart' onClick={() => {}}  small outline/>
        </div>
        <div className='text-sm flex flex-col gap-1 items-start'>
            <div className='flex justify-between w-full text-base font-semibold'>
                
                <span>Sub Total</span>
                <span>4000</span>
                </div>
                <p className='text-slate-500'>Taxes and shipping calculated at checkout</p>
           <Button label="Checkout" onClick={()=> {}}/>
           <Link href={"/"} className="
            text-slate-500 flex items-center mt-2 gap-1
            ">
                <MdArrowBack/>
                <span>Continue Shopping</span>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default CartClient
