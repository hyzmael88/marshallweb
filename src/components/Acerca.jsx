import React from 'react'
import Image from 'next/image'
import calidad from '../../public/images/Acerca/calidad.svg'
import garantizado from '../../public/images/Acerca/garantizado.svg'
import lideres from '../../public/images/Acerca/lideres.svg'
import { useMediaQuery } from 'react-responsive';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'; // Importa useInView




function Acerca() {

    const info = [
        {
            icon: calidad,
            title: 'Calidad desde el primer contacto',
            description: 'Nuestros productos son laborados con materiales de la más alta calidad, brindando una limpieza superior y eficiente.'
        },
        {
            icon: garantizado,
            title: 'Líderes en venta de trapo',
            description: 'Más de 24 años consolidados como un referente en la industria de la limpieza. Dando soluciones y superando expectativas.'
        },
        {
            icon: lideres,
            title: 'Producto 100% garantizado',
            description: 'Nuestro producto es el compañero confiable para mantener la precisión y limpieza en tu oficio al más alto nivel.'
        },
    ]

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const [ref, inView] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });
    const [ref2, inView2] = useInView({
      triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
    });


    const variantsInfo = {
        hidden: { opacity: 0 },
        visible: (index) => ({
          opacity: 1,
          transition: {
            delay: index * 0.3 // Cada elemento se animará con un retraso de 0.2s
          }
        })
      };
      const variantsH1 = isTabletOrMobile ? {
        hidden: { opacity: 0, y:0 },
        visible: { 
          y:0,
          opacity: 1,
          transition: { duration: 3, ease: "easeOut" }
        }
      } : {
        hidden: { y: -100 },
        visible: { 
          y: 0,
          transition: { duration: 3, ease: "easeOut" }
        }
      } 
     ;

    return (
        <section id='Acerca' className='w-full h-full flex flex-col justify-center items-center pt-[64px] lg:pt-[91px] pb-[48px] lg:pb-[75px] gap-[57px] px-4 lg:px-10 2xl:px-14'>
                <motion.h2 className='font-header font-bold text-[32px] lg:text-[48px] leading-[38px] lg:leading-[57.6px] w-full lg:w-[856px] text-center'
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variantsH1}
                >Descubre la más alta calidad  
de trapo industrial en el mercado</motion.h2>
<span ref={ref2}>

</span>
<div className='w-full h-full flex flex-col lg:flex-row justify-between items-center gap-[48px] lg:gap-[0px] '>
    {
        info.map((item, index) => (
            <motion.div key={index} className='w-[353px] h-[278px] rounded-[19px] bg-[#3D65F3]/30
            flex flex-col items-center justify-center
            shadow-brand gap-3
            '
            
            custom={index}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variantsInfo}
            >
                <Image src={item.icon} alt='icon' width={48} height={48} />
                <h3 className='w-[60%] font-header font-bold text-[28px] text-center '>{item.title}</h3>
                <p className=' w-[90%] font-paragraph text-[16px] text-center'>{item.description}</p>
                
            </motion.div>
        ))
    }
        

</div>
        </section>
    )
}

export default Acerca