import { useState } from 'react'

const ProductCard = ({
    Image,
    Name = "Essential Tee",
    Price = "₹ 29",
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            
            <div
                onClick={() => setIsModalOpen(true)}
                className="group w-full max-w-72 cursor-pointer overflow-hidden rounded-2xl border border-[#e1e5df] bg-[#f9faf7]"
            >

                
                <div className="relative h-72 w-full overflow-hidden bg-[#e9ebe5]">

                    <img
                        src={Image}
                        alt={Name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-[#152a23]/0 transition-all duration-500 group-hover:bg-[#152a23]/10" />

                    
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#152a23] shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    >
                        <i className="ri-heart-line text-base"></i>
                    </button>

                    
                    <div className="absolute bottom-5 left-0 flex w-full translate-y-12 justify-center opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">

                        <button
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 rounded-full bg-[#17382b] px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#102a20]"
                        >
                            <span>
                                Add to Cart
                            </span>

                            <i className="ri-shopping-cart-line text-sm"></i>
                        </button>

                    </div>

                </div>

                
                <div className="px-5 py-5">

                    <h3 className="text-lg font-semibold text-[#152a23]">
                        {Name}
                    </h3>

                    <p className="mt-2 text-base font-medium text-[#152a23]">
                        {Price}
                    </p>

                </div>

            </div>


            {/* popup */}
            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-1 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                >

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative h-[70vh] w-[80%] overflow-hidden rounded-3xl bg-[#f9faf7] shadow-2xl"
                    >

                        
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#152a23] shadow-md transition hover:scale-105"
                        >
                            <i className="ri-close-line text-xl"></i>
                        </button>

                        
                        <div className="flex h-full w-full items-center justify-center">

                            <div className="text-center">

                                <h2 className="text-3xl font-semibold text-[#152a23]">
                                    {Name}
                                </h2>

                                <p className="mt-3 text-lg text-[#152a23]">
                                    {Price}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            )}
        </>
    )
}

export default ProductCard