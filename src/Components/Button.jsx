import { Link } from "react-router-dom"

function Button({ Name, Link: link }) {
    return (
        <Link
            to={link}
            className="group flex w-fit items-center gap-3 rounded-full bg-[#17382b] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#102a20]"
        >
            <span>{Name}</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dcebd7] text-[#17382b] transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </Link>
    )
}

export default Button