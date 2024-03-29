import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import SectionContainer from './SectionContainer';
import cities from '../cities500.json';
import axios from 'axios';
import Temp from './Temp';
import MainData from './MainData';
import Details from './Details';
import Forecast from './Forecast';
import Loader from './Loader';
import DailyForecast from "./DailyForecast";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const suggestionsRef = useRef(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [activeTab, setActiveTab] = useState('forecast');
  const [weatherData, setWeatherData] = useState({
    temp: 24, 
    conditions: "Rain", 
    resolvedAdress: "Miramar, Argentina", 
    icon: "thunder-rain",
    uvindex: 4,
    humidity: 87,
    dew: 23,
    visibility: 7,
    feelslike: 23,
    sunrise: "06:00",
    sunset: "18:00",
    wind: 10,
    winddir:330,
    pressure: 1000,
    snow: 0,
    snowdepth: 0
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
    setSearchTerm('');
    setShowSuggestions(false);

    try {
      setIsDataLoading(true);
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.name}, ${city.country}?unitGroup=metric&key=NWP5A5DETM2C6BV4R9ZZR6FFT`);
      const first24Hours = response.data.days[0].hours.slice(0, 24);
      setHourlyForecast(first24Hours);
      const last14Days = response.data.days.slice(0, 15);
      setDailyForecast(last14Days); // Cambiado a last14Days
      setWeatherData({
        temp: response.data.days[0].temp,
        conditions: response.data.days[0].conditions,
        resolvedAdress: response.data.address,
        icon: response.data.days[0].icon,
        uvindex: response.data.days[0].uvindex,
        humidity: response.data.days[0].humidity,
        dew: response.data.days[0].dew,
        visibility: response.data.days[0].visibility,
        feelslike: response.data.days[0].feelslike,
        sunrise: response.data.days[0].sunrise,
        sunset: response.data.days[0].sunset,
        wind: response.data.days[0].windspeed,
        winddir: response.data.days[0].winddir,
        pressure: response.data.days[0].pressure,
        snow: response.data.days[0].snow,
        snowdepth: response.data.days[0].snowdepth,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsDataLoading(false);
    }
  }, [setHourlyForecast, setDailyForecast]);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SectionContainer id="search" className={'mt-5'}>
      <form className="flex justify-center sm:pb-5">
        <div className="flex  relative p-1  border bg-[#0000001b] border-[#ffffff09] rounded-full w-full sm:w-1/3">
          <input
            className='flex-1 p-2 pl-4 bg-[#00000015] focus:outline-none placeholder:text-white text-white font-bold  rounded-full w-full'
            placeholder='Search places'
            value={searchTerm}
            onClick={handleInputClick}
            onChange={handleInputChange}
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul ref={suggestionsRef} className="absolute z-10 left-0 right-0 mt-[3.3rem] p-1 backdrop-blur-3xl border rounded-3xl border-[#ffffff10]  shadow-3xl max-h-72 overflow-y-hidden">
              {suggestions.map(city => (
                <li
                  key={city.id}
                  className="p-3 text-base  font-extrabold text-white cursor-pointer hover:bg-[#00000014] hover:text-white  rounded-[19px]"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city.name}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      {isDataLoading ? (
        <Loader/>
      ) : (
        <>
          <Temp
            temp={weatherData.temp}
            conditions={weatherData.conditions}
            resolvedAdress={weatherData.resolvedAdress}
            icon={weatherData.icon}
          />

          <div className="flex flex-col items-center justify-center mb-0 mt-8 sm:mt-1">
            <div className='flex justify-around gap-x-44'>
              <button
                className={` rounded-full text-base font-extrabold ${activeTab === 'forecast' ? ' text-[#ffffffc4]' : 'text-[#ebebf599]'}`}
                onClick={() => handleTabChange('forecast')}
              >
                Hourly
              </button>
              <button
                className={` rounded-full text-base font-extrabold ${activeTab === 'dailyForecast' ? ' text-[#ffffffc4]' : 'text-[#ebebf599]'}`}
                onClick={() => handleTabChange('dailyForecast')}
              >
                Weekly
              </button>
            </div>
            <div className='w-[390px] left-0 top-[2px] h-[4px] relative overflow-hidden'>
              <img
                className='w-[390px] left-0 top-[2px] object-cover h-[2px] absolute '
                src="/icons/separator.svg"
                alt=""
              />
              <img
                className={`top-0 h-[3px] absolute w-[390px]  ${activeTab === 'forecast' ? 'left-0' : 'left-[215px]'}`}
                src="/icons/underline.svg"
                alt=""
              />
            </div>
          </div>

          {activeTab === 'forecast' && <Forecast hourlyForecast={hourlyForecast} />}
          {activeTab === 'dailyForecast' && <DailyForecast dailyForecast={dailyForecast} />}

          <MainData
            uvindex={weatherData.uvindex}
            humidity={weatherData.humidity}
            dew={weatherData.dew}
            visibility={weatherData.visibility}
            feelslike={weatherData.feelslike}
          />
          <Details sunrise={weatherData.sunrise} 
            sunset={weatherData.sunset} 
            wind={weatherData.wind}
            winddir={weatherData.winddir} 
            pressure={weatherData.pressure} 
            snow={weatherData.snow} 
            snowdepth={weatherData.snowdepth}
          />
        </>
      )}
    </SectionContainer>
  );
};

export default Search;
