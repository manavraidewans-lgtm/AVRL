import React from 'react'
import BackgroundImage from "../../Assets/newsletter.png"
import TittleName from '../TittleName'
import Tittle from '../Tittle'
import Description from '../Description'
import Button from '../Button'

const NewsLetter = () => {
    return (
        <div className="mt-4.5 flex h-[40vh] w-full items-center justify-center">

            <div
                className="relative flex h-[90%] w-[80%] items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/15"></div>

                {/* Main */}
                <div className="relative z-10 flex h-full w-[60%] flex-col items-start justify-center gap-4 p-8 pl-25">

                    <TittleName
                        Tittle="STAY IN THE LOOP"
                    />

                    <Tittle
                        Heading="Join Our Newsletter"
                    />

                    <Description
                        Des="Get exclusive offers, new arrivals and style inspiration straight to your inbox."
                    />

                    {/* Email */}
                    <div className="flex w-full max-w-125 items-center gap-2 rounded-full bg-white p-1.5">

                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-transparent px-4 py-2 text-sm outline-none"
                        />

                        <Button
                            Name="Subscribe"
                            Link="#"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default NewsLetter