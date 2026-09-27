function Tittle({ Heading, className = "" }) {
    return (
        <h1 className={`text-6xl font-bold text-[#152a23] ${className}`}>
            {Heading}
        </h1>
    )
}

export default Tittle