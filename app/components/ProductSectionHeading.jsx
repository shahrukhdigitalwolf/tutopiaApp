

function ProductSectionHeading(props) {
  return (
    <div className='mb-3'>
        <h2 className="relative text-[15px] font-bold before:content-[''] before:w-[50%] before:h-[3px] before:absolute before:-bottom-1 before:left-0 before:bg-[#FFCC00] inline-block">{props.productsHeadline}</h2>
    </div>
  )
}

export default ProductSectionHeading