import { NavLink } from 'react-router-dom'
import Logo from "../Assets/Logo_2.png"

function Navbar() {
    return (
        <div className="flex h-full w-full items-center justify-center">

            <div className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-between bg-[#f7f9f4] p-1 md:top-0 md:bottom-auto md:mt-2 md:h-16 md:w-[90%] md:rounded-3xl md:bg-[#f7f9f4]/80 md:backdrop-blur-xl md:p-2">

                {/* Logo */}
                <div className="order-1 flex h-full w-[20%] items-center justify-center md:w-[15%]">
                    <NavLink to="/">
                        <img
                            src={Logo}
                            alt="Brand Logo"
                            className="h-full w-full object-contain"
                        />
                    </NavLink>
                </div>


                {/* Options */}
                <div className="order-3 flex h-full w-[20%] items-center justify-center md:order-2 md:w-[50%]">

                    <div className="flex h-full w-full items-center justify-center gap-4 md:gap-8 lg:gap-10">

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                        : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                }`
                            }
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                        : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                }`
                            }
                        >
                            Products
                        </NavLink>


                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                        : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                }`
                            }
                        >
                            Contact Us
                        </NavLink>

                    </div>

                </div>


                {/* Cart / Favourites / Auth */}
                <div className="order-2 flex h-full w-[55%] items-center justify-center gap-4 md:order-3 md:w-[30%]">

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:text-white hover:bg-[#1d3c2a]'
                            }`
                        }
                    >
                        <i className="ri-shopping-cart-2-line text-xl"></i>
                    </NavLink>


                    <NavLink
                        to="/favourites"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:text-white hover:bg-[#1d3c2a]'
                            }`
                        }
                    >
                        <i className="ri-poker-hearts-line text-xl"></i>
                    </NavLink>


                    <NavLink
                        to="/auth"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:text-white hover:bg-[#1d3c2a]'
                            }`
                        }
                    >
                        <i className="ri-user-line text-xl"></i>
                    </NavLink>

                </div>

            </div>

        </div>
    )
}

export default Navbar