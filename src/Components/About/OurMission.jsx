import MissionImage from "../../Assets/Contact-hero-desktop.png"
import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"
import BetterLook from "../../Assets/Better-Look-Better-Days.png"

const OurMission = () => {
    return (
        <section className="mt-10 w-full sm:mt-12 lg:mt-15">

            
            <div className="flex w-full justify-center lg:hidden">

                <div className="relative flex w-[92%] flex-col overflow-hidden rounded-3xl bg-[#e8efe6] p-6 sm:w-[90%] sm:p-8 md:p-10">

                
                    <div className="absolute right-0 top-0 h-32 w-28 overflow-hidden rounded-bl-3xl sm:h-40 sm:w-36 md:h-44 md:w-40">
                        <img
                            src={BetterLook}
                            alt="Better Look Better Days"
                            className="h-full w-full object-cover"
                        />
                    </div>


                    
                    <div className="relative z-10 flex w-full flex-col gap-4 pr-20 sm:pr-24 md:pr-28">

                        <TittleName Tittle="OUR MISSION" />

                        <Tittle
                            Heading="Clothing for a Bigger Tomorrow"
                            className="text-3xl sm:text-4xl"
                        />

                        <Description
                            Des="We're here to make outdoor living more accessible, comfortable and more sustainable. Every piece we create is designed with purpose — to help you explore further, feel better and leave a lighter footprint on the planet."
                            className="text-sm sm:text-base"
                        />

                    </div>


                    
                    <div className="relative z-10 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">

                        <div className="flex items-center gap-3">
                            <i className="ri-leaf-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                Sustainable Materials
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-earth-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                Responsible Production
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-recycle-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                A Greener Future
                            </span>
                        </div>

                    </div>

                </div>

            </div>


           
            <div
                className="hidden h-[55vh] w-full items-center justify-end bg-cover bg-center bg-no-repeat lg:flex"
                style={{ backgroundImage: `url(${MissionImage})` }}
            >

                <div className="mr-[2%] flex w-[38%] flex-col gap-4">

                    <TittleName Tittle="OUR MISSION" />

                    <Tittle
                        Heading="Clothing for a Bigger Tomorrow"
                        className="text-4xl xl:text-5xl"
                    />

                    <Description
                        Des="We're here to make outdoor living more accessible, comfortable and more sustainable. Every piece we create is designed with purpose — to help you explore further, feel better and leave a lighter footprint on the planet."
                        className="max-w-xl text-base"
                    />

                    <div className="mt-3 flex gap-8">

                        <div className="flex items-center gap-2">
                            <i className="ri-leaf-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                Sustainable Materials
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="ri-earth-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                Responsible Production
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="ri-recycle-line text-2xl text-[#17382b]" />

                            <span className="text-sm font-semibold text-[#152a23]">
                                A Greener Future
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default OurMission