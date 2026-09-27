import BackgroundImage from "../../Assets/newsletter.png"
import TittleName from "../TittleName"
import Tittle from "../Tittle"
import Description from "../Description"
import Button from "../Button"

const NewsLetter = () => {
    return (
        <section className="mt-8 flex w-full justify-center px-4 sm:mt-10 sm:px-6 lg:mt-12">
            <div
                className="relative flex min-h-[50vh] w-full max-w-6xl items-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat sm:min-h-[45vh] lg:h-[40vh]"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/20" />

                <div className="relative z-10 flex w-full flex-col items-start gap-4 p-6 sm:p-8 md:w-[75%] lg:w-[65%] lg:pl-14 xl:pl-20">

                    <TittleName Tittle="STAY IN THE LOOP" />

                    <Tittle
                        Heading="Join Our Newsletter"
                        className="text-3xl sm:text-4xl md:text-5xl"
                    />

                    <Description
                        Des="Get exclusive offers, new arrivals and style inspiration straight to your inbox."
                        className="max-w-xl text-sm sm:text-base"
                    />

                    <div className="flex w-full max-w-md items-center rounded-full bg-white p-1.5">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none sm:px-4"
                        />

                        <Button
                            Name="Subscribe"
                            Link="#"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NewsLetter