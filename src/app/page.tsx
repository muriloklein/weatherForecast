"use client";
import Displays from "@/Components/Displays";
import { showWeather } from "@/Services/City";
import { useState } from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Forecast from "@/Components/Forecast";

const indexCities = [
  "New York",
  "Rio de Janeiro",
  "Toronto",
  "Sidney",
  "London",
  "São Paulo",
  "Los Angeles",
  "Berlin",
  "Paris",
  "Porto Alegre",
  "Miami",
  "Ciudad de Mexico",
];

export default function Home() {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [showForecast, setShowForecast] = useState(false);

  const handleFormSubmition = async (ev: any) => {
    ev.preventDefault();
    if (cityName) {
      const res = await showWeather({ cityName: cityName });
      if (res) {
        setWeatherData(res);
        setShowForecast(true);
        setCityName("");
        console.log(res);
      }
    } else {
      alert("Digite uma cidade!");
    }
  };

  return (
    <main>
      <Header
        handleSubmission={handleFormSubmition}
        cityName={cityName}
        setShowForecast={setShowForecast}
        setCityName={setCityName}
      />
      <Forecast showForecast={showForecast} weatherData={weatherData} />
      <section
        className="citiesInfo"
        style={{ display: showForecast ? "none" : "flex" }}
      >
        {indexCities
          ? indexCities.map((city) => <Displays key={city} cityName={city} />)
          : null}
      </section>
      <Footer />
    </main>
  );
}
