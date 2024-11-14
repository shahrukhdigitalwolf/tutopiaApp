'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import ProductCard from './components/ProductCard';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductSectionHeading from './components/ProductSectionHeading';
import { handleBokenImg } from './lib/utils';

export default function Home() {

  const[product, setProduct] = useState([]);

  useEffect(()=>{
    const homeProductApi = async () =>{
      const res = await fetch(`/assets/data/homeData.json`)
      const data = await res.json();
      setProduct(data)
    }
    homeProductApi();
  },[])
  

  return (
    <main className='bg-[#F7F7F7] px-4 lg:px-6'>
      <section className='pt-6'>
        <div className='container mx-auto'>
          <Splide
            options={ {
              perPage: 1,
              type   : 'loop',
              classes: {
                arrows: 'hidden',
              },
            } }
            aria-label="banner slider"
          >
            {
              product?.banner?.map((ele,i)=>{
                return(
                  <SplideSlide key={i}>
                    <Image src={ele.image} onError={handleBokenImg} alt={ele.imageAlt || "tutopia banner image"} width={1860} height={682}/>
                  </SplideSlide>
                )
              })
            }
          </Splide>
        </div>
      </section>
      <section className='pt-6 pb-6'>
        <div className='container mx-auto bg-[#FFFFFF] py-3 lg:py-6 px-3 lg:px-6'>
          <ProductSectionHeading productsHeadline='TOP SELLING PRODUCTS' />
          <div>
            <Splide
              options={ {
                perPage: 7,
                gap: '15px',
                drag:'free',
                pagination:false,
                classes: {
                  arrows: 'splide__arrows absolute right-0 -top-[25px] w-[105px]',
                  arrow : 'splide__arrow bg-[#056DB6]',
                  prev  : 'splide__arrow--prev your-class-prev',
                  next  : 'splide__arrow--next your-class-next',
                },
                breakpoints: {
                  640: {
                    perPage: 2,
                  },
                  992:{
                    perPage:4,
                  },
                  1440:{
                    perPage:5,
                  }

                }
              } }
              aria-label="banner slider"
            >
              {
                product?.topSelling?.map((ele,i)=>{
                  return(
                    <SplideSlide key={i}>
                        <ProductCard 
                          image={ele.image} 
                          imageAlt={ele.imageAlt} 
                          title={ele.title} 
                          price={ele.price} 
                          discountPrice={ele.discountPrice} 
                          discountPercent={ele.discountPercent} 
                          discountStatus={ele.discountStatus}
                          productUrl={ele.url} 
                        />
                    </SplideSlide>
                  )
                })
              }
            </Splide>
          </div>
        </div>
      </section>
      <section className='pt-6 pb-6'>
        <div className='container mx-auto bg-[#FFFFFF] py-3 lg:py-6 px-3 lg:px-6'>
          <ProductSectionHeading productsHeadline='VIDEO TUTORIALS' />
          <div>
            <Splide
              options={ {
                perPage: 7,
                gap: '15px',
                drag:'free',
                pagination:false,
                classes: {
                  arrows: 'splide__arrows absolute right-0 -top-[25px] w-[105px]',
                  arrow : 'splide__arrow bg-[#056DB6]',
                  prev  : 'splide__arrow--prev your-class-prev',
                  next  : 'splide__arrow--next your-class-next',
                },
                breakpoints: {
                  640: {
                    perPage: 2,
                  },
                  992:{
                    perPage:4,
                  },
                  1440:{
                    perPage:5,
                  }

                }
              } }
              aria-label="banner slider"
            >
              {
                product?.videoTutorial?.map((ele,i)=>{
                  return(
                    <SplideSlide key={i}>
                        <ProductCard 
                          image={ele.image} 
                          imageAlt={ele.imageAlt} 
                          title={ele.title} 
                          price={ele.price} 
                          discountPrice={ele.discountPrice} 
                          discountPercent={ele.discountPercent} 
                          discountStatus={ele.discountStatus} 
                          productUrl={ele.url}
                        />
                    </SplideSlide>
                  )
                })
              }
            </Splide>
          </div>
        </div>
      </section>
    </main>
  );
}
