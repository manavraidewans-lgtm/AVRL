import React from "react"

const ContactForm = () => {
    return (
        <div className="flex h-full w-full flex-col rounded-2xl border border-[#dfe5df] bg-[#f9faf7] p-5 sm:p-6 md:p-8 lg:p-10">

            {/* Heading */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
                <i className="ri-tent-line text-2xl text-[#17382b] sm:text-3xl" />

                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#17382b] sm:text-base">
                    Send Us A Message
                </h2>
            </div>

            {/* Form */}
            <form className="flex flex-1 flex-col gap-4 sm:gap-5">

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <input
                        type="text"
                        placeholder="Name *"
                        className="h-14 w-full rounded-xl border border-[#d9e0da] bg-transparent px-4 text-sm text-[#152a23] outline-none transition placeholder:text-[#68766e] focus:border-[#17382b] sm:h-16 sm:px-5"
                    />

                    <input
                        type="email"
                        placeholder="Email *"
                        className="h-14 w-full rounded-xl border border-[#d9e0da] bg-transparent px-4 text-sm text-[#152a23] outline-none transition placeholder:text-[#68766e] focus:border-[#17382b] sm:h-16 sm:px-5"
                    />

                </div>

                {/* Subject */}
                <div className="relative">
                    <select
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-xl border border-[#d9e0da] bg-transparent px-4 pr-12 text-sm text-[#68766e] outline-none transition focus:border-[#17382b] sm:h-16 sm:px-5"
                    >
                        <option value="" disabled>
                            Subject
                        </option>
                        <option value="order">Order Related</option>
                        <option value="product">Product Question</option>
                        <option value="return">Return & Refund</option>
                        <option value="other">Other</option>
                    </select>

                    <i className="ri-arrow-down-s-line pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#17382b]" />
                </div>

                {/* Message */}
                <div className="flex min-h-40 flex-1 flex-col rounded-xl border border-[#d9e0da] p-4 sm:min-h-48 sm:p-5">

                    <label className="text-sm font-medium text-[#495f54]">
                        Message *
                    </label>

                    <textarea
                        placeholder="How can we help you?"
                        className="mt-3 min-h-28 w-full flex-1 resize-none bg-transparent text-sm text-[#152a23] outline-none placeholder:text-[#9aa49e]"
                    />

                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="flex h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#17382b] text-sm font-semibold text-white transition hover:bg-[#102a20] sm:h-16"
                >
                    <i className="ri-send-plane-line text-lg sm:text-xl" />
                    <span>Send Message</span>
                </button>

            </form>
        </div>
    )
}

export default ContactForm