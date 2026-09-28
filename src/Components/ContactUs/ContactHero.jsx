import AboutHeroDesktop from "../../Assets/Contact-hero-desktop.png"
import AboutHeroMobile from "../../Assets/Contact-Hero.png"

import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"
import ContactPolicyStack from "./ContactPolicyStack"


function ContactHero() {
    return (
        <section className="w-full">

            {/* Mobile + Tablet */}
            <div className="lg:hidden">
                <div
                    className="h-[42vh] min-h-64 bg-cover bg-[center_90%] bg-no-repeat sm:h-[48vh] md:h-[52vh]"
                    style={{ backgroundImage: `url(${AboutHeroMobile})` }}
                />

                <div className="flex flex-col gap-5 bg-[#f9faf7] p-5 sm:p-8 md:p-10">
                    <TittleName 
                        Tittle="About Us" 
                    />

                    <Tittle 
                        Heading="More Than Just Clothes, It's a Mindset."
                    />

                    <Description
                        Des="At Everop, we believe in more than just what you wear. We believe in the freedom to explore, the courage to be yourself, and the mindset to keep going no matter where life takes you."
                    />

                    <ContactPolicyStack />
                </div>
            </div>

            {/* Desktop */}
            <div
                className="hidden min-h-[80vh] items-end bg-cover bg-center bg-no-repeat lg:flex"
                style={{ backgroundImage: `url(${AboutHeroDesktop})` }}
            >
                <div className="ml-auto flex h-[80%] w-[45%] flex-col justify-end gap-7 p-8 xl:p-20">

                    <TittleName 
                        Tittle="Get In Touch " 
                    />

                    <Tittle 
                        Heading="We'd Love to Hear From You" 
                    />

                    <Description
                        Des="Have a question, suggestion, or need assistance? 
                        Our team is here to help. Reach out to us."
                    />

                    <ContactPolicyStack />

                </div>
            </div>

        </section>
    )
}

export default ContactHero