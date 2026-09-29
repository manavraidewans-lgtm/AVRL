import React from "react"
import ContactMap from "./ContactMap"
import ContactOfficeTime from "./ContactOfficeTime"

const ContactMapOffice = () => {
    return (
        <div className="mt-12 flex w-full flex-col gap-8 px-4 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-12 xl:px-16 bg-[#ecf2e7]">

            <ContactMap />

            <ContactOfficeTime />

        </div>
    )
}

export default ContactMapOffice