import React, { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import Logo from "../Assets/Logo_2.png"
import Auth from "../Pages/Auth"

function Navbar() {

    const navigate = useNavigate()

    const desktopProfileRef = useRef(null)
    const mobileProfileRef = useRef(null)

    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    )


    // Login status
    useEffect(() => {

        const checkLogin = () => {
            setIsLoggedIn(
                localStorage.getItem("isLoggedIn") === "true"
            )
        }

        window.addEventListener("loginStatusChanged", checkLogin)
        window.addEventListener("storage", checkLogin)

        return () => {
            window.removeEventListener("loginStatusChanged", checkLogin)
            window.removeEventListener("storage", checkLogin)
        }

    }, [])


    // Close profile when clicking outside
    useEffect(() => {

        const handleClick = (e) => {

            const desktop =
                desktopProfileRef.current?.contains(e.target)

            const mobile =
                mobileProfileRef.current?.contains(e.target)

            if (!desktop && !mobile) {
                setProfileOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    }, [])


    const closeMenu = () => {
        setMenuOpen(false)
    }


    const logout = () => {

        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("userName")
        localStorage.removeItem("userEmail")

        setIsLoggedIn(false)
        setProfileOpen(false)
        setMenuOpen(false)

        window.dispatchEvent(
            new Event("loginStatusChanged")
        )

        navigate("/")
    }


    const navClass = ({ isActive }) =>
        `transition ${
            isActive
                ? "text-[#1d3c2a]"
                : "text-[#42514d] hover:text-[#1d3c2a]"
        }`


    // Profile dropdown
    const ProfileMenu = ({ mobile = false }) => (

        <div
            className={`
                absolute right-0 z-[100] w-52
                rounded-2xl border border-[#dce3dc]
                bg-[#f7f9f4] p-2 shadow-xl
                ${mobile ? "bottom-12" : "top-12"}
            `}
        >

            <NavLink
                to="/profile"
                onClick={() => setProfileOpen(false)}
                className="
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    text-sm font-semibold text-[#42514d]
                    hover:bg-[#e5ece0]
                "
            >
                <i className="ri-user-line text-lg" />
                View Profile
            </NavLink>


            <NavLink
                to="/orders"
                onClick={() => setProfileOpen(false)}
                className="
                    flex items-center gap-3
                    rounded-xl px-4 py-3
                    text-sm font-semibold text-[#42514d]
                    hover:bg-[#e5ece0]
                "
            >
                <i className="ri-shopping-bag-3-line text-lg" />
                My Orders
            </NavLink>


            <div className="my-1 h-px bg-[#dce3dc]" />


            <button
                onClick={logout}
                className="
                    flex w-full items-center gap-3
                    rounded-xl px-4 py-3
                    text-sm font-semibold text-red-600
                    hover:bg-red-50
                "
            >
                <i className="ri-logout-box-r-line text-lg" />
                Log Out
            </button>

        </div>
    )


    return (
        <>
            {/* ================= DESKTOP ================= */}

            <nav className="
                fixed left-1/2 top-4 z-50 hidden w-[90%]
                -translate-x-1/2 items-center justify-between
                rounded-3xl border border-white/20
                bg-white/70 px-5 py-3
                shadow-lg backdrop-blur-3xl lg:flex
            ">

                <NavLink to="/">
                    <img
                        src={Logo}
                        alt="EverOP"
                        className="h-10 w-auto"
                    />
                </NavLink>


                <div className="
                    flex gap-8
                    font-Manrope text-sm font-semibold
                ">
                    <NavLink to="/about" className={navClass}>
                        About
                    </NavLink>

                    <NavLink to="/products" className={navClass}>
                        Products
                    </NavLink>

                    <NavLink to="/contact" className={navClass}>
                        Contact Us
                    </NavLink>
                </div>


                {/* RIGHT SIDE */}

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/cart"
                        className="
                            flex h-10 w-10 items-center
                            justify-center rounded-full
                            text-[#42514d]
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-shopping-cart-2-line text-xl" />
                    </NavLink>


                    <NavLink
                        to="/favourites"
                        className="
                            flex h-10 w-10 items-center
                            justify-center rounded-full
                            text-[#42514d]
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-heart-3-line text-xl" />
                    </NavLink>


                    {!isLoggedIn ? (

                        <button
                            onClick={() => setAuthOpen(true)}
                            className="
                                ml-2 rounded-full
                                bg-[#1d3c2a]
                                px-5 py-2.5
                                text-sm font-semibold text-white
                                hover:bg-[#102a20]
                            "
                        >
                            Login / Sign Up
                        </button>

                    ) : (

                        <div
                            ref={desktopProfileRef}
                            className="relative ml-1"
                        >

                            <button
                                onClick={() =>
                                    setProfileOpen(prev => !prev)
                                }
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-full
                                    bg-[#e5ece0]
                                    text-[#1d3c2a]
                                    hover:bg-[#ccd6cf]
                                "
                            >
                                <i className="ri-user-line text-xl" />
                            </button>


                            {profileOpen && (
                                <ProfileMenu />
                            )}

                        </div>

                    )}

                </div>

            </nav>


            {/* ================= MOBILE ================= */}

            <nav className="
                fixed bottom-3 left-1/2 z-50
                flex w-[94%] -translate-x-1/2
                items-center justify-between
                rounded-3xl border border-white/20
                bg-white/80 px-4 py-3
                shadow-xl backdrop-blur-3xl lg:hidden
            ">

                <NavLink
                    to="/"
                    onClick={closeMenu}
                >
                    <img
                        src={Logo}
                        alt="EverOP"
                        className="h-9 w-auto"
                    />
                </NavLink>


                <div className="flex items-center gap-3">

                    {/* CART */}

                    <NavLink
                        to="/cart"
                        onClick={closeMenu}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full text-[#42514d]
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-shopping-cart-2-line text-xl" />
                    </NavLink>


                    {/* FAVOURITES */}

                    <NavLink
                        to="/favourites"
                        onClick={closeMenu}
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full text-[#42514d]
                            hover:bg-[#e5ece0]
                        "
                    >
                        <i className="ri-heart-3-line text-xl" />
                    </NavLink>


                    {/* LOGIN / PROFILE */}

                    {!isLoggedIn ? (

                        <button
                            onClick={() => setAuthOpen(true)}
                            className="
                                ml-1 rounded-full
                                bg-[#1d3c2a]
                                px-4 py-2.5
                                text-sm font-semibold text-white
                            "
                        >
                            Login
                        </button>

                    ) : (

                        <div
                            ref={mobileProfileRef}
                            className="relative ml-1"
                        >

                            <button
                                onClick={() =>
                                    setProfileOpen(prev => !prev)
                                }
                                className="
                                    flex h-10 w-10
                                    items-center justify-center
                                    rounded-full
                                    bg-[#e5ece0]
                                    text-[#1d3c2a]
                                    hover:bg-[#ccd6cf]
                                "
                            >
                                <i className="ri-user-line text-xl" />
                            </button>


                            {profileOpen && (
                                <ProfileMenu mobile />
                            )}

                        </div>

                    )}


                    {/* MENU */}

                    <button
                        onClick={() =>
                            setMenuOpen(prev => !prev)
                        }
                        className="
                            flex h-10 w-10
                            items-center justify-center
                            rounded-full
                            bg-[#e5ece0]
                            text-[#1d3c2a]
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


            {/* ================= MOBILE MENU ================= */}

            {menuOpen && (

                <div className="
                    fixed bottom-[5.5rem] left-1/2 z-40
                    w-[90%] -translate-x-1/2
                    rounded-3xl
                    border border-[#dce3dc]
                    bg-[#f7f9f4] p-4
                    shadow-xl lg:hidden
                ">

                    <div className="
                        flex flex-col gap-1
                        font-Manrope font-semibold
                    ">

                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className="
                                rounded-2xl px-4 py-3
                                text-[#42514d]
                                hover:bg-[#e5ece0]
                            "
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/products"
                            onClick={closeMenu}
                            className="
                                rounded-2xl px-4 py-3
                                text-[#42514d]
                                hover:bg-[#e5ece0]
                            "
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className="
                                rounded-2xl px-4 py-3
                                text-[#42514d]
                                hover:bg-[#e5ece0]
                            "
                        >
                            Contact Us
                        </NavLink>

                    </div>

                </div>
            )}


            {/* AUTH */}

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
