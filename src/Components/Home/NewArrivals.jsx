import React from 'react'

import Tittle from '../Tittle'
import TittleName from '../TittleName'
import Link from "../Link"
import Description from '../Description'
import ProductCard from './ProductCard'

import Image1 from "../../Assets/Products/p_img4.png"
import Image2 from "../../Assets/Products/p_img21.png"
import Image3 from "../../Assets/Products/p_img23.png"
import Image4 from "../../Assets/Products/p_img45.png"
import Image5 from "../../Assets/Products/p_img44.png"



const NewArrivals = () => {
  return (
    <>
      <div className="min-h-[50vh] w-full mt-4.5 flex justify-center">

        <div className="flex flex-col w-[90%] gap-3">

          <TittleName
            Tittle={"Latest Drop"}
          />

          <div className="w-full flex items-end justify-between">

            <div className="flex flex-col gap-1">

              <Tittle
                Heading={"New Arrivals"}
                className="text-[3rem] leading-none"
              />

              <Description
                Des="Fresh styles, Same effortless comfort."
                className="whitespace-nowrap"
              />

            </div>

            <Link
              GoTo="/products"
              Name="View All"
            />

          </div>


          {/* Product Cards */}
          <div className="w-full mt-6 flex gap-5 overflow-hidden">

            <ProductCard 
            Name='Men Round Neck Pure Cotton T-shirt'
            Image={Image1}
            Price='₨ 300'
            />

            <ProductCard
            Name='Women Zip-Front Relaxed Fit Jacket'
            Image={Image2}
            Price='₨ 900'
            />

            <ProductCard 
            Name='Boy Round Neck Pure Cotton T-shirt'
            Image={Image3}
            Price='₨ 750'
            />

            <ProductCard 
            Name='Men Slim Fit Relaxed Denim Jacket'
            Image={Image4}
            Price='₨ 1999'
            />

            <ProductCard 
            Name='Women Zip-Front Relaxed Fit Jacket'
            Image={Image5}
            Price='₨ 1799'
            />

          </div>

        </div>

      </div>
    </>
  )
}

export default NewArrivals