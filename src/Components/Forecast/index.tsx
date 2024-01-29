interface Props {
  showForecast: boolean;
  weatherData: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_max: number;
      temp_min: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  } | null;
}

const Forecast: React.FC<Props> = ({ showForecast, weatherData }) => {
  return (
    <section
      className="forecast"
      style={{ display: showForecast ? "block" : "none" }}
    >
      <article className="">
        <header>
          <i className="bi-cloud-fill"></i>
          <p></p>
          <p className="cityNameTitle">
            <i className="bi-geo-alt"></i>
            {weatherData && weatherData.name}
          </p>
        </header>
        <section>
          <div>
            {weatherData && (
              <p className="tempTitle">{weatherData.main.temp}ºC</p>
            )}
            <p className="tempSubtitle">Sensação termica:</p>
            {weatherData && (
              <p className="tempSubtitle">{weatherData.main.feels_like}ºC</p>
            )}
          </div>
          <div>
            {weatherData && (
              <p className="tempSubtitle">
                {weatherData.weather[0].description}
                <img
                  className="weatherIcon"
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  height={10}
                  width={10}
                  alt={weatherData.weather[0].description}
                ></img>
              </p>
            )}
          </div>
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
            <div className="info">
              <i className=" bi-thermometer-sun"></i>
              <div>
                <p>Max</p>
                {weatherData && <p>{weatherData.main.temp_max}ºC</p>}
              </div>
            </div>
            <div className="info">
              <i className="bi-thermometer-snow"></i>
              <div>
                <p>Min</p>
                {weatherData && <p>{weatherData.main.temp_min}ºC</p>}
              </div>
            </div>
          </article>
        </section>
      </article>
    </section>
  );
};

export default Forecast;
