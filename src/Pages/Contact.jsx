import ContactContent from "../Components/ContactUs/ContactContent"
import ContactHero from "../Components/ContactUs/ContactHero"

function Contact() {
    return (
        <div className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f2f4ea]"> 

            <ContactHero/>

            <ContactContent/>

            
            
        </div>
    )
}

export default Contact