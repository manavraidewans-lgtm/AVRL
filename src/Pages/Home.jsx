import Hero from "../Components/Home/Hero"
import LittleMore from "../Components/Home/LittleMore"
import NewArrivals from "../Components/Home/NewArrivals"
import NewsLetter from "../Components/Home/NewsLetter"
import Off from "../Components/Home/Off"
import ShopByCategory from "../Components/Home/ShopByCategory"

function Home() {
    return (
        <div className="pb-16"> 

            <Hero/>

            <ShopByCategory/>

            <Off/>

            <NewArrivals/>

            <LittleMore/>

            <NewsLetter/>

        </div>
    )
}

export default Home