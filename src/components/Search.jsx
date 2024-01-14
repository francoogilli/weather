import React, { useState, useMemo } from 'react';
import cities from '../cities500.json';
import SectionContainer from './SectionContainer';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const suggestions = useMemo(() => {
    const term = searchTerm.toLowerCase();

    // Filtra las ciudades solo si la longitud del término de búsqueda es mayor o igual a 4
    if (term.length >= 4) {
      return cities.filter(city =>
        city.name.toLowerCase().includes(term)
      );
    } else {
      return [];
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SectionContainer id="search" className={'mt-5'}>
      <form className="flex justify-center ">
        <div className="flex  relative p-1 border border-white/5 rounded-full w-full sm:w-1/3">
          <input
            className='flex-1 p-2 pl-4 bg-white/20 focus:outline-none placeholder:text-zinc-500 text-zinc-700 font-bold  rounded-full w-full'
            placeholder='Type your place'
            value={searchTerm}
            onChange={handleInputChange}
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 left-0 right-0 mt-[3.3rem] p-1 backdrop-blur-xl border rounded-3xl border-white/30  shadow-3xl">
              {suggestions.map(city => (
                <li key={city.id} className="p-3 text-base  font-medium text-white cursor-pointer hover:bg-white/10  rounded-[19px]">
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </SectionContainer>
  );
};

export default Search;
