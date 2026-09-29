import React from "react"


function ContactSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-7xl">

                {/* Hero */}

                <div className="overflow-hidden rounded-4xl bg-[#e1e7df]">

                    <div className="h-74 bg-[#d4ddd4] lg:h-125" />

                </div>


                {/* Contact section */}

                <div className="mt-10 grid gap-6 lg:grid-cols-2">

                    {/* Contact Info */}

                    <div className="rounded-3xl bg-[#e5ece0] p-6 sm:p-10">

                        <div className="h-5 w-32 rounded-full bg-[#cbd5cb]" />

                        <div className="mt-5 h-10 w-3/4 rounded-xl bg-[#cbd5cb]" />

                        <div className="mt-3 h-4 w-full max-w-md rounded-full bg-[#d3dbd3]" />

                        <div className="mt-3 h-4 w-4/5 rounded-full bg-[#d3dbd3]" />


                        <div className="mt-10 space-y-5">

                            {[1, 2, 3].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >

                                    <div className="h-12 w-12 rounded-full bg-[#cbd5cb]" />

                                    <div className="flex-1">

                                        <div className="h-4 w-24 rounded-full bg-[#cbd5cb]" />

                                        <div className="mt-2 h-4 w-40 rounded-full bg-[#d3dbd3]" />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Form */}

                    <div className="rounded-3xl bg-white p-6 sm:p-10">

                        <div className="h-8 w-48 rounded-xl bg-[#d5ddd5]" />

                        <div className="mt-8 space-y-5">

                            <div className="h-12 rounded-2xl bg-[#e1e7df]" />

                            <div className="h-12 rounded-2xl bg-[#e1e7df]" />

                            <div className="h-32 rounded-2xl bg-[#e1e7df]" />

                            <div className="h-12 w-36 rounded-full bg-[#d5ddd5]" />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default ContactSkeleton