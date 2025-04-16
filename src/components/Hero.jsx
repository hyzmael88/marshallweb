import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { useRouter } from 'next/router';
import { sendGTMEvent } from '@next/third-parties/google';

function Hero() {
  const router = useRouter()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const variantsH1 = !isLarge ? {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } : {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const variantsP = isLarge ? {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  } : {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  const variantsCol1 = !isLarge ? {
    hidden: { y: 0, opacity: 0 },
    visible: { 
      y: -130,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" } 
    }
  } : {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: -130,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" } 
    }
  };
  
  const variantsCol2 = !isLarge ? {
    hidden: { y: -130, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.2, ease: "easeOut" }
    }
  } : {
    hidden: { y: -130, opacity: 0 },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.2, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const handleWhatsAppClick = (message) => {
    window.open(`https://wa.me/+525517935266?text=${encodeURIComponent(message)}`, "_blank");
    if (typeof window !== 'undefined') {
      sendGTMEvent('whatsapp', 'click', 'whatsapp-hero');
    }
  };

  return (
    <div className="w-full px-4 lg:px-0 2xl:px-14 h-screen xl:h-[900px] flex flex-col gap-[64px] lg:gap-[0px] lg:flex-row lg:pl-8 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center mt-10 lg:mt-0">
        <div className="w-full flex flex-col gap-[24px]">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variantsH1}
            className="font-header font-bold leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px] w-full lg:w-[95%] xl:w-[576px] text-center lg:text-start relative"
          >
            Obtén las mejores telas industriales del mercado
            <motion.div 
              className="absolute -bottom-2 left-0 h-[3px] bg-brand-secondary rounded-full hidden lg:block"
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.div 
            className="w-full h-full"
            initial="hidden"
            animate="visible"
            variants={variantsP}
          >
            <p className="w-full lg:w-[95%] xl:w-[576px] font-paragraph text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[27px] text-center lg:text-start mb-6">
              Descubre la excelencia de nuestros trapos industriales de primera calidad, diseñados para potenciar a los profesionales especializados en mantener la precisión y la limpieza en su trabajo con total confianza.
            </p>
            <div className="w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-[12px]">
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto bg-[#25D366] shadow-brand rounded-[10px] text-white px-[24px] py-[12px] flex items-center justify-center gap-2"
                onClick={() => handleWhatsAppClick("Hola! Me gustaría recibir más información sobre sus productos.")}
              >
                <span className="font-bold">Cotizar ahora</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </motion.button>
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto bg-brand-secondary shadow-brand rounded-[10px] text-white px-[24px] py-[12px] flex items-center justify-center gap-2"
                onClick={() => {router.push("/#Productos")}}
              >
                <span className="font-bold">Ver productos</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row overflow-hidden gap-2 relative">
        <motion.div
          className="w-full h-full flex flex-col gap-2 transform -translate-y-[77px] lg:-translate-y-[130px] relative z-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variantsCol1}
        >
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto1.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100} 
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto2.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100}
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto3.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100}
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="h-full w-full flex flex-col gap-2 relative z-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variantsCol2}
        >
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto4.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100}
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto5.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100}
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
          <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-md">
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
              className="w-full h-full"
            >
              <Image 
                src='/images/Hero/foto6.png' 
                alt="herofoto" 
                width={1000} 
                height={1000} 
                quality={100}
                className="w-full md:h-[340px] md:w-full lg:w-[320px] h-[170px] lg:h-[340px] object-cover rounded-[20px] lg:rounded-[40px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <span ref={ref} />
    </div>
  );
}

export default Hero;
