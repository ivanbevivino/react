import React from "react";
import WeatherIcons from "react-weathericons";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../constants/weathers";
const WeatherTemperature = props => {
	const { temperature, wheatherState } = props;

	const icons = {
		[CLOUD]: "cloud",
		[CLOUDY]: "cloudy",
		[SUN]: "day-sunny",
		[RAIN]: "rain",
		[SNOW]: "snow",
		[WINDY]: "windy"
	};
	const getWeatherIcon = wheatherState => {
		const icon = icons[wheatherState];
		if (icon) {
			return <WeatherIcons name={icon} size="2x"></WeatherIcons>;
		} else {
			return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>;
		}
	};

	return (
		<div>
			{getWeatherIcon(wheatherState)}
			<span>{`${temperature} C`} </span>
		</div>
	);
};

export default WeatherTemperature;
