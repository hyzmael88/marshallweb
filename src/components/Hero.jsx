import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Hero() {
  return (
    <div className="w-full px-4 lg:px-0 2xl:px-14 h-screen lg:h-screen 2xl:h-[900px] flex flex-col lg:flex-row lg:pl-8">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col gap-[24px]">
          <h1 className="font-header font-bold leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px] w-full lg:w-[95%] xl:w-[576px] text-center lg:text-start">
            Descubra el poder de nuestras soluciones de limpieza
          </h1>
          <p className="w-full lg:w-[95%] xl:w-[576px] font-paragraph text-[16px] lg:text-[18px] font-normal leading-[24px] lg:leading-[27px] text-center lg:text-start ">
            Experimenta la más alta calidad de trapo industrial en el mercado,
            que harán la diferencia en tu negocio gracias a nuestra eficacia y
            versatilidad mejorando la productividad y eficiencia de tus
            instalaciones.
          </p>
          <div className="w-full  flex flex-row justify-center lg:justify-start items-center gap-[8px]">
            <button className="bg-brand-primary shadow-brand w-[139px] rounded-[10px] text-white px-[24px] py-[12px]">
              Descubre
            </button>
            <button className="bg-brand-secondary shadow-brand text-white rounded-[10px] w-[139px] px-[24px] py-[12px]">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row overflow-hidden gap-2">
        <div className="w-full h-full  flex flex-col gap-2 transform -translate-y-[77px] lg:-translate-y-[130px] ">

          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
              <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
            </div>
            <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
              <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"/>
              
            </div>
          
        </div>
        <div className="h-full w-full flex flex-col  gap-2 ">
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
          <div className="w-full h-full bg-gray-600 rounded-[20px] lg:rounded-[40px]">
            <div className="w-[160px] md:h-[340px] md:w-[150px] lg:w-[320px] h-[170px] lg:h-[340px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
