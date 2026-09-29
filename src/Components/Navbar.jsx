import React, { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import Logo from "../Assets/Logo_2.png"
import Auth from "../Pages/Auth"

function Navbar() {

    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    )

    const [authOpen, setAuthOpen] = useState(false)

    const [profileOpen, setProfileOpen] = useState(false)

    const desktopProfileRef = useRef(null)
    const mobileProfileRef = useRef(null)


    /* =========================================
       LOGIN STATUS
    ========================================= */

    useEffect(() => {

        const checkLogin = () => {
            setIsLoggedIn(
                localStorage.getItem("isLoggedIn") === "true"
            )
        }

        window.addEventListener(
            "loginStatusChanged",
            checkLogin
        )

        window.addEventListener(
            "storage",
            checkLogin
        )

        return () => {
            window.removeEventListener(
                "loginStatusChanged",
                checkLogin
            )

            window.removeEventListener(
                "storage",
                checkLogin
            )
        }

    }, [])


    /* =========================================
       CLOSE PROFILE DROPDOWN
       WHEN CLICKING OUTSIDE
    ========================================= */

    useEffect(() => {

        const handleOutsideClick = (event) => {

            const clickedDesktop =
                desktopProfileRef.current?.contains(
                    event.target
                )

            const clickedMobile =
                mobileProfileRef.current?.contains(
                    event.target
                )

            if (!clickedDesktop && !clickedMobile) {
                setProfileOpen(false)
            }
        }

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        )

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            )
        }

    }, [])


    /* =========================================
       LOGOUT
    ========================================= */

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("userName")
        localStorage.removeItem("userEmail")

        setIsLoggedIn(false)
        setProfileOpen(false)
        setMenuOpen(false)

        window.dispatchEvent(
            new Event("loginStatusChanged")
        )

        // Go back to Home page
        navigate("/")
    }


    /* =========================================
       CLOSE MOBILE MENU
    ========================================= */

    const closeMenu = () => {
        setMenuOpen(false)
    }


    return (
        <>
            {/* =====================================================
                DESKTOP NAVBAR
            ====================================================== */}

            <nav
                className="
                    fixed left-1/2 top-4 z-50
                    hidden w-[90%] -translate-x-1/2
                    items-center justify-between
                    rounded-3xl
                    border border-white/20
                    bg-white/70
                    px-5 py-3
                    shadow-lg
                    backdrop-blur-3xl
                    lg:flex
                "
            >

                {/* LOGO */}

                <NavLink
                    to="/"
                    className="flex items-center"
                >
                    <img
                        src={Logo}
                        alt="EverOP"
                        className="h-10 w-auto object-contain"
                    />
                </NavLink>


                {/* DESKTOP LINKS */}

                <div
                    className="
                        flex items-center
                        gap-8
                        font-Manrope
                        text-sm
                        font-semibold
                        text-[#42514d]
                    "
                >

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-all duration-300 ${
                                isActive
                                    ? "text-[#1d3c2a]"
                                    : "hover:text-[#1d3c2a]"
                            }`
                        }
                    >
                        About
                    </NavLink>


                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `transition-all duration-300 ${
                                isActive
                                    ? "text-[#1d3c2a]"
                                    : "hover:text-[#1d3c2a]"
                            }`
                        }
                    >
                        Products
                    </NavLink>


                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `transition-all duration-300 ${
                                isActive
                                    ? "text-[#1d3c2a]"
                                    : "hover:text-[#1d3c2a]"
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>

                </div>


                {/* RIGHT SIDE */}

                <div className="flex items-center gap-3">

                    {/* CART */}

                    <NavLink
                        to="/cart"
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            text-[#42514d]
                            transition-all duration-300
                            hover:bg-[#e5ece0]
                            hover:text-[#1d3c2a]
                        "
                    >
                        <i className="ri-shopping-cart-2-line text-xl"></i>
                    </NavLink>


                    {/* FAVOURITES */}

                    <NavLink
                        to="/favourites"
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            text-[#42514d]
                            transition-all duration-300
                            hover:bg-[#e5ece0]
                            hover:text-[#1d3c2a]
                        "
                    >
                        <i className="ri-heart-3-line text-xl"></i>
                    </NavLink>


                    {/* =================================================
                        LOGGED OUT
                    ================================================= */}

                    {!isLoggedIn && (

                        <button
                            type="button"
                            onClick={() => setAuthOpen(true)}
                            className="
                                rounded-full
                                bg-[#1d3c2a]
                                px-5 py-2.5
                                font-Manrope
                                text-sm
                                font-semibold
                                text-white
                                transition-all duration-300
                                hover:bg-[#102a20]
                            "
                        >
                            Login / Sign Up
                        </button>

                    )}


                    {/* =================================================
                        LOGGED IN
                    ================================================= */}

                    {isLoggedIn && (

                        <div
                            ref={desktopProfileRef}
                            className="relative"
                        >

                            {/* USER BUTTON */}

                            <button
                                type="button"
                                onClick={() =>
                                    setProfileOpen(
                                        (previous) => !previous
                                    )
                                }
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-full
                                    bg-[#e5ece0]
                                    text-[#1d3c2a]
                                    transition-all duration-300
                                    hover:bg-[#ccd6cf]
                                "
                            >
                                <i className="ri-user-line text-xl"></i>
                            </button>


                            {/* DROPDOWN */}

                            {profileOpen && (

                                <div
                                    className="
                                        absolute right-0 top-12
                                        z-[100]
                                        w-56
                                        overflow-hidden
                                        rounded-2xl
                                        border border-[#dce3dc]
                                        bg-[#f7f9f4]
                                        p-2
                                        shadow-xl
                                    "
                                >

                                    {/* VIEW PROFILE */}

                                    <NavLink
                                        to="/profile"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="
                                            flex items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-[#42514d]
                                            transition-all duration-200
                                            hover:bg-[#e5ece0]
                                            hover:text-[#1d3c2a]
                                        "
                                    >

                                        <i className="ri-user-line text-lg"></i>

                                        <span>
                                            View Profile
                                        </span>

                                    </NavLink>


                                    {/* MY ORDERS */}

                                    <NavLink
                                        to="/orders"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="
                                            flex items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-[#42514d]
                                            transition-all duration-200
                                            hover:bg-[#e5ece0]
                                            hover:text-[#1d3c2a]
                                        "
                                    >

                                        <i className="ri-shopping-bag-3-line text-lg"></i>

                                        <span>
                                            My Orders
                                        </span>

                                    </NavLink>


                                    {/* DIVIDER */}

                                    <div
                                        className="
                                            my-1 h-px
                                            bg-[#dce3dc]
                                        "
                                    />


                                    {/* LOGOUT */}

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="
                                            flex w-full
                                            items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-red-600
                                            transition-all duration-200
                                            hover:bg-red-50
                                        "
                                    >

                                        <i className="ri-logout-box-r-line text-lg"></i>

                                        <span>
                                            Log Out
                                        </span>

                                    </button>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            </nav>


            {/* =====================================================
                MOBILE NAVBAR
            ====================================================== */}

            <nav
                className="
                    fixed bottom-3 left-1/2
                    z-50
                    flex w-[94%]
                    -translate-x-1/2
                    items-center
                    justify-between
                    rounded-3xl
                    border border-white/20
                    bg-white/80
                    px-4 py-3
                    shadow-xl
                    backdrop-blur-3xl
                    lg:hidden
                "
            >

                {/* LOGO */}

                <NavLink
                    to="/"
                    onClick={closeMenu}
                    className="flex items-center"
                >
                    <img
                        src={Logo}
                        alt="EverOP"
                        className="h-9 w-auto object-contain"
                    />
                </NavLink>


                {/* MOBILE RIGHT SIDE */}

                <div className="flex items-center gap-2">

                    {/* CART */}

                    <NavLink
                        to="/cart"
                        onClick={closeMenu}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            text-[#42514d]
                            transition-all duration-300
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-shopping-cart-2-line text-xl"></i>
                    </NavLink>


                    {/* FAVOURITES */}

                    <NavLink
                        to="/favourites"
                        onClick={closeMenu}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            text-[#42514d]
                            transition-all duration-300
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-heart-3-line text-xl"></i>
                    </NavLink>


                    {/* =================================================
                        MOBILE LOGGED OUT
                    ================================================= */}

                    {!isLoggedIn && (

                        <button
                            type="button"
                            onClick={() => setAuthOpen(true)}
                            className="
                                rounded-full
                                bg-[#1d3c2a]
                                px-4 py-2.5
                                font-Manrope
                                text-sm
                                font-semibold
                                text-white
                                transition-all duration-300
                                hover:bg-[#102a20]
                            "
                        >
                            Login
                        </button>

                    )}


                    {/* =================================================
                        MOBILE LOGGED IN
                    ================================================= */}

                    {isLoggedIn && (

                        <div
                            ref={mobileProfileRef}
                            className="relative"
                        >

                            {/* USER BUTTON */}

                            <button
                                type="button"
                                onClick={() =>
                                    setProfileOpen(
                                        (previous) => !previous
                                    )
                                }
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-full
                                    bg-[#e5ece0]
                                    text-[#1d3c2a]
                                    transition-all duration-300
                                    hover:bg-[#ccd6cf]
                                "
                            >
                                <i className="ri-user-line text-xl"></i>
                            </button>


                            {/* MOBILE DROPDOWN */}

                            {profileOpen && (

                                <div
                                    className="
                                        absolute bottom-12 right-0
                                        z-[100]
                                        w-52
                                        overflow-hidden
                                        rounded-2xl
                                        border border-[#dce3dc]
                                        bg-[#f7f9f4]
                                        p-2
                                        shadow-xl
                                    "
                                >

                                    {/* VIEW PROFILE */}

                                    <NavLink
                                        to="/profile"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="
                                            flex items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-[#42514d]
                                            transition-all duration-200
                                            hover:bg-[#e5ece0]
                                        "
                                    >

                                        <i className="ri-user-line text-lg"></i>

                                        <span>
                                            View Profile
                                        </span>

                                    </NavLink>


                                    {/* MY ORDERS */}

                                    <NavLink
                                        to="/orders"
                                        onClick={() =>
                                            setProfileOpen(false)
                                        }
                                        className="
                                            flex items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-[#42514d]
                                            transition-all duration-200
                                            hover:bg-[#e5ece0]
                                        "
                                    >

                                        <i className="ri-shopping-bag-3-line text-lg"></i>

                                        <span>
                                            My Orders
                                        </span>

                                    </NavLink>


                                    {/* DIVIDER */}

                                    <div
                                        className="
                                            my-1 h-px
                                            bg-[#dce3dc]
                                        "
                                    />


                                    {/* LOGOUT */}

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="
                                            flex w-full
                                            items-center
                                            gap-3
                                            rounded-xl
                                            px-4 py-3
                                            font-Manrope
                                            text-sm
                                            font-semibold
                                            text-red-600
                                            transition-all duration-200
                                            hover:bg-red-50
                                        "
                                    >

                                        <i className="ri-logout-box-r-line text-lg"></i>

                                        <span>
                                            Log Out
                                        </span>

                                    </button>

                                </div>

                            )}

                        </div>

                    )}


                    {/* HAMBURGER */}

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen(
                                (previous) => !previous
                            )
                        }
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            bg-[#e5ece0]
                            text-[#1d3c2a]
                            transition-all duration-300
                        "
                    >

                        <i
                            className={
                                menuOpen
                                    ? "ri-close-line text-xl"
                                    : "ri-menu-line text-xl"
                            }
                        />

                    </button>

                </div>

            </nav>


            {/* =====================================================
                MOBILE MENU
            ====================================================== */}

            {menuOpen && (

                <div
                    className="
                        fixed bottom-[5.5rem]
                        left-1/2
                        z-40
                        w-[90%]
                        -translate-x-1/2
                        rounded-3xl
                        border border-[#dce3dc]
                        bg-[#f7f9f4]
                        p-4
                        shadow-xl
                        lg:hidden
                    "
                >

                    <div
                        className="
                            flex flex-col gap-2
                            font-Manrope
                            font-semibold
                        "
                    >

                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className="
                                rounded-2xl
                                px-4 py-3
                                text-[#42514d]
                                transition-all
                                hover:bg-[#e5ece0]
                            "
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/products"
                            onClick={closeMenu}
                            className="
                                rounded-2xl
                                px-4 py-3
                                text-[#42514d]
                                transition-all
                                hover:bg-[#e5ece0]
                            "
                        >
                            Products
                        </NavLink>


                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className="
                                rounded-2xl
                                px-4 py-3
                                text-[#42514d]
                                transition-all
                                hover:bg-[#e5ece0]
                            "
                        >
                            Contact Us
                        </NavLink>

                    </div>

                </div>

            )}


            {/* =====================================================
                AUTH MODAL
            ====================================================== */}

            {authOpen && (

                <Auth
                    onClose={() => setAuthOpen(false)}
                    onLogin={() => {
                        setIsLoggedIn(true)
                        setAuthOpen(false)
                    }}
                />

            )}

        </>
    )
}

export default Navbar