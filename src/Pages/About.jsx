import AboutHero from "../Components/About/Hero"
import OurMission from "../Components/About/OurMission"
import OurStory from "../Components/About/OurStory"
import PoliciesStack from "../Components/About/PoliciesStack"


function About() {
    return (
        <div className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f2f4ea]"> 

            <AboutHero/>

            <PoliciesStack/>

            <OurStory/>

            <OurMission/>

        </div>
    )
}

export default About