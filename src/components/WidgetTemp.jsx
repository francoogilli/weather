import React from "react";
import SectionContainer from "./SectionContainer";
import weather from "../assets/weather.png";
import back from "../assets/back.png";

const WidgetTemp = () => {
  return (
    <SectionContainer className="relative flex justify-center pt-10">
      <div className="relative">
        <img src={back} width={750} height={600} alt="" className=" object-cover" />
        {/* Div adicional sobre la imagen */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 p-4 rounded-md">
          <div className="col-span-1">
            {/* Contenido superior izquierdo */}
            <p className="text-7xl sm:text-[8.2rem] text-white pt-14 sm:pt-20 pl-0 sm:pl-0">19°</p>
            <div className="pt-1 sm:pt-16 pl-1 sm:pl-0">
              <p className="text-base sm:text-2xl text-[#AFA2D9] ">H:24° L:18°</p>
              <p className="text-base sm:text-2xl text-white ">Montreal, Canada</p>
            </div>
          </div>
          <div className="col-span-1">
            {/* Contenido superior derecho */}
            <img width={300} height={300} src={weather} alt="Weather" />
            <p className="text-white text-base sm:text-2xl flex items-end justify-end pb-1 pr-7 sm:pt-2">Mid Rain</p>
          </div>
          <div className="col-span-1">
            {/* Contenido inferior izquierdo */}
          </div>
          <div className="col-span-1 flex items-end justify-end">
            {/* Contenido inferior derecho (imagen) */}
          </div>
        </div>
      </div>
      </div>
    </SectionContainer>
  );
};

export default WidgetTemp;
