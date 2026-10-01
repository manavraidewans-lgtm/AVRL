import { useState } from "react"
import ProductCategories from "../Components/Products/ProductCategories"

function Products() {

    const [category, setCategory] = useState("All")

    return (
        <div className="w-full bg-[#f4f2eb] pb-16 md:pt-16">

            <ProductCategories
                category={category}
                setCategory={setCategory}
            />

        </div>
    )
}

export default Products