import React, { useEffect, useRef } from "react"
import gsap from "gsap"

import Adidas from "../../Assets/adidas.svg"
import Dior from "../../Assets/dior.svg"
import Puma from "../../Assets/puma.svg"
import Fossa from "../../Assets/fossa.svg"
import HandM from "../../Assets/handm.svg"
import Hermes from "../../Assets/hermes.svg"
import NorthFace from "../../Assets/thenorthface.svg"
import UniQlo from "../../Assets/uniqlo.svg"
import Zara from "../../Assets/zara.svg"
import NewBalance from "../../Assets/newbalance.svg"
import Nike from "../../Assets/nike.svg"

const Brands = () => {

    const sliderRef = useRef(null)

    const brands = [
        Adidas,
        Dior,
        Puma,
        Fossa,
        HandM,
        Hermes,
        NorthFace,
        UniQlo,
        Zara,
        NewBalance,
        Nike
    ]

    useEffect(() => {

        gsap.to(sliderRef.current, {
            xPercent: -50,
            duration: 30,
            ease: "none",
            repeat: -1
        })

    }, [])

    return (
        <section className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-16">

            <div className="px-5 sm:px-8 lg:px-12">

                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#68766e] sm:text-xs">
                    Our Partners
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#152a23] sm:text-3xl lg:text-4xl">
                    Brands We Deal With
                </h2>

            </div>

            <div className="mt-3 w-full overflow-hidden border-y border-[#e1e5df] p-4 md:mt-8 md:p-6">

                <div
                    ref={sliderRef}
                    className="flex w-max"
                >

                    <div className="flex shrink-0 items-center gap-2 px-10 md:gap-6 md:px-12 lg:gap-18">

                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32"
                            >
                                <img
                                    src={brand}
                                    alt="Brand"
                                    className="h-full w-full object-contain opacity-70"
                                />
                            </div>
                        ))}

                    </div>

                    <div className="flex shrink-0 items-center gap-2 px-10 md:gap-6 md:px-12 lg:gap-18">

                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex h-8 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24 md:h-12 md:w-28 lg:h-14 lg:w-32"
                            >
                                <img
                                    src={brand}
                                    alt="Brand"
                                    className="h-full w-full object-contain opacity-70"
                                />
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Brands