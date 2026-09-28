import React from "react"
import ContactPolicy from "./ContactPolicy"

const ContactPolicyStack = () => {
    return (
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">

            <ContactPolicy
                Icon="ri-customer-service-2-line"
                head="24/7"
                Body="Support"
            />

            <ContactPolicy
                Icon="ri-shield-check-line"
                head="Secure "
                Body="Shopping"
            />

            <ContactPolicy
                Icon="ri-tent-line"
                head="Adventure "
                Body="Together"
            />

        </div>
    )
}

export default ContactPolicyStack