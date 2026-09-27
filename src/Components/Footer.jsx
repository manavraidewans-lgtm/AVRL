function Footer() {
    return (
        <footer className="w-full bg-[#102a20] px-6 pb-6 pt-12 text-white">

            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            EVEROP
                        </h2>

                        <p className="mt-3 text-sm text-white/60">
                            Better Looks. Bigger Days.
                        </p>

                        {/* icon */}
                        <div className="mt-6 flex gap-5 text-lg cursor-pointer">
                            <i className="ri-instagram-line"></i>
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-youtube-line"></i>
                            <i className="ri-pinterest-line"></i>
                        </div>
                    </div>


                    {/* Shop */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">
                            Shop
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-white/60 cursor-pointer ">
                            <p>Men's T-Shirts</p>
                            <p>Women's Top</p>
                            <p>Jackets & Coats</p>
                            <p>Shirts</p>
                            <p>Pants & Jeans</p>
                            <p>Accessories</p>
                        </div>
                    </div>


                    {/* Customer Care */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">
                            Customer Care
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-white/60 cursor-pointer">
                            <p>Contact Us</p>
                            <p>Shipping Policy</p>
                            <p>Returns & Exchanges</p>
                            <p>Track Order</p>
                            <p>FAQs</p>
                        </div>
                    </div>


                    {/* About */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">
                            About
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-white/60 cursor-pointer">
                            <p>Our Story</p>
                            <p>Sustainability</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>

                </div>


                {/* Newsletter */}
                <div className="mt-10 border-t border-white/15 pt-8">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                        <div>
                            <h3 className="text-sm font-semibold">
                                Newsletter
                            </h3>

                            <p className="mt-2 max-w-sm text-xs leading-5 text-white/60">
                                Be the first to know about new drops,
                                exclusive offers and more.
                            </p>
                        </div>

                        <div className="flex w-full max-w-md items-center rounded-full border border-white/40 p-1">

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/50"
                            />

                            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dcebd7] text-[#102a20] cursor-pointer">
                                →
                            </button>

                        </div>

                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">

                    <p>
                        © 2026 EverOp. All rights reserved.
                    </p>

                    <div className="flex gap-4 cursor-pointer">
                        <p>Privacy Policy</p>
                        <span>|</span>
                        <p>Terms & Conditions</p>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer