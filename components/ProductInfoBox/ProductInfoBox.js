
const ProductInfoBox = ({ className, title, show, children }) => {
    return (
        <div className={`product-${className} bg-white -mx-4 px-4 mb-6 overflow-hidden shadow-[0_1px_0_0_#e6e6e6] 
        ${show ? 'block visible' :'md:hidden md:invisible'}
        md:shadow-none md:m-0`}>
            <div className={`product-${className}__title mb-3 py-3 flex items-center gap-x-3 border-b border-gray-200 leading-5 md:hidden md:invisible`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 leading-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>

                <h3 className='text-sm leading-normal font-normal'>{title}</h3>
                <a href="#" className="flex items-center mr-auto gap-x-1 text-xs text-primary">
                    <span>بیشتر</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
            </div>
            <div className={`product-${className}__content mb-5 font-dana-fanum`}>
                {children}
            </div>
        </div>
    )
}

export default ProductInfoBox