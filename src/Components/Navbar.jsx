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

    //  LOGIN STATUS 

    useEffect(() => {

        const checkLogin = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")
        }

        window.addEventListener("loginStatusChanged", checkLogin)
        window.addEventListener("storage", checkLogin)

        return () => {
            window.removeEventListener("loginStatusChanged", checkLogin)
            window.removeEventListener("storage", checkLogin)
        }

    }, [])

    //  CLOSE PROFILE 

    useEffect(() => {

        const handleClick = (e) => {

            const desktop = desktopProfileRef.current?.contains(e.target)
            const mobile = mobileProfileRef.current?.contains(e.target)

            if (!desktop && !mobile) {
                setProfileOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClick)

        return () => document.removeEventListener("mousedown", handleClick)

    }, [])

    //  LOGIN 

    const handleLogin = () => {

        setIsLoggedIn(true)

        window.dispatchEvent(
            new Event("loginStatusChanged")
        )
    }

    //  LOGOUT 

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

    //  CLOSE MENU 

    const closeMenu = () => setMenuOpen(false)

    //  NAV LINKS 

    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" }
    ]

    const navClass = ({ isActive }) =>
        `transition ${
            isActive
                ? "text-[#1d3c2a]"
                : "text-[#42514d] hover:text-[#1d3c2a]"
        }`

    //  ICON BUTTON 

    const IconLink = ({ to, icon, onClick }) => (
        <NavLink
            to={to}
            onClick={onClick}
            className="
                flex h-10 w-10 items-center justify-center
                rounded-full text-[#42514d] transition
                hover:bg-[#e5ece0]
            "
        >
            <i className={`${icon} text-xl`} />
        </NavLink>
    )

    //  PROFILE MENU 

    const ProfileMenu = ({ mobile = false }) => {

        const items = [
            {
                name: "View Profile",
                path: "/profile",
                icon: "ri-user-line"
            },
            {
                name: "My Orders",
                path: "/orders",
                icon: "ri-shopping-bag-3-line"
            }
        ]

        return (
            <div
                className={`
                    absolute right-0 z-100 w-52
                    rounded-2xl border border-[#dce3dc]
                    bg-[#f7f9f4] p-2 shadow-xl
                    ${mobile ? "bottom-12" : "top-12"}
                `}
            >

                {items.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setProfileOpen(false)}
                        className="
                            flex items-center gap-3 rounded-xl
                            px-4 py-3 text-sm font-semibold
                            text-[#42514d] hover:bg-[#e5ece0]
                        "
                    >
                        <i className={`${item.icon} text-lg`} />
                        {item.name}
                    </NavLink>
                ))}

                <div className="my-1 h-px bg-[#dce3dc]" />

                <button
                    type="button"
                    onClick={logout}
                    className="
                        flex w-full items-center gap-3
                        rounded-xl px-4 py-3 text-sm font-semibold
                        text-red-600 hover:bg-red-50
                    "
                >
                    <i className="ri-logout-box-r-line text-lg" />
                    Log Out
                </button>

            </div>
        )
    }

    //  PROFILE BUTTON 

    const ProfileButton = ({ mobile = false }) => {

        const ref = mobile
            ? mobileProfileRef
            : desktopProfileRef

        return (
            <div
                ref={ref}
                className="relative ml-1"
            >
                <button
                    type="button"
                    onClick={() => setProfileOpen(prev => !prev)}
                    className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full bg-[#e5ece0]
                        text-[#1d3c2a] transition
                        hover:bg-[#ccd6cf]
                    "
                >
                    <i className="ri-user-line text-xl" />
                </button>

                {profileOpen && (
                    <ProfileMenu mobile={mobile} />
                )}
            </div>
        )
    }

    //  NAV LINKS 

    const NavigationLinks = ({ mobile = false }) => (
        <div
            className={
                mobile
                    ? "flex flex-col gap-1 font-Manrope font-semibold"
                    : "flex gap-8 font-Manrope text-sm font-semibold"
            }
        >
            {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={mobile ? closeMenu : undefined}
                    className={
                        mobile
                            ? "rounded-2xl px-4 py-3 text-[#42514d] hover:bg-[#e5ece0]"
                            : navClass
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    )

    //  LOGIN BUTTON 

    const LoginButton = ({ mobile = false }) => (
        <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className={`
                ml-1 rounded-full bg-[#1d3c2a]
                font-Manrope text-sm font-semibold text-white
                transition hover:bg-[#102a20]
                ${mobile
                    ? "min-w-20 px-4 py-2.5"
                    : "min-w-32 px-5 py-2.5"
                }
            `}
        >
            {mobile ? "Login" : "Login / Sign Up"}
        </button>
    )

    //  RIGHT SIDE 

    const RightSide = ({ mobile = false }) => (
        <div className="flex items-center gap-3">

            <IconLink
                to="/cart"
                onClick={mobile ? closeMenu : undefined}
                icon="ri-shopping-cart-2-line"
            />

            <IconLink
                to="/favourites"
                onClick={mobile ? closeMenu : undefined}
                icon="ri-heart-3-line"
            />

            {isLoggedIn
                ? <ProfileButton mobile={mobile} />
                : <LoginButton mobile={mobile} />
            }

            {mobile && (
                <button
                    type="button"
                    onClick={() => setMenuOpen(prev => !prev)}
                    className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full bg-[#e5ece0]
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
            )}

        </div>
    )

    return (
        <>
            {/*  DESKTOP  */}

            <nav
                className="
                    fixed left-1/2 top-4 z-50 hidden w-[90%]
                    -translate-x-1/2 items-center justify-between
                    rounded-3xl border border-white/20 bg-white/70
                    px-5 py-3 shadow-lg backdrop-blur-3xl lg:flex
                "
            >

                <NavLink to="/">
                    <img
                        src={Logo}
                        alt="EverOP"
                        className="h-10 w-auto"
                    />
                </NavLink>

                <NavigationLinks />

                <RightSide />

            </nav>

            {/*  MOBILE  */}

            <nav
                className="
                    fixed bottom-3 left-1/2 z-50 flex w-[94%]
                    -translate-x-1/2 items-center justify-between
                    rounded-3xl border border-white/20 bg-white/80
                    px-4 py-3 shadow-xl backdrop-blur-3xl lg:hidden
                "
            >

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

                <RightSide mobile />

            </nav>

            {/*  MOBILE MENU  */}

            {menuOpen && (
                <div
                    className="
                        fixed bottom-[5.5rem] left-1/2 z-40
                        w-[90%] -translate-x-1/2 rounded-3xl
                        border border-[#dce3dc] bg-[#f7f9f4]
                        p-4 shadow-xl lg:hidden
                    "
                >
                    <NavigationLinks mobile />
                </div>
            )}

            {/*  AUTH  */}

            {authOpen && (
                <Auth
                    onClose={() => setAuthOpen(false)}
                    onLogin={handleLogin}
                />
            )}
        </>
    )
}

export default Navbar