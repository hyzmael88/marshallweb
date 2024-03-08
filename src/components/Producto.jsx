import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

function Producto({ref3, inView3,producto, variantsInfo, activo, setActivo, index } ) {

   

    const [currentImage, setCurrentImage] = useState(producto.image1);
    const [productoActivo, setProductoActivo] = useState(null);
    useEffect(() => {
        if (activo && productoActivo == producto.id) {
          const images = [producto.image1, producto.image2, producto.image3];
          let index = 0;
      
          const intervalId = setInterval(() => {
            index = (index + 1) % images.length; // Esto hará que el índice vuelva a 0 después de llegar al final del array
            setCurrentImage(images[index]);
          }, 1000); // Cambia la imagen cada 3 segundos
      
          // Limpia el intervalo cuando el componente se desmonta o cuando `activo` cambia a `false`
          return () => clearInterval(intervalId);
        }
        else{
            setCurrentImage(producto.image1);
        }
      }, [activo, producto]);

  return (
    <motion.div
       key={producto.id}
       ref={ref3}
       custom={producto.id} // Pasa el index como custom prop
       initial="hidden"
       animate={inView3 ? "visible" : "hidden"}
       exit="exit"
       variants={variantsInfo}
      
      
      className="w-full h-full flex flex-col gap-[16px]  justify-center"
      >
      <div className="w-[300px] lg:w-[320px] xl:w-[355px] 2xl:w-[400px] h-[360px] 2xl:h-[486px] rounded-[20px] lg:rounded-[40px] bg-gray-400 cursor-pointer"
       onMouseEnter={() => {setActivo(true)
        setProductoActivo(producto.id)
    }}
       onMouseLeave={() => {
        setActivo(false)
        setProductoActivo(null)
    }}
      >
        
        <Image src={currentImage} width={1000} height={1000} className="w-full h-full object-cover rounded-[20px] lg:rounded-[40px]" alt="producto" />
        </div>

      <div className=" flex flex-col gap-[8px] ">
        <h5 className="font-header font-semibold text-[18px] h-[30px]">
          {producto.nombre}
        </h5>
        <div className="h-[14px]"></div>
        <p className="font-paragraph text-[14px] leading-[21px]">
          {producto.descripcion}
        </p>
      </div>
    </motion.div>
  )
}

export default Producto