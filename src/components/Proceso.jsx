import React, { useEffect, useState } from 'react'
import aprueba from '../../public/images/Proceso/aprueba.svg'
import cotiza from '../../public/images/Proceso/cotiza.svg'
import recibe from '../../public/images/Proceso/recibe.svg'
import Image from 'next/image'
import {motion} from 'framer-motion'


import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView

function Proceso() {
    const info = [
    {
        icon: aprueba,
        title: 'Cotiza el producto que deseas',
        description: 'Llámanos o mándanos mensaje por redes sociales o correo y te atenderemos al instante.'
    },
    {
        icon: cotiza,
        title: 'Aprueba y paga la cotización',
        description: 'Una vez realizado el pago, preparamos la entrega de tu pedido a la dirección solicitada.'
    },
    {
        icon: recibe,
        title: 'Recibe tu producto',
        description: 'Tras la entrega del producto, agradeceríamos nos dejes una reseña de tu parte.'
    }
    ]

    const [ref, inView] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });
    const [ref2, inView2] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });

    const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const variantsH1 = {
    hidden: { opacity: 0,
    y:0 },
    visible: { 
      y:0,
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" }
    }
  } 

  const variantsBackground = isLarge ? {
    hidden: { y: -20 },
    visible: { 
      y: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  }
  : {
    hidden: { x:-100 },
    visible: { 
      x: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  };

  const variantsInfo = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.3 // Cada elemento se animará con un retraso de 0.2s
      }
    })
  };

  

  return (
    <div  className='w-full px-4 lg:px-14 h-full lg:h-[605px] flex flex-col lg:flex-row justify-between items-center py-[60px] gap-8 '>
        <div  className='w-full h-full flex flex-col items-center lg:items-start justify-center'>
          
        <motion.div 
        ref={ref}
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variantsBackground}
        className='w-full lg:w-full 2xl:w-[721px] h-[270px] lg:h-[411px] rounded-[19px] bg-[#233E9E] flex flex-col  justify-center px-8 md:gap-4 lg:gap-0'>
            <motion.h4 
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={variantsH1}
            className='font-header text-white text-[15px] lg:text-[24px] font-medium md:text-center lg:text-start'>Experimenta la diferencia</motion.h4>
            <motion.h3 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variantsH1}
            className='w-full lg:w-[550px] font-header text-[32px] lg:text-[49px] font-bold leading-[38px] lg:leading-[59px] text-white md:text-center lg:text-start '>Cotiza, paga y recibe tu producto con facilidad. ¡Así de simple!</motion.h3>
        </motion.div>
        </div>
        
            <div 
            
            className='w-full h-full flex flex-col justify-center items-center   '>
                {
                    info.map((item, index) => (
                        <motion.div
                        ref={ref2}
                        custom={index}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={variantsInfo}
                        key={index} className='w-full'>
                        <div  className='w-full lg:w-full h-[200px] lg:h-[91px] flex flex-col lg:flex-row items-center bg-brand-tertiary/30 rounded-[19px] lg:gap-8 py-4 lg:py-0'>
                    <div className='h-full flex flex-col justify-center lg:ml-[27px]'>
                        <Image src={item.icon} alt='icon' className='w-[48px] h-[48px] ' />
                    </div>
                    <div className=' h-full flex flex-row lg:flex-col text-center justify-center lg:text-left'>
                        <div className='w-full lg:mr-4'>
                            <h3 className='font-header font-bold text-[20px] '>{item.title}</h3>
                            <p className='font-paragraph text-[16px] w-full 2xl:w-[477px] px-8 lg:px-[0px] '>{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-center'>
                <div className={`${index < info.length-1 ? 'w-[3px] h-[48px] bg-brand-tertiary my-3 lg:ml-[40px]' : 'hidden'}`}></div>
                    </div>
                </motion.div>
                
                    ))
                }
            </div>


    </div>
  )
}

export default Proceso