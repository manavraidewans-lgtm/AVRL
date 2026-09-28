import Desktop from "../../Assets/Our-Story-Desktop.png"
import Button from "../Button"
import Description from "../Description"
import Tittle from "../Tittle"
import TittleName from "../TittleName"

const OurStory = () => {
    return (
        <>
            {/* Desktop */}
            <div className="hidden h-[55vh] w-full items-center justify-evenly lg:mt-15 lg:flex">

                <div className="flex h-[90%] w-[90%] items-center justify-evenly rounded-2xl">

                    <div className="h-full w-[45%] overflow-hidden rounded-2xl">
                        <img
                            src={Desktop}
                            alt="Our Story"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex h-full w-[45%] flex-col gap-3 p-6">

                        <TittleName Tittle="OUR STORY"  />

                        <Tittle Heading="Born from a Love for the outdoors"/>

                        <Description
                            Des="Everop started with a simple idea - to create high-quality, versatile clothing for people who live life outdoors, what began as a small passion project has grown into a brand that inspires adventure, freedom and self expressions."
                            className="text-[1rem]"
                        />

                        <Button
                            Name="Our Journey"
                            Link="/"
                        />

                    </div>

                </div>

            </div>


            {/* Mobile + Tablet */}
            <div className="flex w-full justify-center lg:hidden">

                <div className="flex w-[92%] flex-col overflow-hidden rounded-2xl bg-[#f1f1f1] sm:w-[85%]">

                    <div className="h-[40vh] w-full overflow-hidden sm:h-[45vh]">
                        <img
                            src={Desktop}
                            alt="Our Story"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-3 p-6 sm:p-8">

                        <TittleName Tittle="OUR STORY" />

                        <Tittle Heading="Born from a Love for the outdoors" />

                        <Description
                            Des="Everop started with a simple idea - to create high-quality, versatile clothing for people who live life outdoors, what began as a small passion project has grown into a brand that inspires adventure, freedom and self expressions."
                            className="text-sm sm:text-base"
                        />

                        <Button
                            Name="Our Journey"
                            Link="/"
                        />

                    </div>

                </div>

            </div>
        </>
    )
}

export default OurStory