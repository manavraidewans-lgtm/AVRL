import React, { useState } from "react"

const Second = () => {

    const [Order, setOrder] = useState(0)
    const [Favourites, setFavourites] = useState(0)
    const [Address, setAddress] = useState(1)

    return (
        <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:pr-19">

            <div className="flex h-[10vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-[#e5ece4] shadow-sm">

                {/* Orders */}
                <div className="flex h-[75%] w-1/3 flex-col items-center justify-center border-r-3 border-[#dee2dc]">

                    <h1 className="text-lg font-bold text-[#152a23] sm:text-xl">
                        {Order}
                    </h1>

                    <p className="mt-1 text-xs font-medium text-[#68766e] sm:text-sm">
                        Orders
                    </p>

                </div>


                {/* Favourites */}
                <div className="flex h-[75%] w-1/3 flex-col items-center justify-center border-r-3 border-[#dee2dc]">

                    <h1 className="text-lg font-bold text-[#152a23] sm:text-xl">
                        {Favourites}
                    </h1>

                    <p className="mt-1 text-xs font-medium text-[#68766e] sm:text-sm">
                        Favourites
                    </p>

                </div>


                {/* Address */}
                <div className="flex h-[75%] w-1/3 flex-col items-center justify-center">

                    <h1 className="text-lg font-bold text-[#152a23] sm:text-xl">
                        {Address}
                    </h1>

                    <p className="mt-1 text-xs font-medium text-[#68766e] sm:text-sm">
                        Address
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Second