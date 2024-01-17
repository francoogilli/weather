// DailyForecast.jsx
import React from "react";
import SectionContainer from "./SectionContainer";

const formatDay = (dateString) => {
  const dateObject = new Date(dateString);
  if (isNaN(dateObject.getTime())) {
    return "Invalid Date";
  }

  const formattedDay = dateObject.toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    timeZone: 'UTC',  // Especifica la zona horaria
  });

  // Intercambia el orden del día y el nombre del día
  const [day, num] = formattedDay.split(' ');
  return `${num} ${day}`;
};

const DailyForecast = ({ dailyForecast }) => {
  const daysArray = dailyForecast.map((dayData, index) => (
    <div
      key={index}
      style={{
        minWidth: "74px",
        flex: "0 0 auto",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.08)"
      }}
      className="flex flex-col justify-center text-lg font-medium items-center border border-[#ffffff10] bg-[#3b545c38] hover:bg-[#9fb1b738] cursor-pointer rounded-full gap-y-2 py-2"
    >
      <p className="pt-2 text-[14px] font-extrabold text-white uppercase">{formatDay(dayData.datetime)}</p>
      <div className="flex flex-col items-center">
        <img className="pt-2" loading="lazy" src={`/icons/${dayData.icon}.png`} width={32} alt="" />
        {dayData.precipprob > 40 && (
          <p className="text-[#617bff] font-bold text-xs">{Math.floor(dayData.precipprob / 10) * 10}%</p>
        )}
        {dayData.precipprob <= 40 && (
          <p className="text-[#617bff] font-bold text-xs invisible">0%</p>
        )}
      </div>
      <p className="pb-2 font-bold text-xl text-white">{Math.floor(dayData.temp)}º</p>
    </div>
  ));

  return (
    <SectionContainer className={'font-base text-base text-white pt-5 pb-0 overflow-auto'}>
      <div className="flex gap-3 overflow-x-auto pb-5">
        {daysArray}
      </div>
    </SectionContainer>
  );
};

export default DailyForecast;
