import Image from 'next/image'
import React from 'react'
import navLogo from '../../public/images/navLogo.png'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import {useRouter} from 'next/router';

function Navbar() {
  const router = useRouter()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const variantsLogo = isTabletOrMobile ? {
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
      const variantsMenu = isTabletOrMobile ? {
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
      const variantsButton = isTabletOrMobile ? {
        hidden: { x: 100 },
        visible: { 
            x: 0,
            transition: { duration: 2, ease: "easeOut" }
        }
    }
      :{
        hidden: { y: -20 },
        visible: { 
            y: 0,
            transition: { duration: 2, ease: "easeOut" }
        }
    };
    

  return (
    <>
    <div className='hidden w-full h-[72px] lg:flex flex-row justify-around items-center border-b-[2px] border-black px-14  '>
        <ul className='w-full h-full flex flex-row justify-between items-center font-paragraph text-[19px] '>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'> 
            <a href="#Acerca">
            Acerca
            </a>
            </li>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'>
            <a href="#Productos">
              Productos
              </a></li>
            <li className='cursor-pointer hover:bg-brand-secondary hover:text-white w-full h-full flex items-center justify-center'>
            <a href="#Contacto">
              Contacto
              </a></li>

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
            <motion.button 
            initial="hidden"
            animate="visible"
            variants={variantsButton}
            onClick={()=>router.push('/#Contacto')}
            className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white  hover:scale-105 uppercase  hover:animate-none'>cotizar</motion.button>
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
            <motion.button
             initial="hidden"
             animate="visible"
             variants={variantsButton}
             onClick={()=>router.push('/#Contacto')}
            className='px-[20px] py-[8px] bg-brand-primary rounded-[10px]  text-white uppercase'>cotizar</motion.button>
        </div>
    

    </div>
    </>
  )
}

export default Navbar