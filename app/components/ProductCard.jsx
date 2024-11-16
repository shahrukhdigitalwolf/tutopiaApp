import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { externalImageLoader } from '../lib/utils'
/* import { handleBokenImg } from '../lib/utils' */

function ProductCard(props) {

    return (
        <div className='border border-[#b5b5b5] p-3 max-w-full w-[300px] mx-auto relative'>
            <div className='pb-3'>
                <div className={`bg-[#FFCC00] text-[11px] text-center leading-[13px] w-[2.5rem] h-[2.5rem] flex justify-center flex-col rounded-full font-bold absolute right-0 top-0 ${props.discountStatus}`}
                    dangerouslySetInnerHTML={{ __html: props.discountPercent }}
                />
                <Image className='mx-auto' loader={externalImageLoader} src={props.image} alt={props.imageAlt || 'Tutopia Books'} width={200} height={300} />
            </div>
            <div>
                <span className='text-[#525252] text-[16px] text-center line-clamp-1'>{props.title}</span>
                <div className='flex justify-center items-center gap-x-3'>
                    <span className='text-[#056DB6] text-[15px]'>₹ {props.price}</span>

                    <span className={`text-[#525252] text-[12px] line-through ${props.discountStatus}`}>₹ {props.discountPrice}</span>

                </div>
            </div>
        </div>
    )
}

export default ProductCard