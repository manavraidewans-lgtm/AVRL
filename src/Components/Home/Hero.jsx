import BackgroundImage from "../../Assets/hero.png"
import Button from "../Button"
import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"
import PoliciesStack from "./PoliciesStack"

function Hero() {
    return (
        <div
            className="flex h-[70vh] w-full items-end justify-between bg-cover bg-position-[60%_center] bg-no-repeat md:h-[80vh] md:bg-center"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >

            {/* Left Content */}
            <div className="flex h-[80%] w-[55%] flex-col gap-7 p-4 pl-25">

                <TittleName
                    Tittle="New Season"
                />

                <Tittle
                    Heading="STYLE THAT MOVES WITH YOU"
                />

                <Description
                    Des="Premium clothing for a better you. Comfort. Quality. Everyday."
                />

                <Button
                    Name="Shop Now"
                    Link="/products"
                />

                <PoliciesStack/>

            </div>

            {/* Right Side */}
            <div className="h-[80%] w-[45%]">
            </div>

        </div>
    )
}

export default Hero