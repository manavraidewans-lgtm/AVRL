import React from "react"

import TittleName from "../TittleName"
import Tittle from "../Tittle"
import Description from "../Description"
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

const ContactContent = () => {
    return (
        <section className="mt-12 flex min-h-[90vh] w-full flex-col items-center justify-center gap-6 p-4 md:min-h-[70vh] lg:h-[90vh] lg:flex-row lg:gap-8 lg:p-19">

            {/* Left */}
            <div className="flex h-auto w-full flex-col items-start justify-center gap-3 md:gap-4 lg:h-full lg:w-1/2">

                <TittleName Tittle="Contact Us" />

                <Tittle Heading="Let's Connect" />

                <Description
                    Des="Whether you have a question about our products, need help with an order, or just want to say hi, we'd love to hear from you."
                />

                {/* Contact Info */}
                <div className="flex w-full flex-col items-start justify-center gap-3 py-4 sm:gap-4 md:py-6">

                    <ContactInfo
                        Icon="ri-map-pin-line"
                        Tittle="Our Location"
                        Description="123 Adventure Lane, Boulder, CO 80302"
                    />

                    <ContactInfo
                        Icon="ri-mail-line"
                        Tittle="Email Us"
                        Description="hello@everop.com"
                    />

                    <ContactInfo
                        Icon="ri-phone-line"
                        Tittle="Call Us"
                        Description="+1 (555) 123-4567"
                    />

                </div>
            </div>

            {/* Right */}
            <div className="flex min-h-[60vh] w-full lg:h-full lg:min-h-0 lg:w-1/2">
                <ContactForm />
            </div>

        </section>
    )
}

export default ContactContent