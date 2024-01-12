import React from 'react'

function Acerca() {

    const info = [
        {
            icon: 'icono',
            title: 'Calidad desde el primer contacto',
            description: 'Nuestros productos son laborados con materiales de la más alta calidad, brindando una limpieza superior y eficiente.'
        },
        {
            icon: 'icono',
            title: 'Líderes en venta de trapo',
            description: 'Más de 24 años consolidados como un referente en la industria de la limpieza. Dando soluciones y superando expectativas.'
        },
        {
            icon: 'icono',
            title: 'Producto 100% garantizado',
            description: 'Nuestro producto es el compañero confiable para mantener la precisión y limpieza en tu oficio al más alto nivel.'
        },
    ]

    return (
        <div className='w-full h-full flex flex-col justify-center items-center pt-[91px] pb-[75px] gap-[57px]'>
                <h2 className='font-header font-bold text-[48px] w-[856px] text-center'>Descubre la más alta calidad
de trapo industrial en el mercado</h2>
<div className='w-full h-full flex flex-row justify-between items-center px-14'>
    {
        info.map((item, index) => (
            <div key={index} className='w-[353px] h-[278px] rounded-[19px] bg-[#3D65F3]/30
            flex flex-col items-center justify-center
            shadow-brand
            '>
                <span>{item.icon}</span>
                <h3 className='w-[60%] font-header font-bold text-[28px] text-center '>{item.title}</h3>
                <p className=' w-[90%] font-paragraph text-[16px] text-center'>{item.description}</p>
                
            </div>
        ))
    }
        

</div>
        </div>
    )
}

export default Acerca