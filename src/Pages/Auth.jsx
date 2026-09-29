import React, { useState } from "react"


function Auth({ onClose, onLogin }) {

    const [isSignUp, setIsSignUp] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [error, setError] = useState("")


    // ================= DEFAULT ACCOUNT =================

    const DEFAULT_USER = {
        name: "Manav Rai Dewan",
        email: "manav@everop.com",
        password: "Everop123",
    }


    // ================= LOGIN / SIGN UP =================

    const handleSubmit = (e) => {

        e.preventDefault()

        setError("")


        // =================================================
        // LOGIN
        // =================================================

        if (!isSignUp) {

            if (
                email === DEFAULT_USER.email &&
                password === DEFAULT_USER.password
            ) {

                // Save login status
                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                )


                // Save user's name
                localStorage.setItem(
                    "userName",
                    DEFAULT_USER.name
                )


                // Save user's email
                localStorage.setItem(
                    "userEmail",
                    DEFAULT_USER.email
                )


                // Tell Navbar
                window.dispatchEvent(
                    new Event("loginStatusChanged")
                )


                // Update Navbar immediately
                onLogin()


                // Close modal
                onClose()

            } else {

                setError(
                    "Invalid email or password."
                )

            }

            return
        }


        // =================================================
        // SIGN UP
        // =================================================

        if (!name || !email || !password) {

            setError(
                "Please fill in all fields."
            )

            return
        }


        // Save new user's information
        localStorage.setItem(
            "isLoggedIn",
            "true"
        )

        localStorage.setItem(
            "userName",
            name
        )

        localStorage.setItem(
            "userEmail",
            email
        )


        // Tell Navbar
        window.dispatchEvent(
            new Event("loginStatusChanged")
        )


        // Update Navbar
        onLogin()


        // Close modal
        onClose()

    }


    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/40
                p-4
                backdrop-blur-sm
            "
            onClick={onClose}
        >

            {/* ================= MODAL ================= */}

            <div
                className="
                    relative
                    w-full
                    max-w-md
                    rounded-3xl
                    bg-[#f7f9f4]
                    p-6
                    shadow-2xl
                    sm:p-8
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* ================= CLOSE ================= */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        text-[#42514d]
                        transition-all
                        duration-300
                        hover:bg-[#1d3c2a]
                        hover:text-white
                    "
                >

                    <i className="ri-close-line text-xl"></i>

                </button>


                {/* ================= TITLE ================= */}

                <div className="mb-7 pr-10">

                    <p className="
                        mb-2
                        font-Manrope
                        text-sm
                        font-semibold
                        uppercase
                        tracking-widest
                        text-[#65766c]
                    ">
                        Welcome to EverOP
                    </p>


                    <h2 className="
                        font-Manrope
                        text-3xl
                        font-bold
                        text-[#1d3c2a]
                        sm:text-4xl
                    ">
                        {isSignUp
                            ? "Create your account"
                            : "Welcome back"
                        }
                    </h2>


                    <p className="
                        mt-2
                        font-Manrope
                        text-sm
                        text-[#65766c]
                    ">
                        {isSignUp
                            ? "Create an account to continue shopping."
                            : "Login to continue to EverOP."
                        }
                    </p>

                </div>


                {/* ================= FORM ================= */}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {/* NAME */}

                    {isSignUp && (

                        <div>

                            <label className="
                                mb-1.5
                                block
                                font-Manrope
                                text-sm
                                font-semibold
                                text-[#42514d]
                            ">
                                Name
                            </label>


                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                placeholder="Enter your name"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-[#d8ded7]
                                    bg-white
                                    px-4
                                    py-3
                                    font-Manrope
                                    text-[#1d3c2a]
                                    outline-none
                                    transition-all
                                    focus:border-[#1d3c2a]
                                "
                            />

                        </div>

                    )}


                    {/* EMAIL */}

                    <div>

                        <label className="
                            mb-1.5
                            block
                            font-Manrope
                            text-sm
                            font-semibold
                            text-[#42514d]
                        ">
                            Email
                        </label>


                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
                            required
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-[#d8ded7]
                                bg-white
                                px-4
                                py-3
                                font-Manrope
                                text-[#1d3c2a]
                                outline-none
                                transition-all
                                focus:border-[#1d3c2a]
                            "
                        />

                    </div>


                    {/* PASSWORD */}

                    <div>

                        <label className="
                            mb-1.5
                            block
                            font-Manrope
                            text-sm
                            font-semibold
                            text-[#42514d]
                        ">
                            Password
                        </label>


                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter your password"
                            required
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-[#d8ded7]
                                bg-white
                                px-4
                                py-3
                                font-Manrope
                                text-[#1d3c2a]
                                outline-none
                                transition-all
                                focus:border-[#1d3c2a]
                            "
                        />

                    </div>


                    {/* ================= ERROR ================= */}

                    {error && (

                        <p className="
                            rounded-xl
                            bg-red-50
                            px-4
                            py-3
                            font-Manrope
                            text-sm
                            text-red-600
                        ">
                            {error}
                        </p>

                    )}


                    {/* ================= SUBMIT ================= */}

                    <button
                        type="submit"
                        className="
                            mt-2
                            flex
                            w-full
                            items-center
                            justify-center
                            rounded-full
                            bg-[#1d3c2a]
                            px-5
                            py-3
                            font-Manrope
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-[#102a20]
                        "
                    >
                        {isSignUp
                            ? "Create Account"
                            : "Login"
                        }
                    </button>

                </form>


                {/* ================= DEMO LOGIN ================= */}

                {!isSignUp && (

                    <div className="
                        mt-5
                        rounded-2xl
                        bg-[#e5ece0]
                        p-4
                    ">

                        <p className="
                            font-Manrope
                            text-xs
                            font-semibold
                            text-[#42514d]
                        ">
                            Demo Account
                        </p>

                        <p className="
                            mt-1
                            font-Manrope
                            text-xs
                            text-[#65766c]
                        ">
                            Email: manav@everop.com
                        </p>

                        <p className="
                            font-Manrope
                            text-xs
                            text-[#65766c]
                        ">
                            Password: Everop123
                        </p>

                    </div>

                )}


                {/* ================= SWITCH ================= */}

                <div className="
                    mt-6
                    text-center
                    font-Manrope
                    text-sm
                    text-[#65766c]
                ">

                    {isSignUp
                        ? "Already have an account?"
                        : "Don't have an account?"
                    }


                    <button
                        type="button"
                        onClick={() => {
                            setIsSignUp(!isSignUp)
                            setError("")
                        }}
                        className="
                            ml-1
                            font-semibold
                            text-[#1d3c2a]
                            hover:underline
                        "
                    >
                        {isSignUp
                            ? "Login"
                            : "Sign Up"
                        }
                    </button>

                </div>

            </div>

        </div>

    )
}


export default Auth