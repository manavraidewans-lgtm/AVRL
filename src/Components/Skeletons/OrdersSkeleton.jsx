import React from "react"


function OrdersSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-6xl">

                {/* Heading */}

                <div className="h-12 w-56 max-w-full rounded-xl bg-[#d5ddd5]" />

                <div className="mt-3 h-4 w-72 max-w-full rounded-full bg-[#e1e7df]" />


                {/* Orders */}

                <div className="mt-10 space-y-5">

                    {[1, 2, 3, 4].map((item) => (

                        <div
                            key={item}
                            className="rounded-3xl bg-white p-5 sm:p-6"
                        >

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                                <div className="h-24 w-24 shrink-0 rounded-2xl bg-[#e1e7df]" />

                                <div className="flex-1">

                                    <div className="h-5 w-48 max-w-full rounded-full bg-[#dce3dc]" />

                                    <div className="mt-3 h-4 w-32 rounded-full bg-[#e5eae4]" />

                                    <div className="mt-4 h-4 w-40 rounded-full bg-[#e5eae4]" />

                                </div>


                                <div className="flex flex-col gap-3 sm:items-end">

                                    <div className="h-5 w-24 rounded-full bg-[#d5ddd5]" />

                                    <div className="h-9 w-28 rounded-full bg-[#e1e7df]" />

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}


export default OrdersSkeleton