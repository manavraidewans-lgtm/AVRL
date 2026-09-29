import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SplashScreen from "./Components/SplashScreen"
import PageTitle from "./Components/PageTittle"
import PageLoading from "./Components/PageLoading"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Favourites from "./Pages/Favourites"
import Profile from "./Pages/Profile"
import Orders from "./Pages/Orders"


function App() {

    const [showSplash, setShowSplash] = useState(true)


    return (
        <>

            {showSplash && (
                <SplashScreen
                    onComplete={() => setShowSplash(false)}
                />
            )}


            <div className="min-h-screen w-full bg-[#f9f9f4]">

                <PageTitle />

                <Navbar />


                <PageLoading>

                    <main className="min-w-0">

                        <Routes>

                            <Route
                                path="/"
                                element={<Home />}
                            />

                            <Route
                                path="/about"
                                element={<About />}
                            />

                            <Route
                                path="/products"
                                element={<Products />}
                            />

                            <Route
                                path="/contact"
                                element={<Contact />}
                            />

                            <Route
                                path="/cart"
                                element={<Cart />}
                            />

                            <Route
                                path="/favourites"
                                element={<Favourites />}
                            />

                            <Route
                                path="/profile"
                                element={<Profile />}
                            />

                            <Route
                                path="/orders"
                                element={<Orders />}
                            />

                            <Route
                                path="*"
                                element={<Home />}
                            />

                        </Routes>

                    </main>

                </PageLoading>


                <Footer />

            </div>

        </>
    )
}


export default App