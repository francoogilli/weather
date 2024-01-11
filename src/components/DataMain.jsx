import React from 'react';
import SectionContainer from './SectionContainer';

const DataMain = () => {
  return (
    <SectionContainer className={'py-10 pb-32 text-center grid grid-cols-2 md:grid-cols-4 gap-5 font-semibold text-4xl text-white items-center justify-center'}>
      <div className='border border-white/20 rounded-2xl px-24 py-14 flex items-center justify-center '>30</div>
      <div className='border border-white/20 rounded-2xl px-24 py-14 flex items-center justify-center '>30.9/21.3</div>
      <div className='border border-white/20 rounded-2xl px-24 py-14 flex items-center justify-center '>38</div>
      <div className='border border-white/20 rounded-2xl px-24 py-14 flex items-center justify-center '>11.2</div>
    </SectionContainer>
  );
};

export default DataMain;
