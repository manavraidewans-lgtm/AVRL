import React from "react"


function ProfileSkeleton() {

    return (

        <div className="min-h-screen bg-[#f9f9f4] px-4 pb-20 pt-24 animate-pulse sm:px-8 lg:px-12 lg:pt-28">

            <div className="mx-auto max-w-5xl">

                {/* Profile Header */}

                <div className="rounded-4xl bg-[#e5ece0] p-6 sm:p-10">

                    <div className="flex flex-col items-center gap-6 sm:flex-row">

                        <div className="h-28 w-28 shrink-0 rounded-full bg-[#cbd5cb] sm:h-32 sm:w-32" />

                        <div className="w-full">

                            <div className="h-8 w-56 max-w-full rounded-xl bg-[#cbd5cb]" />

                            <div className="mt-3 h-4 w-48 max-w-full rounded-full bg-[#d3dbd3]" />

                            <div className="mt-5 h-10 w-32 rounded-full bg-[#cbd5cb]" />

                        </div>

                    </div>

                </div>


                {/* Details */}

                <div className="mt-8 rounded-4xl bg-white p-6 sm:p-10">

                    <div className="h-7 w-40 rounded-xl bg-[#d5ddd5]" />


                    <div className="mt-8 grid gap-6 sm:grid-cols-2">

                        {[1, 2, 3, 4].map((item) => (

                            <div key={item}>

                                <div className="h-4 w-24 rounded-full bg-[#dce3dc]" />

                                <div className="mt-3 h-12 w-full rounded-2xl bg-[#e1e7df]" />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}


export default ProfileSkeleton