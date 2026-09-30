import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ShopImage from "../Assets/Splash-Screen.png"

const SplashScreen = ({ onComplete }) => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(imageRef.current, {
                scale: 1,
                transformOrigin: "49% 51% ",
            })

            gsap.timeline({ onComplete })
                .to(imageRef.current, {
                    scale: 4.8,
                    duration: 2,
                    ease: "power3.in",
                })
                .to(containerRef.current, {
                    opacity: 0,
                    duration: 0,
                    ease: "power2.out",
                })
        }, containerRef)

        return () => ctx.revert()
    }, [onComplete])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-999 h-dvh w-full overflow-hidden bg-[#f9f9f4]"
        >
            <img
                ref={imageRef}
                src={ShopImage}
                alt="Every Opi Store"
                className="h-full w-full object-cover object-center will-change-transform"
            />
        </div>
    )
}

export default SplashScreen

