import { Skeleton } from '@mui/material'

function ProductDetailsSkeleton() {
  return (
    <main className='bg-[#F7F7F7] px-4 lg:px-6'>
        <section className='py-6 mx-auto'>
            <div className='container mx-auto bg-[#FFFFFF] py-3 lg:py-6 px-3 lg:px-6'>
                <div className='flex flex-wrap gap-y-3'>
                    <div className='w-full lg:w-[40%] px-2'>
                        <Skeleton variant="rectangular" width={350} height={400} />
                    </div>
                    <div className='w-full lg:w-[60%] px-2'>
                        <div className='mb-2'>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </div>
                        <div className='flex gap-2 items-center mb-2'>
                        </div>
                        <div className='max-w-full w-[700px]'>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </div>
                        <div className='my-3'>
                            <div className='flex items-end gap-2'>
                                <Skeleton variant="rectangular" width={210} height={60} />
                                <Skeleton variant="rectangular" width={210} height={60} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProductDetailsSkeleton