import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";

const WeatherData = () => {
	return (
		<div>
			<WeatherTemperature></WeatherTemperature>
			<WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
		</div>
	);
};

export default WeatherData;
