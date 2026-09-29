import React from "react"


function ProductsSkeleton() {

    const products = Array(8).fill(null)


    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}

                <div className="h-4 w-28 rounded-full bg-[#dce3dc]" />

                <div className="mt-4 h-12 w-72 max-w-full rounded-xl bg-[#d5ddd5]" />

                <div className="mt-4 h-4 w-full max-w-md rounded-full bg-[#e1e7df]" />


                {/* Filters */}

                <div className="mt-8 flex gap-3 overflow-hidden">

                    <div className="h-10 w-24 shrink-0 rounded-full bg-[#dce3dc]" />
                    <div className="h-10 w-28 shrink-0 rounded-full bg-[#dce3dc]" />
                    <div className="h-10 w-24 shrink-0 rounded-full bg-[#dce3dc]" />
                    <div className="h-10 w-28 shrink-0 rounded-full bg-[#dce3dc]" />

                </div>


                {/* Products */}

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">

                    {products.map((_, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl border border-[#e1e5df] bg-[#f9faf7]"
                        >

                            <div className="aspect-4/5 bg-[#e1e7df]" />

                            <div className="space-y-3 p-4 sm:p-5">

                                <div className="h-5 w-4/5 rounded-full bg-[#dce3dc]" />

                                <div className="h-4 w-1/2 rounded-full bg-[#e5eae4]" />

                                <div className="h-5 w-1/3 rounded-full bg-[#d5ddd5]" />

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}


export default ProductsSkeleton