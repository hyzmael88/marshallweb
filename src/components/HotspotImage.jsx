import React from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

function HotspotImage() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  console.log(isTabletOrMobile)

  const variantsH1 = isTabletOrMobile ? {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 3, ease: "easeOut" }
    }
  } : {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  };

  const variantsP = isTabletOrMobile ? {
    hidden: { y: 100 },
    visible: { 
      y: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  }
  : {
    hidden: { y: 20 },
    visible: { 
      y: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  };

  const variantsImage = isTabletOrMobile ? {
    hidden: { scale: 0.9 },
    visible: { 
      scale: 1,
      transition: { duration: 3, ease: "easeOut" }
    }
  }
  : {
    hidden: { scale: 1.1 },
    visible: { 
      scale: 1,
      transition: { duration: 3, ease: "easeOut" }
    }
  };

  return (
    <div className='w-full  h-[863px] flex flex-col lg:flex-row justify-between items-center  px-4 lg:px-10 2xl:px-14 bg-brand-primary'>
        <div className='w-full h-full md:h-[80%] flex flex-col items-center justify-center md:text-white gap-[29px]'>
            <motion.h2 className='w-full 2xl:w-[721px] font-header text-[32px] lg:text-[49px] font-bold leading-[38px] lg:leading-[59px] '
              initial="hidden"
              animate="visible"
              variants={variantsH1}
            >
            Transforma tu entorno con la limpieza que sólo nuestro producto puede ofrecer 
            </motion.h2>
            <motion.p
            initial="hidden"
            animate="visible"
            variants={variantsP}
            className='w-full 2xl:w-[721px] text-[18px] lg:text-[22px] font-paragraph leading-[27px] lg:leading-[33px] '>
            Ya sea que estés en la industria de la manufactura, la construcción, la automotriz o cualquier otro campo, nuestros trapos pueden ayudarte a mejorar la eficiencia y la productividad.
            </motion.p>

        </div>
        <div className='w-full h-full flex flex-col items-center lg:items-end justify-start lg:justify-center'>

            <motion.div 
             initial="hidden"
             animate="visible"
             variants={variantsImage}
            className='w-[335px] h-[348px] md:w-full lg:w-[532px] md:h-[400px] lg:h-[640px] rounded-[20px] md:rounded-[40px] lg:rounded-[69px] bg-gray-300 shadow-brand'></motion.div>
        </div>
       

    </div>
  )
}

export default HotspotImage