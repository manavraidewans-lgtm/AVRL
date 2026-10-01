import React from "react"

import AllBanner2 from "../../Assets/All-Banner-5.avif"
import MenBanner2 from "../../Assets/Men-banner-4.jpg"
import WomenBanner2 from "../../Assets/Women-Banner-5.avif"

const ProductBanner = ({ category }) => {

    const banners = {
        All: {
            Image: AllBanner2,
            Tittle: "All Collection",
            Description: "Explore everything EverOP has to offer.",
        },
        Men: {
            Image: MenBanner2,
            Tittle: "Men's Collection",
            Description: "Designed for everyday confidence.",
        },
        Women: {
            Image: WomenBanner2,
            Tittle: "Women's Collection",
            Description: "Style made to move with you.",
        }
    }

    const banner = banners[category] || banners.All

    return (
        <section className="w-full">

            {/* Mobile + Tablet */}
            <div className="lg:hidden">

                <div
                    className="h-[42vh] bg-cover bg-center sm:h-[48vh] md:h-[52vh]"
                    style={{ backgroundImage: `url(${banner.Image})` }}
                />

                <div className="bg-[#f9faf7] p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-widest text-[#68766e]">
                        EverOP
                    </p>

                    <h1 className="mt-2 text-3xl font-bold text-[#152a23]">
                        {banner.Tittle}
                    </h1>

                    <p className="mt-2 text-sm text-[#495f54] sm:text-base">
                        {banner.Description}
                    </p>
                </div>

            </div>


            {/* Desktop */}
            <div
                className="relative hidden h-[80vh] bg-cover bg-center lg:flex"
                style={{ backgroundImage: `url(${banner.Image})` }}
            >

                <div className="absolute inset-0 bg-black/25" />

                <div className="relative z-10 flex w-full flex-col items-center justify-end pb-16 text-center">

                    <p className="text-xs uppercase tracking-widest text-white/80">
                        EverOP
                    </p>

                    <h1 className="mt-2 text-5xl font-semibold text-white">
                        {banner.Tittle}
                    </h1>

                    <p className="mt-2 text-base text-white/80">
                        {banner.Description}
                    </p>

                </div>

            </div>

        </section>
    )
}

export default ProductBanner