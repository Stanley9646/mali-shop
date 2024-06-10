import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='flex items-center flex-col'>
        <Container>
            <div className='flex flex-row'>
           <p> &copy; {new Date().getFullYear()} -2024 MALI STORE - All rights reserved</p>
            
            </div>
            <div className='flex flex-row gap-2 mt-6  mb-4 justify-between'>
                Let's connect  :
                <Link href="#">
                    <AiFillTwitterCircle size={24} />
                </Link>
                <Link href="#">
                    <MdFacebook size={24} />
                </Link>
                <Link href="#">
                    <AiFillInstagram size={24} />
                </Link>
            </div>
            </Container>
        </div>
  )
}

export default Footer
