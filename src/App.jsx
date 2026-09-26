import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'

import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Favourites from './Pages/Favourites'
import Auth from './Pages/Auth'

function App() {
    return (
        <div className="min-h-screen w-full bg-red-200">

            <Navbar />

            <main className="">

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

        </div>
    )
}

export default App