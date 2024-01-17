import React from 'react';
import SectionContainer from './SectionContainer';
import bar from '../assets/bar.png';
import Sun from '../icons/Sun';
import Temp from '../icons/Temp';
import Droplets from '../icons/Droplets';
import Eye from '../icons/Eye';
const DataMain = ({uvindex,feelslike, humidity, visibility}) => {
  return (
    <SectionContainer className={'py-10 pb-32 text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 font-semibold text-3xl sm:text-4xl text-white items-center justify-center'}>
      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Sun/>UV INDEX</p>
        <div>
        <p className='text-white font-extrabold text-4xl sm:text-5xl pt-1 text-left'>{uvindex}</p>
        <p className='text-white text-xl sm:text-2xl '>Moderate</p>
        </div>
        <img src={bar} alt="" />
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-9 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Temp/>FEELS LIKE</p>
        <p className='text-white font-extrabold text-4xl sm:text-5xl '>{Math.floor(feelslike)}°</p>
        <p className='text-sm font-normal text-white text-left'>Similar to the actual tempeture.</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Droplets/>HUMIDITY</p>
        <p className='text-white font-extrabold text-4xl sm:text-5xl'>{Math.floor(humidity)}%</p>
        <p className='text-sm font-normal text-white text-left'>At the moment, dew point is 17</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#3b545c38] items-start border border-[#ffffff19] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='flex items-center font-extrabold gap-x-1 text-sm text-[#ffffffb9]'><Eye/>VISIBILITY</p>
        <p className='text-white font-extrabold text-4xl sm:text-5xl'>{Math.floor(visibility)} km</p>
        <p className='text-sm font-normal text-white text-left'>The visibility is around of {Math.floor(visibility)} km</p>
      </div>
    </SectionContainer>
  );
};

export default DataMain;