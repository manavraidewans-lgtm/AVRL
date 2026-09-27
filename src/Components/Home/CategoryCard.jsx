import { Link } from "react-router-dom"

const CategoryCard = ({
    Image,
    Name = "Men's T-Shirts",
    Price = "From ₹19",
}) => {
    return (
        <Link
            to="/products"
            className="group block w-full overflow-hidden rounded-2xl border border-[#e1e5df] bg-[#f9faf7]"
        >
            <div className="h-56 w-full overflow-hidden bg-[#e9ebe5] sm:h-64 md:h-72 lg:h-80">
                <img
                    src={Image}
                    alt={Name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="flex items-center justify-between px-4 pt-4 sm:px-5 lg:px-6 lg:pt-5">
                <h3 className="text-sm font-semibold text-[#152a23] sm:text-base lg:text-lg">
                    {Name}
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#17382b] text-white sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <i className="ri-arrow-right-line text-sm lg:text-base" />
                </span>
            </div>

            <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
                <p className="text-xs font-semibold text-[#68766e] sm:text-sm">
                    {Price}
                </p>
            </div>
        </Link>
    )
}

export default CategoryCard