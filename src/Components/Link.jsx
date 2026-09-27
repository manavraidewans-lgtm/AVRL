import { Link as RouterLink } from "react-router-dom"

const Link = ({ Name, GoTo }) => {
    return (
        <RouterLink
            to={GoTo}
            className="group flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-[#152a23] sm:text-sm"
        >
            <span>{Name}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </RouterLink>
    )
}

export default Link