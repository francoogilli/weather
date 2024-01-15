import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';
import cities from '../cities500.json';
import axios from 'axios';
import Temp from './Temp';
import DataMain from './DataMain';
import Forecast from './Forecast';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const suggestionsRef = useRef(null);
  const [weatherData, setWeatherData] = useState({
    temp: 33.1, 
    conditions: "Sunny", 
    resolvedAdress: "Miramar, Argentina", 
    icon: "thunder",
    uvindex: 7,
    humidity: 90,
    visibility: 8,
    feelslike: 19
  });

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const suggestions = useMemo(() => {
    if (lowerCaseSearchTerm.length >= 4) {
      return cities.filter(city =>
        city.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    } else {
      return [];
    }
  }, [lowerCaseSearchTerm]);

  const handleInputChange = useCallback((e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
      setShowSuggestions(false);
      document.removeEventListener('click', handleClickOutside);
    }
  }, []);

  const handleInputClick = useCallback(() => {
    setShowSuggestions(true);
    document.addEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const handleSuggestionClick = useCallback(async (city) => {
    setSelectedCity(city);
    setSearchTerm(`${city.name}, ${city.country}`);
    setShowSuggestions(false);
  
    try {
      setLoading(true);
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.name}, ${city.country}?unitGroup=metric&key=NWP5A5DETM2C6BV4R9ZZR6FFT`);
      setWeatherData({
        temp: response.data.days[0].temp,
        conditions: response.data.days[0].conditions,
        resolvedAdress: response.data.address,
        icon: response.data.days[0].icon,
        uvindex: response.data.days[0].uvindex,
        humidity: response.data.days[0].humidity,
        visibility: response.data.days[0].visibility,
        feelslike: response.data.days[0].feelslike
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  }, []);
  

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SectionContainer id="search" className={'mt-5'}>
      <form className="flex justify-center ">
        <div className="flex  relative p-1 border border-white/5 rounded-full w-full sm:w-1/3">
          <input
            className='flex-1 p-2 pl-4 bg-white/20 focus:outline-none placeholder:text-[#313341] text-[#313341] font-bold  rounded-full w-full'
            placeholder='Type your place'
            value={searchTerm}
            onClick={handleInputClick}
            onChange={handleInputChange}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul ref={suggestionsRef} className="absolute z-10 left-0 right-0 mt-[3.3rem] p-1 backdrop-blur-3xl border rounded-3xl border-white/20  shadow-3xl max-h-72 overflow-y-hidden">
              {suggestions.map(city => (
                <li
                  key={city.id}
                  className="p-3 text-base  font-extrabold text-[#111115e0] cursor-pointer hover:bg-white/10 hover:text-zinc-800  rounded-[19px]"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      
      
      <Temp
        temp={weatherData.temp}
        conditions={weatherData.conditions}
        resolvedAdress={weatherData.resolvedAdress}
        icon={weatherData.icon}
      />

      <Forecast/>
      <DataMain
        uvindex={weatherData.uvindex}
        humidity={weatherData.humidity}
        visibility={weatherData.visibility}
        feelslike={weatherData.feelslike}
      />
    
    </SectionContainer>
  );
};

export default Search;
