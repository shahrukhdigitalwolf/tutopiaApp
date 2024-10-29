'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section>
        <div className='px-4 lg:px-8'>
          <Splide
            options={ {
              rewind: true,
              perPage: 4,
              type   : 'loop',
              gap   : '1rem',
              drag   : 'free',
              classes: {
                arrows: 'splide__arrows your-class-arrows cds',
                arrow : 'splide__arrow your-class-arrow',
                prev  : 'splide__arrow--prev your-class-prev',
                next  : 'splide__arrow--next your-class-next',
              },
            } }
            aria-label="banner slider"
          >
            <SplideSlide>
              <Image src="/assets/img/banner-1.jpg" alt="Image 1" width={1860} height={682}/>
            </SplideSlide>
            <SplideSlide>
              <Image src="/assets/img/banner-1.jpg" alt="Image 1" width={1860} height={682}/>
            </SplideSlide>
            <SplideSlide>
              <Image src="/assets/img/banner-1.jpg" alt="Image 1" width={1860} height={682}/>
            </SplideSlide>
            <SplideSlide>
              <Image src="/assets/img/banner-1.jpg" alt="Image 1" width={1860} height={682}/>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </main>
  );
}
