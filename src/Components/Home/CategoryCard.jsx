import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({
    Image,
    Name = "Men's T-Shirts",
    Price = "From ₹19",
}) => {
    return (
        <Link
            to="/products"
            className="group block w-[calc(25%-15px)] min-w-65 overflow-hidden rounded-2xl border border-[#e1e5df] bg-[#f9faf7]"
        >

            
            <div className="h-80 w-full overflow-hidden bg-[#e9ebe5]">

                <img
                    src={Image}
                    alt={Name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

            </div>


            
            <div className="flex items-center justify-between px-6 pt-5">

                <h3 className="text-lg font-semibold text-[#152a23]">
                    {Name}
                </h3>

                
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17382b] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#102a20]">
                    <i className="ri-arrow-right-line text-base"></i>
                </span>

            </div>


            
            <div className="px-6 pb-6 pt-2">

                <p className="text-sm  text-[#68766e] font-semibold">
                    {Price}
                </p>

            </div>

        </Link>
    )
}

export default CategoryCard