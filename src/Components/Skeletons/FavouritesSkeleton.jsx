import React from "react"


function FavouritesSkeleton() {

    const products = Array(4).fill(null)


    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-7xl">

                <div className="h-12 w-64 max-w-full rounded-xl bg-[#d5ddd5]" />

                <div className="mt-3 h-4 w-72 max-w-full rounded-full bg-[#e1e7df]" />


                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">

                    {products.map((_, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl border border-[#e1e5df] bg-[#f9faf7]"
                        >

                            

                            <div className="space-y-3 p-4">

                                <div className="h-5 w-3/4 rounded-full bg-[#dce3dc]" />

                                <div className="h-4 w-1/2 rounded-full bg-[#e5eae4]" />

                                <div className="flex items-center justify-between">

                                    <div className="h-5 w-20 rounded-full bg-[#d5ddd5]" />

                                    <div className="h-9 w-9 rounded-full bg-[#dce3dc]" />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}


export default FavouritesSkeleton