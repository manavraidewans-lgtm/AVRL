import React from "react"


function HomeSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] animate-pulse">

            {/* Hero */}

            <section className="px-4 pt-24 sm:px-8 lg:px-12 lg:pt-28">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#e1e7df]">

                    <div className="flex min-h-130 items-end p-6 sm:p-10 lg:min-h-155 lg:p-16">

                        <div className="w-full max-w-2xl">

                            <div className="h-5 w-28 rounded-full bg-[#cfd8cf]" />

                            <div className="mt-5 h-12 w-full max-w-xl rounded-2xl bg-[#cfd8cf] sm:h-16" />

                            <div className="mt-3 h-12 w-4/5 max-w-lg rounded-2xl bg-[#cfd8cf] sm:h-16" />

                            <div className="mt-6 h-5 w-full max-w-md rounded-full bg-[#d5ddd5]" />

                            <div className="mt-3 h-5 w-4/5 max-w-sm rounded-full bg-[#d5ddd5]" />

                            <div className="mt-8 h-12 w-36 rounded-full bg-[#c7d1c7]" />

                        </div>

                    </div>

                </div>

            </section>


            {/* Categories */}

            <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="h-4 w-32 rounded-full bg-[#dce3dc]" />

                    <div className="mt-4 h-10 w-64 rounded-xl bg-[#d5ddd5]" />


                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

                        {[1, 2, 3, 4].map((item) => (

                            <div
                                key={item}
                                className="overflow-hidden rounded-3xl bg-white"
                            >

                                <div className="aspect-square bg-[#e1e7df]" />

                                <div className="p-4">

                                    <div className="h-5 w-3/4 rounded-full bg-[#dce3dc]" />

                                    <div className="mt-3 h-4 w-1/2 rounded-full bg-[#e5eae4]" />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* New Arrivals */}

            <section className="px-4 pb-20 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-7xl">

                    <div className="h-4 w-28 rounded-full bg-[#dce3dc]" />

                    <div className="mt-4 h-10 w-60 rounded-xl bg-[#d5ddd5]" />

                    <div className="mt-3 h-4 w-80 max-w-full rounded-full bg-[#e1e7df]" />


                    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

                        {[1, 2, 3, 4].map((item) => (

                            <div
                                key={item}
                                className="overflow-hidden rounded-3xl bg-white"
                            >


                                <div className="space-y-3 p-4">

                                    <div className="h-5 w-3/4 rounded-full bg-[#dce3dc]" />

                                    <div className="h-4 w-1/2 rounded-full bg-[#e5eae4]" />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>
    )
}


export default HomeSkeleton