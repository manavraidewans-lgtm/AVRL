import BackgroundImage from "../../Assets/off_hero.png"
import TittleName from "../TittleName"
import Tittle from "../Tittle"
import Description from "../Description"
import Button from "../Button"

const Off = () => {
    return (
        <section className="mt-8 flex w-full justify-center px-4 sm:mt-10 sm:px-6 lg:mt-12">
            <div
                className="relative flex min-h-[42vh] w-full max-w-7xl items-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat lg:h-[40vh]"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/5" />

                <div className="relative z-10 flex w-full flex-col items-start gap-4 p-6 sm:p-8 md:w-[75%] lg:w-[60%] lg:pl-16 xl:pl-20">
                    <TittleName Tittle="Limited Time" />

                    <Tittle
                        Heading="UP TO 40% Off"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    />

                    <Description
                        Des="Your favourite styles now at better Prices"
                        className="sm:max-w-lg"
                    />

                    <Button
                        Name="Shop Sale"
                        Link="/products"
                    />
                </div>
            </div>
        </section>
    )
}

export default Off