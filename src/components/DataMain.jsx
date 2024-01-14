import React from 'react';
import SectionContainer from './SectionContainer';
import bar from '../assets/bar.png';

const DataMain = () => {
  return (
    <SectionContainer className={'py-10 pb-32 text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 font-semibold text-3xl sm:text-4xl text-white items-center justify-center'}>
      <div  className='flex flex-col gap-y-4 bg-[#ffffff5c] items-start border border-[#ffffff80] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-zinc-800'>UV INDEX</p>
        <div>
        <p className='text-zinc-800 text-4xl sm:text-5xl pt-1 text-left'>4</p>
        <p className='text-zinc-800 text-xl sm:text-2xl '>Moderate</p>
        </div>
        <img src={bar} alt="" />
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#ffffff5c] items-start border border-[#ffffff80] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-zinc-800'>FEELS LIKE</p>
        <p className='text-zinc-800 text-4xl sm:text-5xl '>19°</p>
        <p className='text-sm font-normal text-zinc-800 text-left'>Similar to the actual tempeture.</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#ffffff5c] items-start border border-[#ffffff80] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-zinc-800'>HUMIDITY</p>
        <p className='text-zinc-800 text-4xl sm:text-5xl'>90%</p>
        <p className='text-sm font-normal text-zinc-800 text-left'>The dew point is 17 right now</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#ffffff5c] items-start border border-[#ffffff80] shadow-2xl rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-zinc-800'>VISIBILITY</p>
        <p className='text-zinc-800 text-4xl sm:text-5xl'>8 km</p>
        <p className='text-sm font-normal text-zinc-800 text-left'>The visibility is around of 8 km</p>
      </div>
    </SectionContainer>
  );
};

export default DataMain;