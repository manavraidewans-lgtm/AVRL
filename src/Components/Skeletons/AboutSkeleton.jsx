import React from "react"


function AboutSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] animate-pulse">

            {/* Hero */}

            <section className="px-4 pt-24 sm:px-8 lg:px-12 lg:pt-28">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl">

                    <div className="grid min-h-150 bg-[#e1e7df] lg:grid-cols-2">

                        {/* Image */}

                        <div className="min-h-75 bg-[#d4ddd4] lg:min-h-full" />


                        {/* Content */}

                        <div className="flex flex-col justify-end bg-[#e5ece0] p-6 sm:p-10 lg:p-16">

                            <div className="h-4 w-24 rounded-full bg-[#cbd5cb]" />

                            <div className="mt-5 h-12 w-full max-w-lg rounded-2xl bg-[#cbd5cb]" />

                            <div className="mt-3 h-12 w-4/5 max-w-md rounded-2xl bg-[#cbd5cb]" />

                            <div className="mt-7 h-4 w-full max-w-lg rounded-full bg-[#d3dbd3]" />

                            <div className="mt-3 h-4 w-full max-w-md rounded-full bg-[#d3dbd3]" />

                            <div className="mt-3 h-4 w-3/4 max-w-sm rounded-full bg-[#d3dbd3]" />

                        </div>

                    </div>

                </div>

            </section>


            {/* Story */}

            <section className="px-4 py-20 sm:px-8 lg:px-12 lg:py-28">

                <div className="mx-auto max-w-5xl">

                    <div className="h-4 w-28 rounded-full bg-[#dce3dc]" />

                    <div className="mt-5 h-10 w-3/4 max-w-2xl rounded-xl bg-[#d5ddd5]" />

                    <div className="mt-8 space-y-3">

                        <div className="h-4 w-full rounded-full bg-[#e1e7df]" />
                        <div className="h-4 w-full rounded-full bg-[#e1e7df]" />
                        <div className="h-4 w-4/5 rounded-full bg-[#e1e7df]" />

                    </div>

                </div>

            </section>

        </div>
    )
}


export default AboutSkeleton