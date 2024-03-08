import React from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView
import Image from 'next/image';


function HotspotImage() {

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  console.log(isTabletOrMobile)

  const variantsH1 = isTabletOrMobile ? {
    hidden: { opacity: 0,
    y:0 },
    visible: { 
      y:0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  } : {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  const variantsP = isTabletOrMobile ? {
    hidden: { y: 100 },
    visible: { 
      y: 0,
      transition: { duration: 2, ease: "easeOut" }
    }
  }
  : {
    hidden: { y: 20 },
    visible: { 
      y: 0,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  const variantsImage = isTabletOrMobile ? {
    hidden: { scale: 0.9 },
    visible: { 
      scale: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  }
  : {
    hidden: { scale: 1.1 },
    visible: { 
      scale: 1,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  return (
    <div className='w-full  h-[863px] flex flex-col lg:flex-row justify-between items-center  px-4 lg:px-10 2xl:px-14 bg-brand-primary'>
        <div className='w-full h-full md:h-[80%] flex flex-col items-center justify-center text-white gap-[29px]'>
            <motion.h2 className='w-full 2xl:w-[721px] font-header text-[32px] lg:text-[49px] font-bold leading-[38px] lg:leading-[59px] '
            ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variantsH1}
            >
            Transforma tu entorno con la limpieza que sólo nuestro producto puede ofrecer 
            </motion.h2>
            <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variantsP}
            className='w-full 2xl:w-[721px] text-[18px] lg:text-[22px] font-paragraph leading-[27px] lg:leading-[33px] '>
            Ya sea que estés en la industria de la manufactura, la construcción, la automotriz o cualquier otro campo, nuestros trapos pueden ayudarte a mejorar la eficiencia y la productividad.
            </motion.p>

        </div>
        <div className='w-full h-full flex flex-col items-center lg:items-end justify-start lg:justify-center'>

            <motion.div 
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={variantsImage}
            className='w-[335px] h-[348px] md:w-full lg:w-[532px] md:h-[400px] lg:h-[640px] rounded-[20px] md:rounded-[40px] lg:rounded-[69px] '>
              <Image src='/images/Hotspot/Hotspot.png' width={1000} height={1000} className='w-full h-full  object-cover ' alt='HotspotImage'/>
            </motion.div>
        </div>
       

    </div>
  )
}

export default HotspotImage