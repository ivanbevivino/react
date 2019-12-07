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

const WeatherData = () => {
	return (
		<div className="WDataContainer">
			<WeatherTemperature
				temperature={25}
				wheatherState={SUN}
			></WeatherTemperature>
			<WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
		</div>
	);
};

export default WeatherData;
