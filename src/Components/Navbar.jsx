import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Logo from "../Assets/Logo_2.png"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="flex h-full w-full items-center justify-center">

            <div className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-between bg-[#e5ece0] px-3 md:top-0 md:bottom-auto md:mt-2 md:h-16 md:w-[90%] md:rounded-3xl md:bg-[#f7f9f4] md:backdrop-blur-xl md:p-2">

                {/* Logo */}
                <div className="order-1 flex h-full w-[25%] items-center justify-start md:w-[15%]">
                    <NavLink to="/">
                        <img
                            src={Logo}
                            alt="Brand Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </NavLink>
                </div>


                {/*  Laptop Navi */}
                <div className="order-3 hidden h-full w-[20%] items-center justify-center md:order-2 md:flex md:w-[50%]">
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




                {/* Laptop */}
                <div className="order-2 hidden h-full w-[55%] items-center justify-center gap-4 md:order-3 md:flex md:w-[30%]">

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 font-Manrope font-semibold transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
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
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
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
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                            }`
                        }
                    >
                        <i className="ri-user-line text-xl"></i>
                    </NavLink>

                </div>



                {/* Mobile  */}
                <div className="order-2 flex flex-1 items-center justify-center gap-1 md:hidden">

                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                            }`
                        }
                    >
                        <i className="ri-shopping-cart-2-line text-xl"></i>
                    </NavLink>

                    <NavLink
                        to="/favourites"
                        className={({ isActive }) =>
                            `flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                            }`
                        }
                    >
                        <i className="ri-poker-hearts-line text-xl"></i>
                    </NavLink>

                    <NavLink
                        to="/auth"
                        className={({ isActive }) =>
                            `flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ${
                                isActive
                                    ? 'bg-[#1d3c2a] text-[#ccd6cf]'
                                    : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                            }`
                        }
                    >
                        <i className="ri-user-line text-xl"></i>
                    </NavLink>

                </div>



                {/* hamburger ..... main dont change */}
                <div className="order-3 flex w-[20%] items-center justify-end md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-[#42514d] transition-all duration-300 hover:bg-[#1d3c2a] hover:text-white"
                    >
                        <i
                            className={`text-2xl transition-transform duration-300 ${
                                menuOpen
                                    ? 'ri-close-line rotate-90'
                                    : 'ri-menu-3-line'
                            }`}
                        ></i>
                    </button>
                </div>




                {/* Mobile menu*/}
                {menuOpen && (
                    <div className="absolute bottom-18 left-2 right-2 rounded-3xl bg-[#f7f9f4] p-3 shadow-lg md:hidden">

                        <div className="flex flex-col gap-1">

                            <NavLink
                                to="/about"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-2xl px-5 py-3 font-Manrope font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-[#1d3c2a] text-white'
                                            : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                    }`
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/products"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-2xl px-5 py-3 font-Manrope font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-[#1d3c2a] text-white'
                                            : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                    }`
                                }
                            >
                                Products
                            </NavLink>

                            <NavLink
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    `rounded-2xl px-5 py-3 font-Manrope font-semibold transition-all duration-300 ${
                                        isActive
                                            ? 'bg-[#1d3c2a] text-white'
                                            : 'text-[#42514d] hover:bg-[#1d3c2a] hover:text-white'
                                    }`
                                }
                            >
                                Contact Us
                            </NavLink>

                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar
