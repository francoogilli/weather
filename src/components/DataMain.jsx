import React from 'react';
import SectionContainer from './SectionContainer';
import bar from '../assets/bar.png';

const DataMain = () => {
  return (
    <SectionContainer className={'py-10 pb-32 text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 font-semibold text-3xl sm:text-4xl text-white items-center justify-center'}>
      <div  className='flex flex-col gap-y-4 bg-[#2a2759] items-start border-2 border-[#5F539C] shade rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-gray-400'>UV INDEX</p>
        <div>
        <p className='text-4xl sm:text-5xl pt-1 text-left'>4</p>
        <p className='text-xl sm:text-2xl '>Moderate</p>
        </div>
        <img src={bar} alt="" />
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#2a2759] items-start border-2 border-[#5F539C] shade rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-gray-400'>FEELS LIKE</p>
        <p className='text-4xl sm:text-5xl'>19°</p>
        <p className='text-sm font-normal text-gray-300 text-left'>Similar to the actual tempeture.</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#2a2759] items-start border-2 border-[#5F539C] shade rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-gray-400'>HUMIDITY</p>
        <p className='text-4xl sm:text-5xl'>90%</p>
        <p className='text-sm font-normal text-gray-300 text-left'>The dew point is 17 right now</p>
      </div>

      <div  className='flex flex-col gap-y-4 bg-[#2a2759] items-start border-2 border-[#5F539C] shade rounded-3xl px-5 sm:px-10 py-5 '>
        <p className='text-sm text-gray-400'>VISIBILITY</p>
        <p className='text-4xl sm:text-5xl'>8 km</p>
        <p className='text-sm font-normal text-gray-300 text-left'>The visibility is around of 8 km</p>
      </div>
    </SectionContainer>
  );
};

export default DataMain;