import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer'; // Importa useInView


function Productos() {



  const productos = [
    {
      id: 1,
      nombre: "Trapo tipo camiseta unido blanco",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
    {
      id: 2,
      nombre: "Trapo tipo camiseta unido gris ",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
    {
      id: 3,
      nombre: "Trapo tipo camiseta unido color",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
    {
      id: 4,
      nombre: "Trapo tipo camiseta punta de color",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
    {
      id: 5,
      nombre: "Trapo tipo camiseta punta de colores claros",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
    {
      id: 6,
      nombre: "Trapo tipo camiseta crudo",
      descripcion:
        "Elaborado con tela de algodón, es ideal para limpiar pisos, paredes, muebles",
      imagen: "",
      colores: [],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });
  
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // Cambia a true para que la animación solo se ejecute una vez
  });


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
  };

  const [position, setPosition] = useState(0)

  const variantsInfo = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.3 // Cada elemento se animará con un retraso de 0.2s
      }
    })
  };
  const variantsPlus  ={
    hidden: { x: 100 },
    visible: { 
      x: 0,
      transition: { duration: 3, ease: "easeOut" }
    }
  };


  return (
    <div className="w-full h-full 2xl:h-[916px] flex flex-col  items-center gap-[40px] px-4 lg:px-14  ">
      <motion.div className="flex flex-col items-center"
       ref={ref}
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variantsH1}
      >
        <h3 className="font-header font-bold text-[48px]">Productos</h3>
        <h4 className="font-header font-bold text-[16px] lg:text-[24px] text-center lg:text-start">
          Conoce los tipos de trapo que manejamos y ¡cotiza hoy mismo!
        </h4>
      </motion.div>
      <div  id="slider" className="w-full  flex flex-row items-center gap-[24px]  lg:gap-[48px] xl:gap- overflow-x-scroll no-scrollbar lg:hidden  ">
        {
        productos.map((producto, index) => (
          <motion.div
            key={index}
            ref={ref2}
            custom={index}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variantsInfo}
            className="w-full h-full flex flex-col gap-[16px]  justify-center"
          >
            <div className="w-[300px] lg:w-[320px] xl:w-[355px] 2xl:w-[400px] h-[360px] 2xl:h-[486px] rounded-[20px] lg:rounded-[40px] bg-gray-400" />
            <div className=" flex flex-col gap-[8px] ">
              <h5 className="font-header font-semibold text-[18px]">
                {producto.nombre}
              </h5>
              <div className="h-[14px]"></div>
              <p className="font-paragraph text-[14px] leading-[21px]">
                {producto.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div  id="slider" className="hidden w-full  lg:flex flex-row items-center gap-[24px]  lg:gap-[48px] xl:gap- overflow-x-scroll no-scrollbar  ">
        {
        productos.slice(0+position,3+position).map((producto, index) => (
          <motion.div
            key={index}
            ref={ref3}
            custom={index}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variantsInfo}
            className="w-full h-full flex flex-col gap-[16px]  justify-center"
          >
            <div className="w-[300px] lg:w-[320px] xl:w-[355px] 2xl:w-[400px] h-[360px] 2xl:h-[486px] rounded-[20px] lg:rounded-[40px] bg-gray-400" />
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
        ))}
      </div>
      <div className="w-full hidden lg:flex flex-row justify-between ">
        <div  className="flex flex-row gap-[8px] items-center">
        {
  [0, 1].map((index) => (
    <motion.div
    key={index}
    ref={ref2}
    custom={index}
    initial="hidden"
    animate={inView2 ? "visible" : "hidden"}
    variants={variantsInfo}
    className={`
      ${index == position % 2 && "bg-[#000000] w-[8px] h-[8px] rounded-full"}
      ${index != position % 2 && "bg-[#CCCCCC] w-[8px] h-[8px] rounded-full"}
    `}/>
  ))
}
        </div>
        <div className="hidden lg:flex flex-row items-center gap-[15px]">
          <div className={position == 0? "hidden":"w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3] cursor-pointer"}
          onClick={()=> setPosition(position-3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M20 11.5111H7.83L13.42 5.92111L12 4.51111L4 12.5111L12 20.5111L13.41 19.1011L7.83 13.5111H20V11.5111Z"
                fill="black"
              />
            </svg>
          </div>
          <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variantsPlus}
          className={position == productos.length/2? "hidden":"w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3] cursor-pointer"}
           onClick={()=> setPosition(position+3)}
           >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M12 4.51111L10.59 5.92111L16.17 11.5111H4V13.5111H16.17L10.59 19.1011L12 20.5111L20 12.5111L12 4.51111Z" fill="black"/>
</svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
