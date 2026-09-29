import React from "react"


function CartSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-7xl">

                <div className="h-12 w-48 rounded-xl bg-[#d5ddd5]" />


                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

                    {/* Cart Items */}

                    <div className="space-y-4">

                        {[1, 2, 3, 4, 5].map((item) => (

                            <div
                                key={item}
                                className="flex gap-4 rounded-3xl bg-white p-4"
                            >

                                <div className="h-28 w-24 shrink-0 rounded-2xl bg-[#e1e7df] sm:h-36 sm:w-32" />

                                <div className="flex flex-1 flex-col justify-center">

                                    <div className="h-5 w-3/4 max-w-xs rounded-full bg-[#dce3dc]" />

                                    <div className="mt-3 h-4 w-24 rounded-full bg-[#e5eae4]" />

                                    <div className="mt-5 h-9 w-24 rounded-full bg-[#e1e7df]" />

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* Summary */}

                    <div className="h-fit rounded-3xl bg-[#e5ece0] p-6 sm:p-8">

                        <div className="h-7 w-40 rounded-xl bg-[#cbd5cb]" />

                        <div className="mt-8 space-y-5">

                            <div className="flex justify-between">

                                <div className="h-4 w-20 rounded-full bg-[#d3dbd3]" />

                                <div className="h-4 w-20 rounded-full bg-[#d3dbd3]" />

                            </div>

                            <div className="flex justify-between">

                                <div className="h-4 w-24 rounded-full bg-[#d3dbd3]" />

                                <div className="h-4 w-16 rounded-full bg-[#d3dbd3]" />

                            </div>

                            <div className="h-px bg-[#cbd5cb]" />

                            <div className="flex justify-between">

                                <div className="h-5 w-20 rounded-full bg-[#cbd5cb]" />

                                <div className="h-5 w-24 rounded-full bg-[#cbd5cb]" />

                            </div>

                            <div className="h-12 w-full rounded-full bg-[#cbd5cb]" />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default CartSkeleton