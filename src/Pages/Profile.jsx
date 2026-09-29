import React from "react"

function Profile() {

    const userName =
        localStorage.getItem("userName") || "Guest"

    const userEmail =
        localStorage.getItem("userEmail") || "No email"

    return (
        <section className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f2f4ea] lg:pt-35">

            <div className="mx-auto w-full max-w-4xl">

                <p className="font-Manrope text-sm font-semibold uppercase tracking-widest text-[#65766c]">
                    My Account
                </p>

                <h1 className="mt-3 font-Manrope text-4xl font-bold text-[#1d3c2a] sm:text-5xl">
                    My Profile
                </h1>

                <div className="mt-10 rounded-3xl border border-[#dce3dc] bg-[#f7f9f4] p-6 shadow-sm sm:p-8">

                    <div className="flex items-center gap-5">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e5ece0] text-[#1d3c2a]">
                            <i className="ri-user-line text-2xl"></i>
                        </div>

                        <div>
                            <h2 className="font-Manrope text-xl font-bold text-[#1d3c2a]">
                                {userName}
                            </h2>

                            <p className="mt-1 font-Manrope text-sm text-[#65766c]">
                                {userEmail}
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Profile