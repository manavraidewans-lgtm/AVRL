function Tittle({ Heading, className = "" }) {
    return (
        <h1
            className={`text-3xl font-bold leading-tight text-[#152a23] sm:text-4xl md:text-5xl lg:text-6xl ${className}`}
        >
            {Heading}
        </h1>
    )
}

export default Tittle