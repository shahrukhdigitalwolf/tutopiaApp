import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='bg-[#F7F7F7] px-4 lg:px-6'>
        <section className='py-6 max-w-[1440px] mx-auto'>
            <div className='flex flex-wrap gap-y-3'>
                <div className='w-full lg:w-[50%] px-2'>
                    <Image src='/assets/img/product-page.jpg' alt='' width={1200} height={1200}/>
                </div>
                <div className='w-full lg:w-[50%] px-2'>
                    <div className='flex gap-2 items-center'>
                        <Link className='text-[#525252]' href='/'>Travel</Link>/
                        <Link className='text-[#525252]' href='/'>Bag</Link>
                    </div>
                    <div className='mb-2'>
                        <h1 className='text-[20px] lg:text-[30px] font-semibold'>Everyday Ruck Snack</h1>
                    </div>
                    <div className='flex gap-2 items-center mb-2'>
                        <span className='border-r border-slate-400 pe-3 text-[20px] font-semibold'>$220</span> 
                        <Rating name="read-only" value={3.5} precision={0.5} size="small" readOnly />
                        <span className='text-[15px] text-[#525252]'>1642 review</span>
                    </div>
                    <div>
                        <p className='text-[#525252]'>
                            Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page