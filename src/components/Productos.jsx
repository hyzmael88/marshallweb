import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer"; // Importa useInView
import Image from "next/image";
import Producto from "./Producto";

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Punta de color",
      image1: "/images/Trapos/PUNTA_COLOR_029.jpg",
      image2: "/images/Trapos/PUNTA_COLOR_030.jpg",
      image3: "/images/Trapos/PUNTA_COLOR_031.jpg",
      recomendacion:
        " Industrial metálica, mecánica automotriz.",
           descripcion:"Se caracteriza por tener extremos de diferentes colores.",
        material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
      imagen: "",
      colores: [],
    },
    {
      id: 2,
      nombre: "Punta pastel",
      image1: "/images/Trapos/PUNTA_PASTEL_017.jpg",
      image2: "/images/Trapos/PUNTA_PASTEL_018.jpg",
      image3: "/images/Trapos/PUNTA_PASTEL_019.jpg",
      recomendacion:
        "",
           descripcion:"Se caracteriza por tener extremos de diferentes tonos suaves y delicados.",
        material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
      imagen: "",
      colores: [],
    },
    {
      id: 3,
      nombre: "TKT Color",
      image1: "/images/Trapos/TKT_COLOR_005.jpg",
      image2: "/images/Trapos/TKT_COLOR_006.jpg",
      image3: "/images/Trapos/TKT_COLOR_007.jpg",
      recomendacion:
        " Industrial metálica, mecánica automotriz.",
           descripcion:"Trapos de limpieza de tejido de algodón reciclado de color.",
        imagen: "",
      colores: [],
      material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
    },
    {
      id: 4,
      nombre: "TKT Blanco",
      image1: "/images/Trapos/TKT_BLANCO_033.jpg",
      image2: "/images/Trapos/TKT_BLANCO_034.jpg",
      image3: "/images/Trapos/TKT_BLANCO_035.jpg",
      recomendacion:
        "Limpieza especializada de partes pequeñas, laboratorios, plásticos, industria de alimentos.",
           descripcion:"Trapos de limpieza de tejido de algodón reciclado en color blanco.",
        imagen: "",
      colores: [],
      material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
    },
    {
      id: 5,
      nombre: "Unido Color",
      image1: "/images/Trapos/UNIDO_COLOR_021.jpg",
      image2: "/images/Trapos/UNIDO_COLOR_022.jpg",
      image3: "/images/Trapos/UNIDO_COLOR_023.jpg",
      recomendacion:
        "Industrial metálica, mecánica automotriz.",
           descripcion:"Trapos de limpieza unidos o cosidos con hilos de diferentes colores.",
        imagen: "",
      colores: [],
      material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
    },
    {
      id: 6,
      nombre: "Unido Blanco",
      image1: "/images/Trapos/UNIDO_BLANCO_036.jpg",
      image2: "/images/Trapos/UNIDO_BLANCO_037.jpg",
      image3: "/images/Trapos/UNIDO_BLANCO_038.jpg",
      recomendacion:
        " Limpieza especializada de partes pequeñas, laboratorios, plásticos, industria de alimentos.",
           descripcion:"Trapos de limpieza que están unidos o cosidos con hilos blancos.",
        imagen: "",
      colores: [],
      material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
    },
    {
      id: 7,
      nombre: "Unido Pastel",
      image1: "/images/Trapos/UNIDO_PASTEL_010.jpg",
      image2: "/images/Trapos/UNIDO_PASTEL_011.jpg",
      image3: "/images/Trapos/UNIDO_PASTEL_012.jpg",
      recomendacion:
        "",
           descripcion:"Trapos de limpieza unidos o cosidos con hilos en tonos suaves y delicados, típicamente asociados con tonos pastel.",
        imagen: "",
      colores: [],
      material: "Algodón",
        empaque: "Pacas de 5 a 50KG",
        
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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const variantsH1 = isTabletOrMobile
    ? {
        hidden: { opacity: 0, y: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 3, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: -100 },
        visible: {
          y: 0,
          transition: { duration: 3, ease: "easeOut" },
        },
      };

  const [position, setPosition] = useState(0);

  const variantsInfo = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.1, // Cada elemento se animará con un retraso de 0.3s
      },
    }),
    exit: (index) => ({
      opacity: 0,
      transition: {
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const variantsPlus = {
    hidden: { x: 100 },
    visible: {
      x: 0,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  const [activo, setActivo] = useState(false);

  return (
    <section
      id="Productos"
      className="w-full h-full 2xl:h-[916px] flex flex-col  items-center gap-[40px] px-4 lg:px-14  "
    >
      <motion.div
        className="flex flex-col items-center"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsH1}
      >
        <h3 className="font-header font-bold text-[48px]">Productos</h3>
        <h4
          ref={ref2}
          className="font-header font-bold text-[16px] lg:text-[24px] text-center lg:text-start"
        >
          Conoce los tipos de trapo que manejamos y ¡cotiza hoy mismo!
        </h4>
      </motion.div>
      <div
        id="slider"
        className="w-full  flex flex-row items-center gap-[24px]  lg:gap-[48px] xl:gap- overflow-x-scroll no-scrollbar lg:hidden  "
      >
        {productos.map((producto, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            exit="exit"
            variants={variantsInfo}
            className="w-full h-full flex flex-col gap-[16px]  justify-center"
          >
            <div className="w-[300px] lg:w-[320px] xl:w-[355px] 2xl:w-[400px] h-[360px] 2xl:h-[486px] rounded-[20px] lg:rounded-[40px] ">
              <Image src={producto.image1} width={1000} height={1000} className="w-full h-full object-fill rounded-[20px] lg:rounded-[40px]" alt="producto" />
              </div>
            <div className="h-[250px] w-full flex flex-col gap-[8px] ">
              <h5 className="font-header font-semibold text-[18px]">
                {producto.nombre}
              </h5>
              {
          producto.recomendacion&&
          <p className="font-paragraph text-[14px] leading-[21px]">
          <span className='font-bold'>Recomendacion de uso: </span>{producto.recomendacion}
        </p>
        }
             <p className="font-paragraph text-[14px] leading-[21px]">
          {producto.descripcion}
        </p>
        <p className="font-paragraph text-[14px] leading-[21px]">
        <span className='font-bold'>Material: </span>
          {producto.material}
        </p>  
        <p className="font-paragraph text-[14px] leading-[21px]">
        <span className='font-bold'>Empaque: </span>{producto.empaque}
        </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        id="slider"
        className="hidden w-full  lg:flex flex-row items-center gap-[24px]  lg:gap-[48px] xl:gap- overflow-x-scroll no-scrollbar  "
      >
        {productos.slice(0 + position, 3 + position).map((producto, index) => (
          <AnimatePresence key={producto.id} mode="wait">
            {" "}
            {/* Usa producto.id en lugar de index */}
            <Producto
              ref3={ref3}
              inView3={inView3}
              producto={producto}
              activo={activo}
              setActivo={setActivo}
              variantsInfo={variantsInfo}
              index={index}
            />
          </AnimatePresence>
        ))}
      </div>
      <div className="w-full hidden lg:flex flex-row justify-between ">
        <div className="flex flex-row gap-[8px] items-center">
          {[0, 1,2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variantsInfo}
              className={`
      ${index == position /3 && "bg-[#000000] w-[8px] h-[8px] rounded-full"}
      ${index != position /3 && "bg-[#CCCCCC] w-[8px] h-[8px] rounded-full"}
    `}
            />
          ))}
        </div>
        <div className="hidden lg:flex flex-row items-center gap-[15px]">
          <div
            className={
              position == 0
                ? "hidden"
                : "w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3] cursor-pointer"
            }
            onClick={() => setPosition(position - 3)}
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
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variantsPlus}
            className={
              position == productos.length - 3 / 3
                ? "hidden"
                : "w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3] cursor-pointer"
            }
            onClick={() => setPosition(position + 3)}
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 4.51111L10.59 5.92111L16.17 11.5111H4V13.5111H16.17L10.59 19.1011L12 20.5111L20 12.5111L12 4.51111Z"
                fill="black"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Productos;
