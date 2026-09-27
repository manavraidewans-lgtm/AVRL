import BackgroundImage from "../../Assets/off_hero.png"
import TittleName from '../TittleName'
import Tittle from '../Tittle'
import Description from '../Description'
import Button from '../Button'

const Off = () => {
    return (
        <div className="mt-4.5 flex h-[40vh] w-full items-center justify-center">

            <div
                className="relative flex h-[90%] w-[90%] items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/05"></div>

                {/* Main */}
                <div className="relative z-10 flex h-full w-[60%] flex-col items-start justify-center gap-4 p-8 pl-25">

                    <TittleName
                        Tittle="Limited Time"
                    />

                    <Tittle
                        Heading="UP TO 40% Off"
                    />

                    <Description
                        Des="Your favourite styles now at better Prices"
                    />

                    <Button
                        Name="Shop Sale"
                        Link="/products"
                    />

                </div>

            </div>

        </div>
    )
}

export default Off