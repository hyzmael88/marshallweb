import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Hero() {
  return (
    <div className="w-full px-14 h-[900px] flex flex-row">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col gap-[24px]">
          <h1 className="font-bold text-[56px]">
            Descubra el poder de nuestras soluciones de limpieza
          </h1>
          <p className="">
            Experimenta la más alta calidad de trapo industrial en el mercado,
            que harán la diferencia en tu negocio gracias a nuestra eficacia y
            versatilidad mejorando la productividad y eficiencia de tus
            instalaciones.
          </p>
          <div className="w-full  flex flex-row justify-start items-center gap-4">
            <button className="bg-black text-white px-[24px] py-[12px]">
              Descubre
            </button>
            <button className="border-2 border-black text-black px-[24px] py-[12px]">
              Contactanos
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row overflow-hidden gap-2">
        <div className="w-full h-full  flex flex-col gap-2 transform -translate-y-[130px] ">
          <div className="w-full h-full bg-gray-600">
            <div className="w-[320px] h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600">
              <div className="w-[320px] h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600">
              <div className="w-[320px] h-[340px]"/>
            </div>
          
        </div>
        <div className="h-full w-full flex flex-col  gap-2 ">
          <div className="w-full h-full bg-gray-600">
            <div className="w-[320px] h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600">
            <div className="w-[320px] h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600">
            <div className="w-[320px] h-[340px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
