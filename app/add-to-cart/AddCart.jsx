
"use client"
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function AddCart() {
    const [qty, setQty] = useState(1);

    const handleChange = (event) => {
        setQty(event.target.value);
    };
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
        <div className='pb-8 border-b border-slate-200'>
            <h1 className='lg:text-[30px] text-[25px] font-semibold'>Shopping Cart</h1>
        </div>
        <div>
            <div className='flex gap-x-2 border-b border-slate-200 py-6'>
                <div className='w-[15%]'>
                    <Image src="/assets/img/shopping-cart.jpg" alt='' width={200} height={200} />
                </div> 
                <div className='w-[60%] flex justify-between flex-col p-3'>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-[70%]'>
                            <h3 className='text-[14px] lg:text-[17px] font-semibold'>Nomad Tumbler</h3>
                            <p className='text-[13px] mb-3'>White</p>
                        </div>
                        <div className='w-full lg:w-[30%] flex gap-x-3 items-center lg:block'>
                            <div>
                                <FormControl sx={{ mb: .6, minWidth: 86 }} size='small'>
                                    <InputLabel id="demo-simple-select-label">QTY</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={qty}
                                        label="Age"
                                        onChange={handleChange}
                                        >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <Button className='text-[14px] flex items-center capitalize' variant="text"> <span>Remove</span> <ClearIcon className='text-[17px]'/></Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end gap-1'>
                        <CheckIcon className='text-[#3bd427]' fontSize='small'/>
                        <span>stock</span>
                    </div>
                </div>
                <div className='w-[20%] p-3'>
                    <p className='text-[18px] text-end font-semibold'>$35.00</p>
                </div>
            </div>
            <div className='bg-[#f6f6f6] py-3 px-5 rounded-lg mt-6'>
                <div className='flex items-center justify-between border-b border-slate-300 py-3 px-1'>
                    <span className='text-[#4b5563]'>Subtotal</span>
                    <span className='text-[#4b5563] font-semibold'>$99.00</span>
                </div>
                <div className='flex items-center justify-between border-b border-slate-300 py-3 px-1'>
                    <span className='text-[#4b5563]'>Shipping</span>
                    <span className='text-[#4b5563] font-semibold'>$5.00</span>
                </div>
                <div className='flex items-center justify-between border-b border-slate-300 py-3 px-1'>
                    <span className='text-[#4b5563]'>Tax</span>
                    <span className='text-[#4b5563] font-semibold'>$8.32</span>
                </div>
                <div className='flex items-center justify-between py-3 px-1'>
                    <span className='text-[20px] font-semibold'>Order total</span>
                    <span className='text-[20px] font-semibold'>$112.32</span>
                </div>
            </div>
            <div className='px-1 my-3 flex justify-between items-center'>
                <Button href="/" endIcon={<ArrowRightAltIcon />}>Continue Shopping </Button>
                <Button variant="text" endIcon={<ArrowRightAltIcon />}>
                    Checkout
                </Button>
            </div> 
        </div>
        
    </div>
  )
}

export default AddCart