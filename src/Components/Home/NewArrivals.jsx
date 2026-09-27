import React from 'react'

import Tittle from '../Tittle'
import TittleName from '../TittleName'
import Link from "../Link"
import Description from '../Description'

const NewArrivals = () => {
  return (
    <>
        <div className='h-[50vh] w-full mt-4.5 flex justify-center items-center'>

          <div className="relative flex flex-col h-[90%] w-[90%] gap-2 ">
            
            <TittleName
            Tittle={"Latest Drop"}
            />

            <div className='w-full flex justify-between items-center'>

                <div className='flex flex-col '>

                    <Tittle
                    Heading={"New Arrivals"}
                    className='text-[3rem]'
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

          </div>


      </div>
    </>
  )
}

export default NewArrivals
