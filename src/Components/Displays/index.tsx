"use client";
import { showWeather } from "@/Services/City";
import { useEffect, useState } from "react";

interface Props {
  cityName: string;
}

const Displays: React.FC<Props> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (cityName) {
        const response = await showWeather({ cityName });
        setWeatherData(response);
        console.log(response);
      }
    };

    fetchData();
  }, []);
  return (
    <article className="displays">
      <header>
        <i className="bi-cloud-fill"></i>
        <p></p>
        <p>
          <i className="bi-geo-alt"></i>
          {weatherData && weatherData.name}
        </p>
      </header>
      <section>
        {weatherData && <p className="tempTitle">{weatherData.main.temp}ºC</p>}
        <article className="squareInfos">
          <div className="info">
            <i className="bi-wind"></i>
            <div>
              <p>Vento</p>
              {weatherData && <p>{weatherData.wind.speed}Km/h</p>}
            </div>
          </div>
          <div className="info">
            <i className=" bi-droplet-half"></i>
            <div>
              <p>Umidade</p>
              {weatherData && <p>{weatherData.main.humidity}%</p>}
            </div>
          </div>
          <div className="info">
            <i className="bi-cloud-drizzle-fill"></i>
            <div>
              <p>Chuva</p>
              {weatherData && <p>{weatherData.main.pressure / 100}%</p>}
            </div>
          </div>
        </article>
      </section>
    </article>
  );
};

export default Displays;
