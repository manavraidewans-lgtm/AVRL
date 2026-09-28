import AboutHeroDesktop from "../../Assets/About-Hero-Desktop.png"
import AboutHeroMobile from "../../Assets/About-Hero-Mobile.png"
import Button from "../Button"

import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"


function AboutHero() {
    return (
        <section className="w-full">

            {/* Mobile + Tablet */}
            <div className="lg:hidden">
                <div
                    className="h-[42vh] min-h-64 bg-cover bg-center bg-no-repeat sm:h-[48vh] md:h-[52vh]"
                    style={{ backgroundImage: `url(${AboutHeroMobile})` }}
                />

                <div className="flex flex-col gap-5 bg-[#f9faf7] p-5 sm:p-8 md:p-10">
                    <TittleName 
                    Tittle="About Us" 
                    />

                    <Tittle 
                    Heading="More Than Just Clothes, It's a Mindset." />

                    <Description
                        Des="At Everop, we believe in more than just what you wear. We believe in the freedom to explore, the courage to be yourself, and the mindset to keep going no matter where life takes you."
                    />

                    <Button
                    Name="Shop Now" 
                    Link="/products"
                    />
                </div>
            </div>

            {/* Desktop */}
            <div
                className="hidden h-[80vh] items-end bg-cover bg-center/40 bg-no-repeat lg:flex"
                style={{ backgroundImage: `url(${AboutHeroDesktop})` }}
            >
                <div className="flex h-[80%] w-[55%] flex-col gap-7 p-8 xl:pl-20">

                    <TittleName 
                    Tittle="About Us" 
                    />

                    <Tittle 
                    Heading="More Than Just Clothes, It's a Mindset." />

                    <Description
                        Des="At Everop, we believe in more than just what you wear. We believe in the freedom to explore, the courage to be yourself, and the mindset to keep going no matter where life takes you."
                    />

                    <Button
                    Name="Shop Now" 
                    Link="/products"
                    />
                    
                </div>
            </div>

        </section>
    )
}

export default AboutHero