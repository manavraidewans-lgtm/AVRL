import BackgroundImage from "../../Assets/Little_More.avif"
import Tittle from "../Tittle"
import Description from "../Description"
import Button from "../Button"

const LittleMore = () => {
    return (
        <section className="mt-5 flex w-full justify-center px-4 sm:px-6 md:mt-8">
            <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#e8efe6] md:h-[40vh] md:flex-row">

                <div className="h-56 w-full sm:h-72 md:h-full md:w-[40%]">
                    <img
                        src={BackgroundImage}
                        alt="Pic About"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-4 p-6 text-center sm:p-8 md:w-[60%]">
                    <Tittle Heading="Style Made Simple" />

                    <Description
                        Des="Everyday clothing designed for comfort, confidence, and effortless style."
                    />

                    <Button
                        Name="Explore More"
                        Link="/about"
                    />
                </div>

            </div>
        </section>
    )
}

export default LittleMore

