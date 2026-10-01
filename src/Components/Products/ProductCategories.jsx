import React from "react"

const ProductCategories = ({ category, setCategory }) => {

    return (
        <div className="flex w-full justify-center px-4 py-6">

            <div className="flex items-center gap-8">

                {/* All Products */}
                <button
                    onClick={() => setCategory("All")}
                    className={`relative pb-3  ${
                        category === "All"
                            ? "text-[#104129] font-bold"
                            : "text-[#65736b]"
                    }`}
                >
                    All Products

                    {category === "All" && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#17382b]" />
                    )}
                </button>


                {/* Men */}
                <button
                    onClick={() => setCategory("Men")}
                    className={`relative pb-3 ${
                        category === "Men"
                            ? "text-[#133c29] font-bold"
                            : "text-[#65736b]"
                    }`}
                >
                    Men

                    {category === "Men" && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#17382b]" />
                    )}
                </button>


                {/* Women */}
                <button
                    onClick={() => setCategory("Women")}
                    className={`relative pb-3 ${
                        category === "Women"
                            ? "text-[#133c29] font-bold"
                            : "text-[#65736b]"
                    }`}
                >
                    Women

                    {category === "Women" && (
                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#133c29]" />
                    )}
                </button>

            </div>

        </div>
    )
}

export default ProductCategories

