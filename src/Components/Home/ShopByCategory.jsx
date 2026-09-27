import React from 'react'

import Tittle from '../Tittle'
import TittleName from '../TittleName'
import Link from "../Link"

const ShopByCategory = () => {
  return (
    <>
      <div className='h-[50vh] w-full mt-4.5 flex justify-center items-center'>

          <div className="relative flex flex-col h-[90%] w-[90%] gap-2 ">
            
            <TittleName
            Tittle={"SHOP BY CATEGORY"}
            />

            <div className='w-full flex justify-between items-center'>

                <Tittle
                Heading={"Explore Our Collections"}
                className='text-[3rem]'
                />


                <Link
                GoTo="/products"
                Name="View All Categories"
                />

            </div>

          </div>


      </div>
    </>
  )
}

export default ShopByCategory
