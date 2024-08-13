import React, { useState } from "react";
import useWeatherInfo from './hooks/useWeatherInfo'
import { FaSearch } from "react-icons/fa";
import clearpng from "./Assets/clear.png";
import humiditypng from "./Assets/humidity.png";
import windpng from "./Assets/wind.png";

const App = () => {
   const [city, setCity] = useState('');
   const [displayCity, setDisplayCity] = useState('');
   const { data } = useWeatherInfo(displayCity);

   const handleClick = () => {
      setDisplayCity(city);
   }

   return (
      <div className="w-full h-screen bg-purple-300 flex items-center justify-center text-white">
         <div className="h-[85%] flex flex-col items-center p-5 rounded-[20px] bg-blue-600">
            <div className="flex w-full justify-around items-center">
               <input
                  placeholder="Search"
                  type="text"
                  className="w-[80%] text-xl rounded-full text-black p-3"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
               />
               <button onClick={handleClick} className="p-4 rounded-full cursor-pointer text-xl bg-white text-black">
                  <FaSearch />
               </button>
            </div>
            <div>
               <img src={clearpng} alt="weather icon" className="w-50 mt-5" />
            </div>
            <div className="flex flex-col items-center text-6xl font-semibold">
               <h1>{data?.weather ? data.weather[0].main : "Loading..."}</h1>
               <h1>{displayCity}</h1>
            </div>
            <div className="w-full h-[12vh] flex justify-between p-10 items-center mt-10">
               <div className="flex gap-4">
                  <img src={humiditypng} alt="humidity icon" className="h-10" />
                  <div className="text-xl">
                     <h1>{data?.main ? `${data.main.humidity}%` : "--"}</h1>
                     <h1>Humidity</h1>
                  </div>
               </div>
               <div className="flex gap-4">
                  <img src={windpng} alt="wind icon" className="h-10" />
                  <div className="text-xl">
                     <h1>{data?.wind ? `${data.wind.speed} km/h` : "--"}</h1>
                     <h1>Wind Speed</h1>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default App;
