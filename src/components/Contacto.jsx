import React from 'react'

function Contacto() {
    return (
        <div className='w-full h-[968px] bg-brand-secondary flex flex-col lg:flex-row '>
                <div className='w-full h-full flex flex-col justify-center items-center'>

                <div className='h-[734px] w-[616px] bg-gray-400 rounded-[69px]'></div>
                </div>
                <div className='w-full h-full flex flex-col justify-center  text-white gap-[32px]'>
                        <div className='flex flex-col gap-[20px] text-center lg:text-start  '>
                        <h5 className='text-[18px] font-header'>Cotiza nuestro producto o mándanos tus dudas.</h5>
                        <h3 className='text-[48px] font-header font-bold'>Contáctanos</h3>
                        <h5 className='text-[18px] font-header'>Experimenta la calidad de nuestras soluciones de limpieza.</h5>
                        </div>
        <div id='form' className='  flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[8px]' >
                <label>Nombre</label>
            <input className='w-[616px] h-[48px] rounded-[14px] text-black font-paragraph px-4 '
            />
                </div> 
                <div className='flex flex-col gap-[8px]'>
                <label>Email</label>
            <input className='w-[616px] h-[48px] rounded-[14px] text-black font-paragraph px-4'/>
            </div>
            <div className='flex flex-col gap-[8px]'>
                <label>Mensaje</label>
            <textarea className='w-[616px] h-[183px] rounded-[14px] text-black font-paragraph px-4'/>
            </div>
            <div className='flex items-center'>
                <input type='checkbox' id='terms' className='mr-2' />
                <label htmlFor='terms'>Acepto los términos y condiciones</label>
            </div>
            <button className='w-[99px] h-[48px] bg-brand-primary rounded-[14px] uppercase '>Enviar</button>
     
    </div>
    </div>
       
        </div>
  )
}

export default Contacto