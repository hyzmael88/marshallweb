import Image from 'next/image'
import React from 'react'
import navLogo from '../../public/images/navLogo.png'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

function Navbar() {

    const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

    const variantsLogo = isMobile ? {
        hidden: { x: -100 },
        visible: { 
            x: 0,
            transition: { duration: 2, ease: "easeOut" }
        }
    } : {
        hidden: { y: -20 },
        visible: { 
            y: 0,
            transition: { duration: 2, ease: "easeOut" }
        }
    };
      const variantsMenu = isMobile ? {
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
      }
    

  return (
    <>
    <div className='hidden w-full h-[72px] lg:flex flex-row justify-around items-center border-b-[2px] border-black px-14  '>
        <ul className='w-full h-full flex flex-row justify-between items-center font-paragraph text-[19px] '>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'>Acerca</li>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'>Productos</li>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'>Contacto</li>

        </ul>
        <div className='w-full h-full flex flex-row justify-center items-center'>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsLogo}
              
            >
            <Image src={navLogo} width={100} height={100} alt='logo'/>
              
                </motion.div> 
        </div>
        <div className='w-full h-full flex flex-row justify-end items-center'>
            <button className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white  hover:scale-105 uppercase animate-pulse transition-all duration-300 hover:animate-none'>cotizar</button>
        </div>

    </div>
    <div className='lg:hidden w-full h-[80px] flex flex-row items-center justify-between  border-b-[2px] border-black px-4 '>
    <div className='w-full h-full flex flex-row justify-start items-center'>
        <motion.div
              initial="hidden"
              animate="visible"
              variants={variantsLogo}
              >

            <Image src={navLogo} width={100} height={100} alt='logo'/>	
              </motion.div>
        </div>
        <div className='w-full h-full flex flex-row justify-end items-center'>
            <button className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white uppercase'>cotizar</button>
        </div>
    

    </div>
    </>
  )
}

export default Navbar