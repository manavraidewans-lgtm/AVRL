import BackgroundImage2 from "../../Assets/about news.png"
import TittleName from "../TittleName"
import Tittle from "../Tittle"
import Description from "../Description"

const AboutNewsLetter = () => {
    return (
        <section className="mt-10 w-full px-4 sm:mt-12 sm:px-6 lg:mt-16">

            <div
                className="relative mx-auto flex w-full max-w-7xl overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BackgroundImage2})`,
                }}
            >

                =
                <div className="absolute inset-0 bg-[#102a20]/40" />


                
                <div className="relative z-10 flex w-full flex-col px-6 py-10 sm:px-10 sm:py-12 md:w-[75%] md:px-12 md:py-14 lg:w-[62%] lg:px-16 lg:py-12 xl:px-20">

                    
                    <TittleName
                        Tittle="Join The Journey"
                    />


                    
                    <Tittle
                        Heading="Be Part of Something Bigger"
                        className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
                    />


                    
                    <Description
                        Des="Follow our journey, get the latest drops, and never miss an update"
                        className="mt-1 max-w-lg text-sm text-white/85 sm:text-base"
                    />


                    
                    <form className="mt-6 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">

                        
                        <div className="flex min-w-0 flex-1 items-center rounded-full bg-white px-4 py-1.5 shadow-sm sm:px-5">

                            <i className="ri-mail-line mr-2 shrink-0 text-lg text-[#68766e]" />

                            <input
                                type="email"
                                placeholder="Your email address"
                                className="min-w-0 w-full bg-transparent py-2.5 text-sm text-[#152a23] outline-none placeholder:text-[#8a948e]"
                            />

                        </div>


                        
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

export default AboutNewsLetter