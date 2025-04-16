import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Producto from "./Producto";
import { sendGTMEvent } from '@next/third-parties/google';

function Productos() {
  const productos = [
    {
      id: 8,
      nombre: "Trapo Blanco Costurado",
      image1: "/images/Trapos/UNIDO_BLANCO_036.jpg",
      image2: "/images/Trapos/UNIDO_BLANCO_037.jpg",
      image3: "/images/Trapos/UNIDO_BLANCO_038.jpg",
      recomendacion:
        "Limpieza especializada de alta precisión, industria farmacéutica, electrónica y alimentaria.",
      descripcion: "Trapo de limpieza blanco de alta calidad con costura reforzada para mayor durabilidad y resistencia.",
      imagen: "",
      colores: [],
      material: "Algodón Premium",
      empaque: "Pacas de 5 a 50KG",
    },
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
      nombre: "Punta de colores claros",
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
      nombre: "Unido de colores claros",
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
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const variantsH1 = !isLarge
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }
    : {
        hidden: { y: -30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      };

  const [position, setPosition] = useState(0);
  const totalPages = Math.ceil(productos.length / 3);

  const variantsInfo = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: (index) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeIn",
      },
    }),
  };

  const variantsPlus = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const [activo, setActivo] = useState(false);

  return (
    <section
      id="Productos"
      className="w-full py-16 flex flex-col items-center gap-[40px] px-4 lg:px-14 bg-gray-50 rounded-lg shadow-sm"
    >
      <motion.div
        className="flex flex-col items-center"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantsH1}
      >
        <h3 className="font-header font-bold text-[48px] relative">
          Productos
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-brand-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h3>
        <h4
          ref={ref2}
          className="font-header font-bold text-[16px] lg:text-[24px] text-center lg:text-start mt-4"
        >
          Conoce los tipos de trapo que manejamos y ¡cotiza hoy mismo!
        </h4>
        <p className="font-paragraph text-[16px] text-center mt-3 max-w-[800px]">
          <span className="font-bold">Venta a partir de 50kg.</span> Envíos a partir de un pedido mínimo de <span className="font-bold">50kg</span>. 
          Precios especiales de mayoreo a partir de <span className="font-bold">1 tonelada</span>.
        </p>
        <div className="mt-6">
          <a 
            href="https://wa.me/+525517935266?text=Hola!%20me%20interesa%20cotizar%20trapos%20industriales" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 shadow-brand rounded-[10px] text-white px-[32px] py-[12px] hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => {
              if (typeof window !== 'undefined') {
                sendGTMEvent('whatsapp', 'click', 'whatsapp-productos');
              }
            }}
          >
            <span>Cotiza ahora por WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Mobile Product Slider */}
      <div
        id="slider"
        className="w-full flex flex-row items-center gap-[24px] lg:gap-[48px] overflow-x-scroll no-scrollbar lg:hidden pb-4"
      >
        {productos.map((producto, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            exit="exit"
            variants={variantsInfo}
            className="w-full h-full flex flex-col gap-[16px] justify-center"
          >
            <div className="w-[300px] h-[360px] rounded-[20px] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <Image 
                src={producto.image1} 
                width={1000} 
                height={1000} 
                className="w-full h-full object-cover rounded-t-[20px] hover:scale-105 transition-all duration-500" 
                alt={producto.nombre} 
              />
            </div>
            <div className="w-[300px] flex flex-col gap-[8px] p-2 h-[200px]">
              <h5 className="font-header font-semibold text-[18px] border-b border-gray-200 pb-2">
                {producto.nombre} 
              </h5>
              <div className="h-[100px] overflow-y-auto">
                {producto.recomendacion && (
                  <p className="font-paragraph text-[14px] leading-[21px]">
                    <span className='font-bold'>Recomendación: </span>{producto.recomendacion} 
                  </p>
                )}
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
              <a 
                href="https://wa.me/+525517935266?text=Hola!%20me%20interesa%20cotizar%20el%20producto%20de%20tipo%20trapo%20" 
                target="_blank"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    sendGTMEvent('whatsapp', 'click', `whatsapp-producto-${producto.id}`);
                  }
                }}
              >
                <span>Cotizar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Product Display */}
      <div
        id="desktop-products"
        className="hidden w-full lg:grid grid-cols-3 gap-8 xl:gap-12"
        ref={ref3}
      >
        {productos.slice(position, position + 3).map((producto, index) => (
          <motion.div
            key={producto.id}
            custom={index}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            exit="exit"
            variants={variantsInfo}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[500px]"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image 
                src={producto.image1} 
                width={1000} 
                height={1000} 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700" 
                alt={producto.nombre} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <a 
                  href={`https://wa.me/+525517935266?text=Hola!%20me%20interesa%20cotizar%20el%20producto%20${encodeURIComponent(producto.nombre)}`}
                  target="_blank"
                  className="m-4 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      sendGTMEvent('whatsapp', 'click', `whatsapp-producto-${producto.id}`);
                    }
                  }}
                >
                  <span>Cotizar por WhatsApp</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-header font-semibold text-[20px] mb-2 border-b border-gray-200 pb-2">
                {producto.nombre} 
              </h5>
              <div className="h-[100px] overflow-y-auto">
                {producto.recomendacion && (
                  <p className="font-paragraph text-[14px] leading-[21px] mb-2">
                    <span className='font-bold'>Recomendación: </span>{producto.recomendacion} 
                  </p>
                )}
                <p className="font-paragraph text-[14px] leading-[21px] mb-2">
                  {producto.descripcion}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  <span className='font-bold'>Material: </span>
                  {producto.material}
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  <span className='font-bold'>Empaque: </span>{producto.empaque}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="w-full hidden lg:flex flex-row justify-between items-center mt-8">
        <div className="flex flex-row gap-[8px] items-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              custom={index}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variantsInfo}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === position / 3 ? "bg-brand-primary w-6" : "bg-gray-300"
              }`}
              onClick={() => setPosition(index * 3)}
            />
          ))}
        </div>
        
        <div className="flex flex-row items-center gap-[15px]">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer`}
            onClick={() => {
              if (position === 0) {
                setPosition((totalPages - 1) * 3); // Go to last page
              } else {
                setPosition(position - 3);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variantsPlus}
            className={`w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer`}
            onClick={() => {
              if (position >= (totalPages - 1) * 3) {
                setPosition(0); // Go to first page
              } else {
                setPosition(position + 3);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Productos;
