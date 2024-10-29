'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section>
        <div className='px-4 lg:px-8'>
          <Splide aria-label="My Favorite Images">
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
