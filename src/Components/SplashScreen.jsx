import { useEffect, useState } from "react"
import BetterLookBetterDays from "../assets/Better-Look-Better-Days.png"

function SplashScreen({ children }) {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (!showSplash) {
        return children
    }

    return (
        <div className="fixed inset-0 z-12 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f9f9f4] px-6 text-[#073b2a]">

            
            <div className="absolute -left-24 -top-16 h-48 w-80 rotate-[-18deg] rounded-full bg-[#dfeee3] opacity-70" />

            <div className="absolute -bottom-20 -right-24 h-56 w-96 rotate-[-20deg] rounded-full bg-[#dfeee3] opacity-70" />

            <img
                src={BetterLookBetterDays}
                alt="Better Look Better Days"
                className="absolute right-8 top-15 w-26 object-contain sm:right-8 sm:top-8 sm:w-28 md:right-10 md:top-10 md:w-36 lg:right-12 lg:top-12 lg:w-40"
            />

            {/* Main */}
            <div className="relative flex flex-col items-center text-center">

                
                <h1 className="text-5xl font-black tracking-[-0.07em] sm:text-6xl md:text-8xl">
                    EVEROP
                </h1>

                
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] sm:text-sm md:text-base">
                    Style moves with you
                </p>

                {/* Loading Dots */}
                <div className="mt-14 flex items-center gap-3">
                    <span className="h-8.5 w-2.5 animate-bounce rounded-full bg-[#073b2a]" />

                    <span
                        className="h-8.5 w-2.5 animate-bounce rounded-full bg-[#8cae99]"
                        style={{ animationDelay: "100ms" }}
                    />

                    <span
                        className="h-8.5 w-2.5 animate-bounce rounded-full bg-[#8cae99]"
                        style={{ animationDelay: "150ms" }}
                    />

                    <span
                        className="h-8.5 w-2.5 animate-bounce rounded-full bg-[#8cae99]"
                        style={{ animationDelay: "200ms" }}
                    />

                </div>

                <p className="mt-4 text-xs tracking-wide text-[#557363] sm:text-sm">
                    Getting things ready...
                </p>

            </div>
        </div>
    )
}

export default SplashScreen