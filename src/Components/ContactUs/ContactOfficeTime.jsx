import React from "react"

const ContactOfficeTime = () => {
    return (
        <div className="flex min-h-[420px] w-full flex-col items-center justify-center rounded-3xl px-6 py-10 text-center sm:min-h-[460px] sm:px-10 md:min-h-[500px] lg:min-h-[520px] lg:w-1/2 lg:px-12">

            {/* Icon */}
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#17382b]/20 bg-[#f3f6f1] sm:h-20 sm:w-20">
                <i className="ri-treasure-map-line text-3xl text-[#17382b] sm:text-4xl"></i>
            </div>


            {/* Heading */}
            <div className="flex flex-col items-center">

                <span className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#264930] sm:text-sm">
                    Visit Us
                </span>

                <h1 className="text-3xl font-bold leading-tight text-[#152a23] sm:text-4xl md:text-5xl">
                    Visit Our Office
                </h1>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#495f54] sm:text-base sm:leading-7">
                    We'd love to meet you in person! Stop by our office
                    during business hours and say hello.
                </p>

            </div>


            {/* Divider */}
            <div className="my-8 h-px w-full max-w-md bg-[#dce2dc] sm:my-10"></div>


            {/* Office Hours */}
            <div className="flex w-full max-w-md flex-col items-center">

                {/* Office Hours Title */}
                <div className="mb-6 flex items-center justify-center gap-3">

                    <i className="ri-time-line text-xl text-[#17382b] sm:text-2xl"></i>

                    <h2 className="text-base font-semibold tracking-wide text-[#17382b] sm:text-lg">
                        Office Hours
                    </h2>

                </div>


                {/* Hours List */}
                <div className="w-full space-y-4">

                    {/* Monday - Friday */}
                    <div className="flex items-center justify-between border-b border-[#dce2dc] pb-4">
                        <p className="text-sm text-[#495f54] sm:text-base">
                            Monday – Friday
                        </p>

                        <p className="text-sm font-medium text-[#264930] sm:text-base">
                            9:00 AM – 6:00 PM
                        </p>
                    </div>


                    {/* Saturday */}
                    <div className="flex items-center justify-between border-b border-[#dce2dc] pb-4">
                        <p className="text-sm text-[#495f54] sm:text-base">
                            Saturday
                        </p>

                        <p className="text-sm font-medium text-[#264930] sm:text-base">
                            10:00 AM – 4:00 PM
                        </p>
                    </div>


                    {/* Sunday */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-[#495f54] sm:text-base">
                            Sunday
                        </p>

                        <p className="text-sm font-medium text-[#8a948d] sm:text-base">
                            Closed
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactOfficeTime