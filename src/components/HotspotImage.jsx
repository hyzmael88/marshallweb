import React from 'react'

function HotspotImage() {
  return (
    <div className='w-full h-[863px] flex flex-col lg:flex-row justify-between items-center  px-4 lg:px-14 bg-brand-primary'>
        <div className='w-full h-full flex flex-col items-center justify-center text-white gap-[29px]'>
            <h2 className='w-full lg:w-[721px] font-header text-[32px] lg:text-[49px] font-bold leading-[38px] lg:leading-[59px] '>
            Transforma tu entorno con la limpieza que sólo nuestro producto puede ofrecer 
            </h2>
            <p className='w-full lg:w-[721px] text-[18px] lg:text-[22px] font-paragraph leading-[27px] lg:leading-[33px] '>
            Ya sea que estés en la industria de la manufactura, la construcción, la automotriz o cualquier otro campo, nuestros trapos pueden ayudarte a mejorar la eficiencia y la productividad.
            </p>

        </div>
        <div className='w-full h-full flex flex-col items-center lg:items-end justify-start lg:justify-center'>

            <div className='w-[335px] h-[348px] lg:w-[532px] lg:h-[640px] rounded-[20px] lg:rounded-[69px] bg-gray-300 shadow-brand'></div>
        </div>
       

    </div>
  )
}

export default HotspotImage