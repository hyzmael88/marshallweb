import React from 'react'

function Proceso() {
    const info = [
    {
        icon: 'icono',
        title: 'Cotiza el producto que deseas',
        description: 'Llámanos o mándanos mensaje por redes sociales o correo y te atenderemos al instante.'
    },
    {
        icon: 'icono',
        title: 'Aprueba y paga la cotización',
        description: 'Una vez realizado el pago, preparamos la entrega de tu pedido a la dirección solicitada.'
    },
    {
        icon: 'icono',
        title: 'Recibe tu producto',
        description: 'Tras la entrega del producto, agradeceríamos nos dejes una reseña de tu parte.'
    }
    ]
  return (
    <div className='w-full px-4 lg:px-14 h-full lg:h-[605px] flex flex-col lg:flex-row justify-between items-center py-[60px] gap-8 '>
        <div className='w-full h-full flex flex-col items-center lg:items-start justify-center'>
        <div className='w-full lg:w-[721px] h-[270px] lg:h-[411px] rounded-[19px] bg-[#233E9E] flex flex-col  justify-center px-8'>
            <h4 className='font-header text-white text-[15px] lg:text-[24px] font-medium'>Experimenta la diferencia</h4>
            <h3 className='w-full lg:w-[550px] font-header text-[32px] lg:text-[49px] font-bold leading-[38px] lg:leading-[59px] text-white '>Cotiza, paga y recibe tu producto con facilidad. ¡Así de simple!</h3>
        </div>
        </div>
        
            <div className='w-full h-full flex flex-col justify-center items-center   '>
                {
                    info.map((item, index) => (
                        <div key={index}>
                        <div  className='w-full lg:w-[616px] h-[200px] lg:h-[91px] flex flex-col lg:flex-row items-center bg-brand-tertiary/30 rounded-[19px] lg:gap-8 py-4 lg:py-0'>
                    <div className='h-full flex flex-col justify-center lg:ml-[27px]'>
                        {item.icon}
                    </div>
                    <div className=' h-full flex flex-row lg:flex-col text-center lg:text-left'>
                        <div>
                            <h3 className='font-header font-bold text-[20px] '>{item.title}</h3>
                            <p className='font-paragraph text-[16px] w-full lg:w-[477px] px-8 lg:px-[0px] '>{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-center'>
                <div className={`${index < info.length-1 ? 'w-[3px] h-[48px] bg-brand-tertiary my-3 lg:ml-[40px]' : 'hidden'}`}></div>
                    </div>
                </div>
                
                    ))
                }
            </div>


    </div>
  )
}

export default Proceso