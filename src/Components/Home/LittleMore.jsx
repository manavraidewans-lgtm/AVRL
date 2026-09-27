import React from 'react'
import BackgroundImage from "../../Assets/Little_More.avif"
import TittleName from '../TittleName'
import Tittle from '../Tittle'
import Description from '../Description'
import Button from '../Button'

const LittleMore = () => {
  return (

        <div className="mt-4.5 flex h-[40vh] w-full items-center justify-center">

            <div className='h-[80%] w-[60%] flex items-center justify-between overflow-hidden rounded-3xl bg-green-200'>

                    <div className='h-full w-[35%] bg-red-200'>
                        <img src={BackgroundImage} alt="Pic About" className='h-full w-full'/>
                    </div>

                    <div className='h-full w-[75%] bg-[#e8efe6] flex flex-col justify-center items-center gap-4'>


                        <Tittle
                            Heading="Style Made Simple"
                        />

                        
                        <Description
                            Des="Everyday clothing designed for comfort, confidence, and effortless style."
                        />
                      

                        <Button
                            Name="Explore More"
                            Link="/about"
                        />

                    </div>

            </div>
            
        </div>

  )
}

export default LittleMore
