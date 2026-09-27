import Hero from "../Components/Home/Hero"
import ShopByCategory from "../Components/Home/ShopByCategory"
import Off from "../Components/Home/Off"
import NewArrivals from "../Components/Home/NewArrivals"
import LittleMore from "../Components/Home/LittleMore"
import NewsLetter from "../Components/Home/NewsLetter"


function Home() {
    return (
        <main className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16">

            <Hero />

            <ShopByCategory />

            <Off />

            <NewArrivals />

            <LittleMore />

            <NewsLetter />
            
        </main>
    )
}

export default Home