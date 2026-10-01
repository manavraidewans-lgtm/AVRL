import React, { useEffect, useRef, useState } from "react"

import AllBanner1 from "../../Assets/All-Banner-1.avif"
import AllBanner2 from "../../Assets/All-banner-2.jpg"
import AllBanner3 from "../../Assets/All-banner-3.jpg"

import MenBanner1 from "../../Assets/Men-banner-1.jpg"
import MenBanner2 from "../../Assets/Men-banner-2.jpg"
import MenBanner3 from "../../Assets/Men-banner-3.jpg"

import WomenBanner1 from "../../Assets/Women-Banner-1.avif"
import WomenBanner2 from "../../Assets/Women-Banner-2.avif"
import WomenBanner3 from "../../Assets/Women-Banner-3.avif"
import WomenBanner4 from "../../Assets/Women-Banner-4.avif"

const ProductBanner = ({ category }) => {

    const data = {
        All: {
            images: [AllBanner1, AllBanner2, AllBanner3],
            title: "All Collection",
            description: "Explore everything EverOP has to offer.",
        },
        Men: {
            images: [MenBanner1, MenBanner2, MenBanner3],
            title: "Men's Collection",
            description: "Designed for everyday confidence.",
        },
        Women: {
            images: [
                WomenBanner1,
                WomenBanner2,
                WomenBanner3,
                WomenBanner4,
            ],
            title: "Women's Collection",
            description: "Style made to move with you.",
        },
    }

    const banner = data[category] || data.All

    const [current, setCurrent] = useState(0)
    const startX = useRef(0)

    useEffect(() => {
        setCurrent(0)

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banner.images.length)
        }, 4500)

        return () => clearInterval(timer)
    }, [category, banner.images.length])

    const start = (e) => {
        startX.current =
            e.type === "touchstart"
                ? e.touches[0].clientX
                : e.clientX
    }

    const end = (e) => {
        const endX =
            e.type === "touchend"
                ? e.changedTouches[0].clientX
                : e.clientX

        const distance = startX.current - endX

        if (Math.abs(distance) < 50) return

        setCurrent((prev) =>
            distance > 0
                ? (prev + 1) % banner.images.length
                : (prev - 1 + banner.images.length) % banner.images.length
        )
    }

    return (
        <section>

            <div
                className="relative h-[42vh] overflow-hidden select-none sm:h-[48vh] md:h-[52vh] lg:h-[80vh]"
                onMouseDown={start}
                onMouseUp={end}
                onTouchStart={start}
                onTouchEnd={end}
            >

                <div
                    className="flex h-full transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {banner.images.map((image, index) => (
                        <div
                            key={index}
                            className="h-full w-full shrink-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                    ))}
                </div>

                {/* Desktop content */}

                <div className="absolute inset-0 hidden items-end justify-center bg-black/20 pb-20 text-center lg:flex">
                    <div className="text-white">
                        <p className="text-xs uppercase tracking-[0.3em]">
                            EverOP
                        </p>

                        <h1 className="mt-3 text-5xl font-semibold xl:text-6xl">
                            {banner.title}
                        </h1>

                        <p className="mt-3 text-sm text-white/80">
                            {banner.description}
                        </p>
                    </div>
                </div>

            </div>

            {/* Mobile + tablet content */}

            <div className="bg-[#f9faf7] px-6 py-7 lg:hidden">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#68766e]">
                    EverOP
                </p>

                <h1 className="mt-2 text-3xl font-semibold text-[#152a23]">
                    {banner.title}
                </h1>

                <p className="mt-2 text-sm text-[#495f54] sm:text-base">
                    {banner.description}
                </p>

            </div>

        </section>
    )
}

export default ProductBanner