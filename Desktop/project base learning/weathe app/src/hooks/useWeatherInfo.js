import React, { useEffect, useState } from "react";
const useWeatherInfo = (cityname) => {
  const [data, setData] = useState();
  const APIkey = "a9ad8bb880a515a5b91c3ae9aa5d4d57";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [cityname]);
  console.log(data);
  return {data};
};

export default useWeatherInfo;
