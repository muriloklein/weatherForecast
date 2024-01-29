import React from "react";

const apiKey = "1407d58240fb0125b4512f467a9b0a50";

interface Props {
  cityName: string;
}

export const showWeather = async ({ cityName }: Props) => {
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`;

  const response = await fetch(apiWeatherUrl);
  if (!response.ok) {
    alert("Nome inválido");
    return null;
  } else {
    const data = await response.json();
    return data;
  }
};
