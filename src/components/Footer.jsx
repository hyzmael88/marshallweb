import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[529px] px-14 flex flex-col lg:flex-row items-center '>
        <div className='w-full h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start'>
          <span>logo</span>
          <div className='w-full flex flex-row items-center gap-4 justify-center lg:justify-start '>
            <span>Social1</span>
            <span>Social2</span>
            <span>Social3</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam ex explicabo ipsam tempora? </p>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <span>Link1</span>
          <span>Link1</span>
          <span>Link1</span>
          <span>Link1</span>
          <span>Link1</span>

        </div>
        <div className='hidden  lg:flex w-full h-full'> 

        </div>
    </div>
  )
}

export default Footer