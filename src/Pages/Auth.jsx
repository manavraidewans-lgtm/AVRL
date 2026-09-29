import React, { useState } from "react"

function Auth({ onClose, onLogin }) {

    const [isSignUp, setIsSignUp] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")
    const [loginState, setLoginState] = useState("idle")


    const defaultUser = {
        name: "Manav Rai Dewan",
        email: "manav@everop.com",
        password: "Everop123",
    }


    const handleSubmit = (e) => {

        e.preventDefault()
        setError("")


        // Login
        if (!isSignUp) {

            if (
                email !== defaultUser.email ||
                password !== defaultUser.password
            ) {
                setError("Invalid email or password.")
                return
            }


            localStorage.setItem("isLoggedIn", "true")
            localStorage.setItem("userName", defaultUser.name)
            localStorage.setItem("userEmail", defaultUser.email)


            setLoginState("loading")


            setTimeout(() => {

                setLoginState("success")


                setTimeout(() => {

                    if (onLogin) {
                        onLogin()
                    }

                    if (onClose) {
                        onClose()
                    }

                }, 2000)

            }, 2000)

            return
        }


        // Sign Up
        if (!name || !email || !password) {
            setError("Please fill in all fields.")
            return
        }


        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", name)
        localStorage.setItem("userEmail", email)


        setLoginState("loading")


        setTimeout(() => {

            setLoginState("success")


            setTimeout(() => {

                if (onLogin) {
                    onLogin()
                }

                if (onClose) {
                    onClose()
                }

            }, 1000)

        }, 1000)
    }


    const buttonContent = () => {

        if (loginState === "loading") {
            return (
                <>
                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                    <span>Logging in...</span>
                </>
            )
        }


        if (loginState === "success") {
            return (
                <>
                    <i className="ri-check-line text-2xl"></i>
                    <span>Success</span>
                </>
            )
        }


        return isSignUp ? "Create Account" : "Login"
    }


    return (

        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => {
                if (loginState === "idle") {
                    onClose()
                }
            }}
        >

            <div
                className="relative w-full max-w-md rounded-3xl bg-[#f7f9f4] p-6 shadow-2xl sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close button */}

                <button
                    type="button"
                    onClick={onClose}
                    disabled={loginState !== "idle"}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#42514d] transition hover:bg-[#1d3c2a] hover:text-white"
                >
                    <i className="ri-close-line text-xl"></i>
                </button>


                {/* Heading */}

                <div className="mb-7 pr-10">

                    <p className="mb-2 font-Manrope text-sm font-semibold uppercase tracking-widest text-[#65766c]">
                        Welcome to EverOP
                    </p>

                    <h2 className="font-Manrope text-3xl font-bold text-[#1d3c2a] sm:text-4xl">
                        {isSignUp
                            ? "Create your account"
                            : "Welcome back"}
                    </h2>

                    <p className="mt-2 font-Manrope text-sm text-[#65766c]">
                        {isSignUp
                            ? "Create an account to continue shopping."
                            : "Login to continue to EverOP."}
                    </p>

                </div>


                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {/* Name */}

                    {isSignUp && (

                        <div>

                            <label className="mb-1.5 block font-Manrope text-sm font-semibold text-[#42514d]">
                                Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                disabled={loginState !== "idle"}
                                className="w-full rounded-2xl border border-[#d8ded7] bg-white px-4 py-3 font-Manrope text-[#1d3c2a] outline-none focus:border-[#1d3c2a]"
                            />

                        </div>

                    )}


                    {/* Email */}

                    <div>

                        <label className="mb-1.5 block font-Manrope text-sm font-semibold text-[#42514d]">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            disabled={loginState !== "idle"}
                            required
                            className="w-full rounded-2xl border border-[#d8ded7] bg-white px-4 py-3 font-Manrope text-[#1d3c2a] outline-none focus:border-[#1d3c2a]"
                        />

                    </div>


                    {/* Password */}

                    <div>

                        <label className="mb-1.5 block font-Manrope text-sm font-semibold text-[#42514d]">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            disabled={loginState !== "idle"}
                            required
                            className="w-full rounded-2xl border border-[#d8ded7] bg-white px-4 py-3 font-Manrope text-[#1d3c2a] outline-none focus:border-[#1d3c2a]"
                        />

                    </div>


                    {/* Error */}

                    {error && (

                        <p className="rounded-xl bg-red-50 px-4 py-3 font-Manrope text-sm text-red-600">
                            {error}
                        </p>

                    )}


                    {/* Login button */}

                    <button
                        type="submit"
                        disabled={loginState !== "idle"}
                        className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1d3c2a] px-5 py-3 font-Manrope font-semibold text-white transition hover:bg-[#102a20]"
                    >
                        {buttonContent()}
                    </button>

                </form>


                {/* Demo account */}

                {!isSignUp && loginState === "idle" && (

                    <div className="mt-5 rounded-2xl bg-[#e5ece0] p-4">

                        <p className="font-Manrope text-xs font-semibold text-[#42514d]">
                            Demo Account
                        </p>

                        <p className="mt-1 font-Manrope text-xs text-[#65766c]">
                            Email: manav@everop.com
                        </p>

                        <p className="font-Manrope text-xs text-[#65766c]">
                            Password: Everop123
                        </p>

                    </div>

                )}


                {/* Login / Signup switch */}

                {loginState === "idle" && (

                    <div className="mt-6 text-center font-Manrope text-sm text-[#65766c]">

                        {isSignUp
                            ? "Already have an account?"
                            : "Don't have an account?"}

                        <button
                            type="button"
                            onClick={() => {
                                setIsSignUp(!isSignUp)
                                setError("")
                            }}
                            className="ml-1 font-semibold text-[#1d3c2a] hover:underline"
                        >
                            {isSignUp ? "Login" : "Sign Up"}
                        </button>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Auth