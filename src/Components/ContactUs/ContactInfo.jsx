import React from "react"

const ContactInfo = ({ Icon, Tittle, Description }) => {
    return (
        <div className="flex h-[12vh] w-[70%] md:w-[50%] items-center overflow-hidden ml-3">

            {/* Left - Icon */}
            <div className="flex h-full w-[25%]  shrink-0 items-center justify-center">

                <div className="flex h-full w-full items-center justify-center rounded-full text-[#1d302d]">
                    <i className={`${Icon} text-3xl p-2 border-2 rounded-[50%] border-[#1d302d] font-semibold`} />
                </div>

            </div>

            {/* Right - Content */}
            <div className="flex h-full min-w-0 w-[75%] flex-col justify-center gap-1 px-2">

                <h1 className="truncate text-xl font-semibold text-[#1d302d]">
                    {Tittle}
                </h1>

                <p className="line-clamp-2 text-m leading-relaxed text-[#495f54]">
                    {Description}
                </p>

            </div>

        </div>
    )
}

export default ContactInfo