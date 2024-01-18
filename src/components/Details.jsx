import React from 'react';
import SectionContainer from './SectionContainer';
import Sunrise from '../icons/Sunrise';
import Wind from '../icons/Wind';
import Pressure from '../icons/Pressure';
import Snow from '../icons/Snow';


const Details = ({sunrise, sunset, wind,winddir, pressure, snow, snowdepth}) => {
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
  };
  const convertDir = (grados) => {
    const dir = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest","North"];
    const index = Math.round((grados % 360) / 45);
    return dir[index];
  };
  return (
    <SectionContainer className={'py-0 pb-32 text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 font-semibold text-3xl sm:text-4xl text-white items-center justify-center'}>
      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-9 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Sunrise/>SUNRISE</p>
        <p className='text-white font-extrabold text-3xl sm:text-5xl '>{formatTime(sunrise)}<span className='text-xs sm:text-2xl'> AM</span></p>
        <p className='text-xs sm:text-sm font-normal text-white text-left pt-5'>Sunset: {formatTime(sunset)} AM</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-9 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Wind/>WIND</p>
        <p className='text-white font-extrabold text-4xl sm:text-5xl '>{Math.floor(wind)} <span className='text-xs sm:text-3xl'>km/h</span></p>
        <p className='text-xs sm:text-sm font-normal text-white text-left text-pretty'>The direction is from {convertDir(winddir)}.</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Pressure/>PRESSURE</p>
        <p className='text-white font-extrabold text-3xl sm:text-5xl'>{Math.floor(pressure)} <span className='text-xs sm:text-3xl'>hPa</span></p>
        <p className='text-xs sm:text-sm font-normal text-white text-left'>The pressure for the next hours.</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Snow/>SNOW</p>
        <div className='flex justify-center items-center'>
        <p className='text-white font-extrabold text-4xl sm:text-5xl'>{snow} <span className='text-sm sm:text-3xl'>cm</span></p>
        </div>
        <p className='text-xs sm:text-sm font-normal text-white text-left'>The snow depth is around {Math.floor(snowdepth)} cm.</p>
      </div>
    </SectionContainer>
  );
};

export default Details;