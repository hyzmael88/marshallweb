import React from 'react'
import logoFooter from '../../public/images/logoFooter.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView
import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link'


function Footer() {

  const links = [{
    nombre: 'Inicio',
    url: '/'
  },
  {
    nombre: 'Acerca',
    url: '#Acerca'
  },
  {
    nombre: 'Productos',
    url: '#Productos'
  },
  {
    nombre: 'Contacto',
    url: '#Contacto'
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleWhatsAppClick = (message, trackingId) => {
    window.open(`https://wa.me/+525517935266?text=${encodeURIComponent(message)}`, "_blank");
    if (typeof window !== 'undefined') {
      sendGTMEvent('whatsapp', 'click', trackingId);
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

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className='w-full h-full xl:h-[529px] py-[64px] px-4 lg:px-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-0'
    >
      <motion.div 
        variants={itemVariants}
        className='w-full h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-[12px]'
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={logoFooter} alt='Logo' width={120} height={120} className='mb-4'/>
        </motion.div>
        <div className='w-full flex flex-col gap-1'>
          <h4 className='text-[16px] font-semibold'>Contacto</h4>
          <a href='tel:+525517935266' className='text-[14px] font-paragraph hover:underline hover:text-brand-primary transition-colors duration-200'>+52 (55) 1793 5266</a>
          <a href='mailto:saidmarshall@aol.com' className='text-[14px] font-paragraph hover:underline hover:text-brand-primary transition-colors duration-200'>saidmarshall@aol.com</a>
        </div>
        <div className='w-full flex flex-row items-center gap-4 justify-center lg:justify-start mt-2'>
          <motion.a 
            href="https://wa.me/+525517935266?text=Hola!%20me%20interesa%20cotizar%20trapos%20industriales" 
            target="_blank"
            className='flex items-center justify-center gap-2 bg-[#25D366] shadow-sm rounded-[8px] text-white px-[12px] py-[8px] hover:scale-105 transition-all duration-300 text-sm font-bold'
            onClick={() => {
              if (typeof window !== 'undefined') {
                sendGTMEvent('whatsapp', 'click', 'whatsapp-footer');
              }
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span>Cotiza por WhatsApp</span>
            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
          </motion.a>
        </div>
        <p className="text-xs mt-2 max-w-[300px]">
          Venta a partir de <span className="font-bold">50kg</span>. Mayoreo desde <span className="font-bold">1 tonelada</span>.
        </p>
        
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className='w-full h-full flex flex-col items-center lg:items-start justify-start lg:justify-center gap-[12px]'
      >
        <h4 className='text-[16px] font-semibold'>Enlaces rápidos</h4>
        {links.map((link, index) => (
          <motion.a 
            key={index} 
            href={link.url} 
            className='text-[14px] font-paragraph hover:underline hover:font-semibold transition-all duration-200 hover:text-brand-primary'
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            {link.nombre}
          </motion.a>
        ))}
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className='w-full h-full flex flex-col items-center lg:items-end justify-center gap-4'
      > 
        <motion.div 
          className="bg-gray-100 p-4 rounded-lg shadow-sm max-w-[300px] hover:shadow-md transition-shadow duration-300"
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <h4 className='text-[16px] font-semibold mb-2'>Horario de atención</h4>
          <p className="text-sm">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          <p className="text-sm">Sábados: 9:00 AM - 2:00 PM</p>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => handleWhatsAppClick("Hola! Quisiera saber si en este momento pueden atender mi pedido.", "whatsapp-footer-horario")}
              className="flex items-center justify-center gap-2 bg-[#25D366] w-full shadow-sm rounded-[6px] text-white px-[10px] py-[6px] text-sm font-bold"
            >
              <span>Contactar ahora</span>
              <Image src="/images/whatsapp.svg" alt="WhatsApp" width={16} height={16} />
            </motion.button>
          </div>
        </motion.div>
        <div className="text-center lg:text-right">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Productos Industriales Marshall. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-600 mt-1">
            <Link href="/aviso-de-privacidad" className="hover:underline hover:text-brand-primary transition-colors duration-200">
              Aviso de Privacidad
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer