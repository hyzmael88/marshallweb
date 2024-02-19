import React from 'react'
import logoFooter from '../../public/images/logoFooter.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView


function Footer() {

  const links = [{
    nombre: 'Inicio',
    url: '/'
  },
  {
    nombre: 'Acerca',
    url: '/Acerca'
  },
  {
    nombre: 'Productos',
    url: '/Productos'
  },
  {
    nombre: 'Reseñas',
    url: '/Reseñas'
  },
  {
    nombre: 'Contacto',
    url: '/Contacto'
  },
  ]

  const social = [
    {
      icono: 'icono1',
      url: 'url1'
    },
    {
      icono: 'icono1',
      url: 'url1'
    },
    {
      icono: 'icono1',
      url: 'url1'
    },
  ]

  return (
    <div className='w-full h-full xl:h-[529px] py-[64px] px-4 lg:px-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 '>
        <div className='w-full h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-[12px]'>
          <Image src={logoFooter} alt='Logo' width={100} height={100} />
          <div className='w-full flex flex-col '>

          <h4 className='text-[14px] font-semibold '>Contacto</h4>
          <a href='tel:+525517935266' className='text-[14px] font-paragraph underline'>+52 (55) 1793 5266</a>
          <a href='mailto:saidmarshall@aol.com' className='text-[14px] font-paragraph underline'>saidmarshall@aol.com</a>
          </div>
          <div className='w-full flex flex-row items-center gap-4 justify-center lg:justify-start '>
            {
              social.map((icon, index) => (
                <a key={index} href={icon.url} className='text-[14px] font-paragraph '>{icon.icono}</a>
              ))
            }
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center lg:items-start  justify-start lg:justify-center gap-[12px]'>
         {
            links.map((link, index) => (
              <a key={index} href={link.url} className='text-[14px] font-paragraph font-semibold '>{link.nombre}</a>
            ))
         }

        </div>
        <div className='hidden  lg:flex w-full h-full'> 

        </div>
    </div>
  )
}

export default Footer