function Navbar() {
    return (
        <div className="fixed bottom-0 flex h-16 w-full items-center justify-between bg-blue-300 p-1 md:p-2 md:top-0 md:bottom-auto">

            {/* Logo */}
            <div className="order-1 h-full w-[20%] md:w-[15%] bg-green-300 flex justify-center items-center">
                logo
            </div>

            {/* Options */}
            <div className="order-3 h-full w-[20%] md:w-[50%] bg-pink-300 md:order-2 flex justify-center items-center">
                options
            </div>

            {/* Login / Cart / Favourite */}
            <div className="order-2 h-full w-[55%] md:w-[30%] bg-amber-200 md:order-3 flex justify-center items-center">
                login / cart / fav
            </div>

        </div>
    )
}

export default Navbar