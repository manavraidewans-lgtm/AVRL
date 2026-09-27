import Tittle from "../Tittle"
import TittleName from "../TittleName"
import Link from "../Link"
import CategoryCard from "./CategoryCard"

import image1 from "../../Assets/men.jpeg"
import image2 from "../../Assets/women.webp"
import image3 from "../../Assets/boy.jpeg"
import image4 from "../../Assets/girl.jpeg"

const ShopByCategory = () => {
    return (
        <section className="mt-8 flex w-full justify-center sm:mt-10 lg:mt-12">
            <div className="w-[92%] max-w-7xl">

                <TittleName Tittle="SHOP BY CATEGORY" />

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <Tittle
                        Heading="Explore Our Collections"
                        className="text-3xl sm:text-4xl lg:text-[3rem]"
                    />

                    <Link
                        GoTo="/products"
                        Name="View All Categories"
                    />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
                    <CategoryCard Image={image1} Name="Men" Price="From ₹499" />
                    <CategoryCard Image={image2} Name="Women" Price="From ₹999" />
                    <CategoryCard Image={image3} Name="Boy" Price="From ₹1,499" />
                    <CategoryCard Image={image4} Name="Girl" Price="From ₹799" />
                </div>

            </div>
        </section>
    )
}

export default ShopByCategory