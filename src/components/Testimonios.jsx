import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView


function Testimonios() {

  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false); // valor inicial que se renderizará en el servidor

  useEffect(() => {
    // lógica que calcula isTabletOrMobile
    const isTabletOrMobile = window.innerWidth < 1224; // o cualquier lógica que estés utilizando
    setIsTabletOrMobile(isTabletOrMobile);
  }, []);
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

    const estrella =
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path d="M9.07088 0.612343C9.41462 -0.204115 10.5854 -0.204114 10.9291 0.612346L12.9579 5.43123C13.1029 5.77543 13.4306 6.01061 13.8067 6.0404L19.0727 6.45748C19.9649 6.52814 20.3267 7.62813 19.6469 8.2034L15.6348 11.5987C15.3482 11.8412 15.223 12.2218 15.3106 12.5843L16.5363 17.661C16.744 18.5211 15.7969 19.201 15.033 18.7401L10.5245 16.0196C10.2025 15.8252 9.7975 15.8252 9.47548 16.0196L4.96699 18.7401C4.20311 19.201 3.25596 18.5211 3.46363 17.661L4.68942 12.5843C4.77698 12.2218 4.65182 11.8412 4.36526 11.5987L0.353062 8.2034C-0.326718 7.62813 0.0350679 6.52814 0.927291 6.45748L6.19336 6.0404C6.5695 6.01061 6.89716 5.77543 7.04207 5.43123L9.07088 0.612343Z" fill="#3D65F3"/>
    </svg>

    const testimonios = [
        {
            estrellas: 5,
            testimonio: "Excelente calidad y durabilidad. Los trapos de esta empresa son realmente resistentes y han sido una solución eficaz para nuestras necesidades de limpieza en el taller. ¡Altamente recomendados!",
            nombre: "Jorge Rosas",
            cargo: "Gerente de Operaciones",
            empresa: "Empresa X"
        },
        {
            estrellas: 5,
            testimonio: "Impresionados con la eficiencia. Hemos estado utilizando los productos de esta empresa y la absorbencia es increíble. Ideales para diversas tareas, una inversión que vale la pena.",
            nombre: "Victor Mendoza",
            cargo: "Director General",
            empresa: "Empresa X"
        },
        {
            estrellas: 5,
            testimonio: "Servicio al cliente excepcional. Desde el momento en que hicimos nuestro pedido hasta la entrega, la atención y el profesionalismo de esta empresa fueron notables.  ",
            nombre: "Leobardo Sánchez",
            cargo: "Gerente de Compras",
            empresa: "Empresa X"
        }
    ]

  return (
    <div className='w-full h-full lg:h-[658px] flex flex-col items-center gap-[40px] px-4 lg:px-10 2xl:px-14 py-[64px] overflow-hidden'>
       
      <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantsH1}
      className="flex flex-col items-center">
        <h3 className="font-header font-bold text-[36px] lg:text-[48px]  text-center lg:text-start">Clientes satisfechos</h3>
        <h4 
        
        ref={ref2}
        className="font-header lg:font-bold text-[16px] lg:text-[24px] text-center lg:text-start">
        ¡Descubre por qué somos la elección preferida de nuestros clientes!
        </h4>
      </motion.div>
      <div className='w-full h-full flex flex-row gap-[20px] lg:gap-[32px] justify-between overflow-x-scroll no-scrollbar'>
        {
            testimonios.slice(0,3).map((testimonio, index) => (
                <motion.div
                custom={index}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={variantsInfo}
                key={index} className='h-[350px] lg:h-[350px] 2xl:h-[330px] w-[90%] lg:w-[340px] xl:w-[380px] 2xl:w-[416px] flex flex-col justify-center
                bg-[#3d64f33a] rounded-[25px] p-[24px] lg:p-[32px] gap-[32px]
                '>
            <div className='flex flex-row items-center gap-[4px]'>
            {[...Array(testimonio.estrellas)].map((_, i) => (
                <span key={i}>{estrella}</span> // &#9733; es el código HTML para una estrella
                ))}
            </div>
            <p className='w-[290px] 2xl:w-[352px] text-[16px] lg:text-[18px] leading-[27px] font-paragraph '>
                {testimonio.testimonio}
                </p>
                <div className='flex flex-col'>
                    <h5 className='font-header text-[16px] font-semibold'>{testimonio.nombre}</h5>
                    <p>{testimonio.cargo}</p>
                    </div>
        </motion.div>
                ))
            }
      </div>
      

    </div>
  )
}

export default Testimonios