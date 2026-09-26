import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="fixed bottom-0 flex h-16 w-full items-center justify-between bg-blue-300 p-1 md:top-0 md:bottom-auto md:p-2">

            {/* Logo */}
            <div className="order-1 flex h-full w-[20%] items-center justify-center bg-green-300 md:w-[15%]">
                <Link to="/">
                    logo
                </Link>
            </div>

            {/* Options */}
            <div className="order-3 flex h-full w-[20%] items-center justify-center bg-pink-300 md:order-2 md:w-[50%]">
                <div className="flex gap-4">
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>

            {/* Login / Cart / Favourite */}
            <div className="order-2 flex h-full w-[55%] items-center justify-center bg-amber-200 md:order-3 md:w-[30%]">
                login / cart / fav
            </div>

        </div>
    )
}

export default Navbar