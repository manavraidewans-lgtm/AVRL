import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ Name, GoTo }) => {
    return (
        <RouterLink
            to={GoTo}
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#152a23]"
        >
            <span className="font-semibold">
                {Name}
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </RouterLink>
    )
}

export default Link