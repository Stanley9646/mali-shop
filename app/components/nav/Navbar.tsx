import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Redressed } from 'next/font/google'

const redressed = Redressed({subsets: ['latin'], weight:["400"]})
const Navbar = () => {
  return (
    <div className='sticky top-0 w-full z-30 shadow-sm bg-slate-200'>
      <div className='py-4 border-b-[1px]'>
        <Container>
            <div className='flex items-center justify-between gap-3 md:gap-0'>
                <Link className={`${redressed.className} font-bold text-2xl` } href ="/">MALI- STORE</Link>
                <div className='hidden md:block '>Search</div>
            <div className='flex items-center gap-8 md:gap-12'>
                <div>CartCount</div>
            <div>UserMenu</div></div>
            </div>
        </Container>

      </div>
    </div>
  )
}

export default Navbar
