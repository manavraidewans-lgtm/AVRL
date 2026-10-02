import { useState } from "react"
import ProductCategories from "../Components/Products/ProductCategories"
import ProductBanner from "../Components/Products/ProductBanner"
import Brands from "../Components/Products/Brands"

function Products() {

    const [category, setCategory] = useState("All")

    return (
        <div className="w-full overflow-x-hidden pb-10 sm:pb-12 lg:pb-16 bg-[#f4f3eb]">

            <ProductBanner
            category={category}
            />

            <ProductCategories
                category={category}
                setCategory={setCategory}
            />

            <Brands/>
            

        </div>
    )
}

export default Products