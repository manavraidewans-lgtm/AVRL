import React from "react"
import MobileTop from "../Components/Profile/MobileTop"
import First from "../Components/Profile/First"
import Second from "../Components/Profile/Second"

function Profile() {

    const userName =
        localStorage.getItem("userName") || "Guest"

    const userEmail =
        localStorage.getItem("userEmail") || "No email"

    return (
        <section className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f5f5ee] lg:pt-35">

            <MobileTop/>

            <First/>

            <Second/>

        </section>
    )
}

export default Profile