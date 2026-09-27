import Tittle from "../Tittle"
import TittleName from "../TittleName"
import Link from "../Link"
import Description from "../Description"
import ProductCard from "./ProductCard"

import Image1 from "../../Assets/Products/p_img4.png"
import Image2 from "../../Assets/Products/p_img21.png"
import Image3 from "../../Assets/Products/p_img23.png"
import Image4 from "../../Assets/Products/p_img45.png"
import Image5 from "../../Assets/Products/p_img44.png"

const NewArrivals = () => {
    return (
        <section className="mt-8 flex w-full justify-center sm:mt-10 lg:mt-12">
            <div className="flex w-[92%] max-w-7xl flex-col gap-3">

                <TittleName Tittle="Latest Drop" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col gap-1">
                        <Tittle
                            Heading="New Arrivals"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]"
                        />

                        <Description
                            Des="Fresh styles, Same effortless comfort."
                            className="text-sm sm:text-base lg:text-xl"
                        />
                    </div>

                    <Link GoTo="/products" Name="View All" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-5">
                    <ProductCard
                        Name="Men Round Neck Pure Cotton T-shirt"
                        Image={Image1}
                        Price="₹ 300"
                    />

                    <ProductCard
                        Name="Women Zip-Front Relaxed Fit Jacket"
                        Image={Image2}
                        Price="₹ 900"
                    />

                    <ProductCard
                        Name="Boy Round Neck Pure Cotton T-shirt"
                        Image={Image3}
                        Price="₹ 750"
                    />

                    <ProductCard
                        Name="Men Slim Fit Relaxed Denim Jacket"
                        Image={Image4}
                        Price="₹ 1999"
                    />

                    <ProductCard
                        Name="Women Zip-Front Relaxed Fit Jacket"
                        Image={Image5}
                        Price="₹ 1799"
                    />
                </div>

            </div>
        </section>
    )
}

export default NewArrivals