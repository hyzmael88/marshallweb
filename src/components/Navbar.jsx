import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[72px] flex flex-row justify-around items-center border-b-[2px] border-black px-14  '>
        <ul className='w-full h-full flex flex-row justify-between items-center'>
            <li>Acerca</li>
            <li>Productos</li>
            <li>Contacto</li>

        </ul>
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <span>Logo</span>
        </div>
        <div className='w-full h-full flex flex-row justify-end items-center'>
            <button className='px-4 py-2 bg-black text-white uppercase'>cotizar</button>
        </div>

    </div>
  )
}

export default Navbar