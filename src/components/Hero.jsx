import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView



function Hero() {

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
  }

  const variantsCol1 = isTabletOrMobile ? {
    hidden: { y: 0 },
    visible: { y: -130, 
      transition: { duration: 3, ease: "easeOut" } }
  }
  :{
    hidden: { y: 100 },
    visible: { y: -130, 
      transition: { duration: 3, ease: "easeOut" } }
  }
  const variantsCol2 = isTabletOrMobile ? {
    hidden: { y: -130 },
    visible: { y: 0, 
      transition: { duration: 3, ease: "easeOut" }
    }
  }:{
    hidden: { y: -130 },
    visible: { y: 0, 
      transition: { duration: 3, ease: "easeOut" }
    }
  }
  

  return (
    <div className="w-full px-4 lg:px-0 2xl:px-14 h-screen  xl:h-[900px] flex flex-col gap-[64px] lg:gap-[0px] lg:flex-row lg:pl-8">
      <div className="w-full h-full flex flex-col justify-center items-center mt-10 lg:mt-0">
        <div className="w-full flex flex-col gap-[24px]">
          <motion.h1
           initial="hidden"
           animate="visible"
           variants={variantsH1}
           className="font-header font-bold leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px] w-full lg:w-[95%] xl:w-[576px] text-center lg:text-start">
            Descubra el poder de nuestras soluciones de limpieza
          </motion.h1>
          <motion.div className="w-full h-full"
          initial="hidden"
          animate="visible"
          variants={variantsP}>
            
          <p className="w-full lg:w-[95%] xl:w-[576px] font-paragraph text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[27px] text-center lg:text-start mb-4"
           
          >
            Experimenta la más alta calidad de trapo industrial en el mercado,
            que harán la diferencia en tu negocio gracias a nuestra eficacia y
            versatilidad mejorando la productividad y eficiencia de tus
            instalaciones.
          </p>
          <div className="w-full  flex flex-row justify-center lg:justify-start items-center gap-[8px]">
            <motion.button 
              className="bg-brand-primary shadow-brand w-[139px] rounded-[10px] text-white px-[24px] py-[12px] hover:scale-105 transition-all duration-300"
              
            >
              Descubre
            </motion.button>
            <motion.button 
              className="bg-brand-secondary shadow-brand text-white rounded-[10px] w-[139px] px-[24px] py-[12px] hover:scale-105 transition-all duration-300"
            
            >
              Contáctanos
            </motion.button>
            
          </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row overflow-hidden gap-2">
        <motion.div
         className="w-full h-full  flex flex-col gap-2 transform -translate-y-[77px] lg:-translate-y-[130px]"
 
 initial="hidden"
 animate={inView ? "visible" : "hidden"}
 variants={variantsCol1}

         
         >

          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
              <div
             
              className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
              <div
              
              className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
              
            </div>
          
        </motion.div>
        <motion.div className="h-full w-full flex flex-col  gap-2 "
         initial="hidden"
         animate={inView ? "visible" : "hidden"}
         variants={variantsCol2}
        >
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
        </motion.div>
      </div>
      <span
       ref={ref}
      />
    </div>
  );
}

export default Hero;
