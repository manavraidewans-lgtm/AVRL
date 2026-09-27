function Description({ Des, className = "" }) {
    return (
        <p className={`text-xl w-[60%] text-[#495f54] font-semibold ${className}`}>
            {Des}
        </p>
    )
}

export default Description