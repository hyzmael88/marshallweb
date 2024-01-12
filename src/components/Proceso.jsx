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
    <div className='px-14 w-full h-[605px] flex flex-row justify-between items-center'>
        <div className='w-full h-full flex flex-col items-start justify-center'>
        <div className='w-[629px] h-[411px] rounded-[19px] bg-[#233E9E] flex flex-col  justify-center px-8'>
            <h4 className='font-header text-white text-[24px] font-medium'>Experimenta la diferencia</h4>
            <h3 className='text-white text-[48px] font-header font-bold leading-[57px] '>Cotiza, paga y recibe tu producto con facilidad. ¡Así de simple!</h3>
        </div>
        </div>
        
            <div className='w-full h-full flex flex-col justify-center items-center  '>
                {
                    info.map((item, index) => (
                        <div key={index}>
                        <div  className='w-[616px] h-[91px] flex flex-row items-center bg-brand-tertiary/30 rounded-[19px] gap-8'>
                    <div className='h-full flex flex-col justify-center ml-[27px]'>
                        {item.icon}
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            <h3 className='font-header font-bold text-[20px] '>{item.title}</h3>
                            <p className='font-paragraph text-[16px] w-[477px] '>{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className={`${index < info.length-1 ? 'w-[3px] h-[48px] bg-brand-tertiary my-3 ml-[40px]' : 'hidden'}`}></div>
                </div>
                
                    ))
                }
            </div>


    </div>
  )
}

export default Proceso