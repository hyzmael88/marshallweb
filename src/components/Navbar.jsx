import React from 'react'

function Navbar() {
  return (
    <>
    <div className='hidden w-full h-[72px] lg:flex flex-row justify-around items-center border-b-[2px] border-black px-14  '>
        <ul className='w-full h-full flex flex-row justify-between items-center font-paragraph text-[19px] '>
            <li>Acerca</li>
            <li>Productos</li>
            <li>Contacto</li>

        </ul>
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <span>Logo</span>
        </div>
        <div className='w-full h-full flex flex-row justify-end items-center'>
            <button className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white uppercase'>cotizar</button>
        </div>

    </div>
    <div className='lg:hidden w-full h-[80px] flex flex-row items-center justify-between  border-b-[2px] border-black px-4 '>
    <div className='w-full h-full flex flex-row justify-start items-center'>
            <span>Logo</span>
        </div>
        <div className='w-full h-full flex flex-row justify-end items-center'>
            <button className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white uppercase'>cotizar</button>
        </div>
    

    </div>
    </>
  )
}

export default Navbar