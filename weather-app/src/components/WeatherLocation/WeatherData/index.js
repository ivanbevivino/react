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

const WeatherData = () => {
	return (
		<div>
			<WeatherTemperature
				temperature={25}
				wheatherState={SUN}
			></WeatherTemperature>
			<WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
		</div>
	);
};

export default WeatherData;
