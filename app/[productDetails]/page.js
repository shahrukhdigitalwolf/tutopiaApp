"use client"
import { Button, TextField } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { baseUrl, externalImageLoader } from '../lib/utils'
import ProductDetailsSkeleton from './ProductDetailsSkeleton'

function ProductDetails() {

    const[product, setProduct] = useState();
    const username = "TNCTutopiaEcommApiUser";
    const password = "TNCTutopiaecomApi@32145@";

    const slug = usePathname(); 
    const productId = slug.slice(1);
    
    useEffect(()=>{
        const productDetailsApi = async () =>{
        const res = await fetch(`https://dwecommapi.tutopiacrm.in/api/v1/get_products_byid?product_id=${productId}`,{
            method: "GET",
            headers: {
            'Authorization': 'Basic ' + btoa(username + ":" + password),
            'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        setProduct(data)
        }
        productDetailsApi();
    },[])

    if(!product){
        return <ProductDetailsSkeleton/>
    }

  return (
    <main className='bg-[#F7F7F7] px-4 lg:px-6'>
        <section className='py-6 mx-auto'>
            <div className='container mx-auto bg-[#FFFFFF] py-3 lg:py-6 px-3 lg:px-6'>
                <div className='flex flex-wrap gap-y-3'>
                    <div className='w-full lg:w-[35%] px-2'>
                        <Image src={`${baseUrl}${product?.data[0]?.product_imageurl}`} loader={externalImageLoader} alt='' width={800} height={800}/>
                    </div>
                    <div className='w-full lg:w-[65%] px-2'>
                        {/* <div className='flex gap-2 items-center'>
                            <Link className='text-[#525252]' href='/'>Travel</Link>/
                            <Link className='text-[#525252]' href='/'>Bag</Link>
                        </div> */}
                        <div className='mb-2'>
                            <h1 className='text-[20px] lg:text-[30px] font-semibold'>{product?.data[0]?.product_name}</h1>
                        </div>
                        <div className='flex gap-2 items-center mb-2'>
                            <span className='border-r border-slate-400 pe-3 text-[20px] font-semibold'>₹ {product?.data[0]?.Product_MRP}</span> 
                            <span className='text-[15px] text-[#525252] line-through'>₹ {product?.data[0]?.Product_Discount}</span>
                            <span className='text-[15px] text-[#518940]'>{product?.data[0]?.Product_Discount/product?.data[0]?.Product_MRP*100}% off</span>
                        </div>
                        <div className='max-w-full w-[700px]'>
                            <p className='text-[#525252] text-[15px]'>
                                {product?.data[0]?.product_description}
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

export default ProductDetails