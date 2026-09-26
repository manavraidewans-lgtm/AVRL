import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"


import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'

function App() {
    return (
        <div className="min-h-screen w-full ">

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>


            
        </div>
    )
}

export default App