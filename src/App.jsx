import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Favourites from "./Pages/Favourites"
import Profile from "./Pages/Profile"
import Orders from "./Pages/Orders"
import SplashScreen from "./Components/SplashScreen"
import PageTitle from "./Components/PageTittle"
import Footer from "./Components/Footer"

function App() {

    const [showSplash, setShowSplash] = useState(true)

    return (
        <>
            {/* Cinematic Splash */}
            {showSplash && (
                <SplashScreen
                    onComplete={() => setShowSplash(false)}
                />
            )}

            {/* Main Website */}
            <div className="min-h-screen w-full bg-[#f9f9f4]">

                <PageTitle />

                <Navbar />

                <main className="min-w-0">

                    <Routes>

                        {/* Home */}
                        <Route
                            path="/"
                            element={<Home />}
                        />

                        {/* About */}
                        <Route
                            path="/about"
                            element={<About />}
                        />

                        {/* Products */}
                        <Route
                            path="/products"
                            element={<Products />}
                        />

                        {/* Contact */}
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />

                        {/* Cart */}
                        <Route
                            path="/cart"
                            element={<Cart />}
                        />

                        {/* Favourites */}
                        <Route
                            path="/favourites"
                            element={<Favourites />}
                        />

                        {/* Profile */}
                        <Route
                            path="/profile"
                            element={<Profile />}
                        />

                        {/* Order*/}
                        <Route
                            path="/orders"
                            element={<Orders />}
                        />

                        {/* Any unknown page → Home */}
                        <Route
                            path="*"
                            element={<Home />}
                        />

                    </Routes>

                </main>

                <Footer />

            </div>
        </>
    )
}

export default App