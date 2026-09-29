import BackgroundImage2 from "../../Assets/Contact-News-Letter.png"
import TittleName from "../TittleName"
import Tittle from "../Tittle"
import Description from "../Description"

const ContactNewsLetter = () => {
    return (
        <section className="mt-10 w-full px-4 sm:mt-12 sm:px-6 lg:mt-16">

            <div
                className="relative mx-auto flex h-[45vh] md:h-[40vh] w-full max-w-7xl items-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat" 
                style={{
                    backgroundImage: `url(${BackgroundImage2})`,
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#102a20]/40" />


                {/* Content - RIGHT SIDE */}
                <div className="relative z-10 ml-auto flex w-full flex-col items-start px-6 py-10 text-left sm:w-[65%] sm:px-10 sm:py-12 md:w-[58%] md:px-12 lg:w-[48%] lg:px-12 xl:w-[45%] xl:px-14">

                    {/* Small Heading */}
                    <TittleName
                        Tittle="Stay Connected"
                    />


                    {/* Main Heading */}
                    <Tittle
                        Heading="Follow Our Journey"
                        className="mt-2 text-left text-3xl text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
                    />


                    {/* Description */}
                    <Description
                        Des="Get the latest updates, new arrivals, and exclusive offers straight to your inbox"
                        className="mt-2 max-w-lg text-left text-sm text-white/35 sm:text-base"
                    />


                    {/* Form */}
                    <form className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">

                        {/* Email */}
                        <div className="flex min-w-0 flex-1 items-center rounded-full bg-white px-4 py-1.5 shadow-sm sm:px-5">

                            <i className="ri-mail-line mr-2 shrink-0 text-lg text-[#68766e]" />

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="min-w-0 w-full bg-transparent py-2.5 text-sm text-[#152a23] outline-none placeholder:text-[#8a948e]"
                            />

                        </div>


                        {/* Button */}
                        <button
                            type="submit"
                            className="group flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#17382b] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#102a20]"
                        >
                            <span>
                                Subscribe
                            </span>

                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcebd7] text-[#17382b] transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default ContactNewsLetter