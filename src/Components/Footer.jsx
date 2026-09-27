function Footer() {
    return (
        <footer className="w-full bg-[#102a20] px-5  pt-10 text-white sm:px-6 pb-22 md:pb-5">
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">

                    
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            EVEROP
                        </h2>

                        <p className="mt-2 text-sm text-white/60">
                            Better Looks. Bigger Days.
                        </p>

                        <div className="mt-5 flex gap-5 text-lg">
                            <i className="ri-instagram-line cursor-pointer" />
                            <i className="ri-twitter-x-line cursor-pointer" />
                            <i className="ri-youtube-line cursor-pointer" />
                            <i className="ri-pinterest-line cursor-pointer" />
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="mb-3 text-sm font-semibold">Shop</h3>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <p>Men's T-Shirts</p>
                            <p>Women's Top</p>
                            <p>Jackets & Coats</p>
                            <p>Shirts</p>
                            <p>Pants & Jeans</p>
                            <p>Accessories</p>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="mb-3 text-sm font-semibold">Customer Care</h3>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <p>Contact Us</p>
                            <p>Shipping Policy</p>
                            <p>Returns & Exchanges</p>
                            <p>Track Order</p>
                            <p>FAQs</p>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="mb-3 text-sm font-semibold">About</h3>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <p>Our Story</p>
                            <p>Sustainability</p>
                            <p>Blog</p>
                            <p>Careers</p>
                        </div>
                    </div>

                </div>

                
                <div className="mt-8 border-t border-white/15 pt-7 sm:mt-10 sm:pt-8">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                        <div>
                            <h3 className="text-sm font-semibold">
                                Newsletter
                            </h3>

                            <p className="mt-2 max-w-sm text-xs leading-5 text-white/60">
                                Be the first to know about new drops,
                                exclusive offers and more.
                            </p>
                        </div>

                        <div className="flex w-full max-w-md rounded-full border border-white/40 p-1">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/50 sm:px-4"
                            />

                            <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#dcebd7] text-[#102a20]">
                                →
                            </button>
                        </div>

                    </div>
                </div>

                
                <div className="mt-7 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/50 sm:mt-8 md:flex-row md:items-center md:justify-between">

                    <p>© 2026 EverOp. All rights reserved.</p>

                    <div className="flex flex-wrap gap-3">
                        <p className="cursor-pointer">Privacy Policy</p>
                        <span>|</span>
                        <p className="cursor-pointer">Terms & Conditions</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
