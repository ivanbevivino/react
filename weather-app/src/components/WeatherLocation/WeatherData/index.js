import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY
} from "../../../constants/weathers";
import "./styles.css";

const WeatherData = ({ data }) => {
	const { humidity, temperature, weatherState, wind } = data;
	return (
		<div className="WDataContainer">
			<WeatherTemperature
				temperature={temperature}
				wheatherState={weatherState}
			></WeatherTemperature>
			<WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
		</div>
	);
};

export default WeatherData;
