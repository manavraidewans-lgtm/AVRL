import { useState } from "react"

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
                className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-[#e1e5df] bg-[#f9faf7]"
            >
                <div className="relative h-56 overflow-hidden bg-[#e9ebe5] sm:h-64 md:h-72 lg:h-80">
                    <img
                        src={Image}
                        alt={Name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#152a23]/0 transition-all duration-500 group-hover:bg-[#152a23]/10" />

                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#152a23] shadow-sm sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                    >
                        <i className="ri-heart-line text-sm" />
                    </button>

                    <div className="absolute bottom-4 left-0 flex w-full justify-center sm:translate-y-12 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                        <button
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 rounded-full bg-[#17382b] px-3 py-2 text-[11px] font-semibold text-white sm:px-4 sm:py-2.5 sm:text-xs"
                        >
                            Add to Cart
                            <i className="ri-shopping-cart-line text-sm" />
                        </button>
                    </div>
                </div>

                <div className="px-3 py-4 sm:px-4 md:px-5">
                    <h3 className="text-sm font-semibold text-[#152a23] sm:text-base lg:text-lg">
                        {Name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#152a23] sm:mt-2 sm:text-base">
                        {Price}
                    </p>
                </div>
            </div>

            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl bg-[#f9faf7] p-6 shadow-2xl sm:p-8"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#152a23] shadow-md sm:right-5 sm:top-5 sm:h-10 sm:w-10"
                        >
                            <i className="ri-close-line text-xl" />
                        </button>

                        <div className="flex min-h-[40vh] items-center justify-center text-center">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#152a23] sm:text-3xl">
                                    {Name}
                                </h2>

                                <p className="mt-2 text-base text-[#152a23] sm:mt-3 sm:text-lg">
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