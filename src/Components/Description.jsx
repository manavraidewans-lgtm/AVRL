function Description({ Des, className = "" }) {
    return (
        <p
            className={`w-full text-sm font-semibold text-[#495f54] sm:text-base md:max-w-xl lg:text-xl ${className}`}
        >
            {Des}
        </p>
    )
}

export default Description