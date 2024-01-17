import React from "react";
import SectionContainer from "./SectionContainer";
import cloud from "../assets/icons/rayo.png";
import rayo from "../assets/icons/rayo.png";


const formatHour = (hour) => {
    const formattedHour = new Date(`2000-01-01T${hour}`).toLocaleString('en-US', {
      hour: 'numeric',
      hour12: true
    });
    return formattedHour;
  };
  
const Forecast = ({ hourlyForecast }) => {
    
    const hoursArray = hourlyForecast.map((hourData, index) => (
      <div
        key={index}
        style={{
          minWidth: "74px",
          flex: "0 0 auto",
          boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.08)"
        }}
        className="flex flex-col justify-center text-lg font-medium items-center border border-[#ffffff10]  bg-[#3b545c38] hover:bg-[#9fb1b738] cursor-pointer rounded-full gap-y-2 py-2"
      >
        <p className="pt-2 text-[15px] font-semibold text-white">{formatHour(hourData.datetime)}</p>
        <div className="flex flex-col items-center">
          <img className="pt-2" src={`/icons/${hourData.icon}.png`} width={32} alt="" />
          {hourData.precipprob > 0 && (
          <p className="text-[#617bff] font-bold text-xs">{Math.floor(hourData.precipprob / 10) * 10}%</p>
        )}
        {hourData.precipprob === 0 && (
          <p className="text-[#617bff] font-bold text-xs invisible">0%</p>
        )}
        </div>
        <p className="pb-2 font-bold text-xl text-white">{Math.floor(hourData.temp)}º</p>
      </div>
    ));
  
    return (
      <SectionContainer className={'font-base text-base text-white pt-5 pb-0 overflow-auto'}>
        <div className="flex gap-3 overflow-x-auto pb-5">
          {hoursArray}
        </div>
      </SectionContainer>
    );
  };
  
  export default Forecast;