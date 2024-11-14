
"use client"
import { Button } from '@mui/material'
import Image from 'next/image'

function AddCart() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
        <div className='pb-8'>
            <h1 className='lg:text-[30px] text-[25px] font-semibold'>Shopping Cart</h1>
        </div>
        <div>
            <div className='flex gap-x-2 border-b border-t border-slate-200 py-6'>
                <div className='w-[15%]'>
                    <Image src="/assets/img/shopping-cart.jpg" alt='' width={200} height={200} />
                </div> 
                <div className='w-[60%] flex justify-between flex-col p-3'>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-[70%]'>
                            <h3 className='text-[14px] lg:text-[17px] font-semibold'>Nomad Tumbler</h3>
                            <p className='text-[13px]'>White</p>
                        </div>
                        <div className='w-full lg:w-[30%] flex gap-x-3 items-center lg:block'>
                            <p>qty</p>
                            <form action="#">
                                <input type="text" />
                            </form>
                            <Button variant="text">Remove</Button>
                        </div>
                    </div>
                    <div>
                        <span>stock</span>
                    </div>
                </div>
                <div className='w-[20%] p-3'>
                    <p className='text-[20px] text-end font-semibold'>$35.00</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AddCart