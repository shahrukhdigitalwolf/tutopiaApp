import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='bg-[#F7F7F7] px-4 lg:px-6'>
        <section className='py-6 mx-auto'>
            <div className='container mx-auto bg-[#FFFFFF] py-3 lg:py-6 px-3 lg:px-6'>
                <div className='flex flex-wrap gap-y-3'>
                    <div className='w-full lg:w-[40%] px-2'>
                        <Image src='/assets/img/product-page.jpg' alt='' width={800} height={800}/>
                    </div>
                    <div className='w-full lg:w-[60%] px-2'>
                        <div className='flex gap-2 items-center'>
                            <Link className='text-[#525252]' href='/'>Travel</Link>/
                            <Link className='text-[#525252]' href='/'>Bag</Link>
                        </div>
                        <div className='mb-2'>
                            <h1 className='text-[20px] lg:text-[30px] font-semibold'>Everyday Ruck Snack</h1>
                        </div>
                        <div className='flex gap-2 items-center mb-2'>
                            <span className='border-r border-slate-400 pe-3 text-[20px] font-semibold'>₹ 3999.00</span> 
                            <span className='text-[15px] text-[#525252] line-through'>₹ 7999.00</span>
                            <span className='text-[15px] text-[#518940]'>50% off</span>
                        </div>
                        <div className='max-w-full w-[700px]'>
                            <p className='text-[#525252]'>
                                Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.
                            </p>
                        </div>
                        <div className='my-3'>
                            <div className='flex items-end gap-2'>
                                <TextField id="standard-basic" label="Enter pincode code" variant="standard" sx={{width:'160px'}}/>
                                <Button className='bg-[#FFCC00] text-[#000] text-[10px] lg:text-[12px] px-2 lg:px-5 py-2.5'>Check Delivery</Button>
                            </div>
                            <small>Your pincode is eligible
                            for the delivery of this product</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page