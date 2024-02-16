import React from 'react'

function Jaizmora() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='w-full h-[100px] bg-black flex flex-row justify-between items-center px-4 lg:px-14 border-t-2 border-black text-white'>
      <p className='w-full text-[14px] flex flex-row justify-start'>© {currentYear} Productos Industriales Marshall. <br className='lg:hidden'/>All rights reserved.</p>
      <span className='w-full text-[14px] flex flex-row justify-end'>Jaizmora Digital Media</span>
    </div>
  );
}

export default Jaizmora