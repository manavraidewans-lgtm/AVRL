import BackgroundImage from "../../Assets/hero.png"

function Hero() {
    return (
        <div
            className="h-[70vh] w-full bg-cover bg-position-[60%_center] bg-no-repeat md:h-[80vh] md:bg-center"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}>
            
            
            

        </div>
    )
}

export default Hero