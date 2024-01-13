import React, { useState } from "react";

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

  const [posicion, setPosicion] = useState(0 )

  return (
    <div className="w-full h-[916px] flex flex-col  items-center gap-[40px] px-14 overflow-hidden ">
      <div className="flex flex-col items-center">
        <h3 className="font-header font-bold text-[48px]">Productos</h3>
        <h4 className="font-header font-bold text-[24px]">
          Conoce los tipos de trapo que manejamos y ¡cotiza hoy mismo!
        </h4>
      </div>
      <div className="w-full  flex flex-row items-center  gap-[48px]">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="w-full h-full  flex flex-col gap-[16px]  justify-center"
          >
            <div className="w-[400px] h-[486px] rounded-[40px] bg-gray-400" />
            <div className=" flex flex-col gap-[8px] ">
              <h5 className="font-header font-semibold text-[18px]">
                {producto.nombre}
              </h5>
              <div className="h-[14px]"></div>
              <p className="font-paragraph text-[14px] leading-[21px]">
                {producto.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-between ">
        <div className="flex flex-row gap-[8px] items-center">
          {
            productos.map((producto, index) => (
              <div key={index} className={`${index == posicion && "bg-[#000000]"} w-[8px] h-[8px] rounded-full bg-[#CCCCCC] `}/>

            ))
          }
        </div>
        <div className="flex flex-row items-center gap-[15px]">
          <div className="w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3]">
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
          <div className="w-[48px] h-[48px] flex flex-col items-center justify-center rounded-full border-2 border-[#3D65F3]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M12 4.51111L10.59 5.92111L16.17 11.5111H4V13.5111H16.17L10.59 19.1011L12 20.5111L20 12.5111L12 4.51111Z" fill="black"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
