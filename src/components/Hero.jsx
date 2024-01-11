import React from "react";

function Hero() {
  return (
    <div className="w-full px-14 h-screen flex flex-row ">
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        
        <div className="w-full flex flex-col gap-[24px]">
        <h1 className="font-bold text-[56px] ">Descubra el poder de nuestras soluciones de limpieza</h1>
        <p className="">
        Experimenta la más alta calidad de trapo industrial en el mercado, que harán la diferencia en tu negocio gracias a nuestra eficacia y versatilidad mejorando la productividad y eficiencia de tus instalaciones.
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
        <div className="w-full h-full">
            <span> masonry</span>
        </div>
    </div>
  );
}

export default Hero;
