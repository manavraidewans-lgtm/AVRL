import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Favourites from "./Pages/Favourites"
import Auth from "./Pages/Auth"
import SplashScreen from "./Components/SplashScreen"

import PageTitle from "./Components/PageTittle"
import Footer from "./Components/Footer"


function App() {
    return (
        <SplashScreen>

            <div className="min-h-screen w-full bg-[#f9f9f4]">

                <PageTitle />

                <Navbar />

                <main className="min-w-0">
                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/about" element={<About />} />

                        <Route path="/products" element={<Products />} />

                        <Route path="/contact" element={<Contact />} />

                        <Route path="/cart" element={<Cart />} />

                        <Route path="/favourites" element={<Favourites />} />

                        <Route path="/auth" element={<Auth />} />

                    </Routes>
                </main>

                <Footer />

            </div>

        </SplashScreen>
    )
}

export default App