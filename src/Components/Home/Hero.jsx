import BackgroundImage from "../../Assets/hero.png"
import Background2 from "../../Assets/Home2.PNG"
import Button from "../Button"
import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"
import PoliciesStack from "./PoliciesStack"

function Hero() {
    return (
        <section className="w-full">

            {/* Mobile + Tablet */}
            <div className="lg:hidden">
                <div
                    className="h-[42vh] min-h-64 bg-cover bg-center bg-no-repeat sm:h-[48vh] md:h-[52vh]"
                    style={{ backgroundImage: `url(${Background2})` }}
                />

                <div className="flex flex-col gap-5 bg-[#f9faf7] p-5 sm:p-8 md:p-10">
                    <TittleName Tittle="New Season" />

                    <Tittle Heading="STYLE THAT MOVES WITH YOU" />

                    <Description
                        Des="Premium clothing for a better you. Comfort. Quality. Everyday."
                    />

                    <Button Name="Shop Now" Link="/products" />

                    <PoliciesStack />
                </div>
            </div>

            {/* Desktop */}
            <div
                className="hidden h-[80vh] items-end bg-cover bg-center bg-no-repeat lg:flex"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="flex h-[80%] w-[55%] flex-col gap-7 p-8 xl:pl-20">
                    <TittleName Tittle="New Season" />
                    <Tittle Heading="STYLE THAT MOVES WITH YOU" />
                    <Description
                        Des="Premium clothing for a better you. Comfort. Quality. Everyday."
                    />
                    <Button Name="Shop Now" Link="/products" />
                    <PoliciesStack />
                </div>
            </div>

        </section>
    )
}

export default Hero