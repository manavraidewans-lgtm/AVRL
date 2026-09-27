import React from 'react'

import Tittle from '../Tittle'
import TittleName from '../TittleName'
import Link from "../Link"
import CategoryCard from './CategoryCard'


import image1 from "../../Assets/men.jpeg"
import image2 from "../../Assets/women.webp"
import image3 from "../../Assets/boy.jpeg"
import image4 from "../../Assets/girl.jpeg"




const ShopByCategory = () => {
  return (
    <>
      <div className="min-h-[70vh] w-full mt-4.5 flex justify-center">

        <div className="relative flex flex-col w-[90%] gap-2">

          <TittleName
            Tittle={"SHOP BY CATEGORY"}
          />

          <div className="w-full flex justify-between items-center">

            <Tittle
              Heading={"Explore Our Collections"}
              className="text-[3rem]"
            />

            <Link
              GoTo="/products"
              Name="View All Categories"
            />

          </div>


          {/* Category Cards */}
          <div className="w-full mt-6 flex gap-5 overflow-hidden">

            <CategoryCard
              Image={image1}
              Name="Men"
              Price="From ₹499"
            />

            <CategoryCard
              Image={image2}
              Name="Women"
              Price="From ₹999"
            />

            <CategoryCard
              Image={image3}
              Name="Boy"
              Price="From ₹1,499"
            />

            <CategoryCard
              Image={image4}
              Name="Girl"
              Price="From ₹799"
            />

          </div>

        </div>

      </div>
    </>
  )
}

export default ShopByCategory