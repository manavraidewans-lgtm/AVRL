import ContactContent from "../Components/ContactUs/ContactContent"
import ContactHero from "../Components/ContactUs/ContactHero"
import ContactMapOffice from "../Components/ContactUs/ContactMapOffice"
import ContactNewsLetter from "../Components/ContactUs/ContactNewsLetter"

function Contact() {
    return (
        <div className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f2f4ea]"> 

            <ContactHero/>

            <ContactContent/>

            <ContactMapOffice/>
            
            <ContactNewsLetter/>
            
        </div>
    )
}

export default Contact