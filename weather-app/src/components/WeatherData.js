import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

const WeatherData = () => {
	return (
		<div>
			<WeatherTemperature></WeatherTemperature>
			<WeatherExtraInfo></WeatherExtraInfo>
		</div>
	);
};

export default WeatherData;
