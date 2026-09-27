import { Link } from "react-router-dom"

function Button({ Name, Link: link }) {
    return (
        <Link
            to={link}
            className="group flex w-fit items-center gap-2 rounded-full bg-[#17382b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#102a20] sm:gap-3 sm:px-5 sm:py-2.5"
        >
            <span>{Name}</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcebd7] text-[#17382b] transition-transform duration-300 group-hover:translate-x-1 sm:h-7 sm:w-7">
                →
            </span>
        </Link>
    )
}

export default Button