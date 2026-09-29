import React from "react"

const ContactMap = () => {
    return (
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-[#dce2dc] bg-[#e9ebe5] shadow-sm sm:h-[480px] md:h-[600px] lg:h-[460px] lg:w-1/2">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4750.330525784793!2d-2.3532381080958182!3d53.46550649444842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487baebca18ac2ad%3A0xdd3fb0bab680f840!2sThe%20Trafford%20Centre!5e0!3m2!1sen!2sin!4v1790680927910!5m2!1sen!2sin"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="The Trafford Centre Location"
            />

        </div>
    )
}

export default ContactMap