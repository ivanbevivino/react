import React from "react";
import WeatherIcons from "react-weathericons";

import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY
} from "../../../constants/weathers";
import PropTypes from "prop-types";
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
	const iconSize = "4x";
	const getWeatherIcon = wheatherState => {
		const icon = icons[wheatherState];
		if (icon) {
			return (
				<WeatherIcons
					className="wicon"
					name={icon}
					size={iconSize}
				></WeatherIcons>
			);
		} else {
			return (
				<WeatherIcons
					className="wicon"
					name={"day-sunny"}
					size={iconSize}
				></WeatherIcons>
			);
		}
	};

	return (
		<div className="WTemperature">
			{getWeatherIcon(wheatherState)}
			<span className="Temperature">{`${temperature}`} </span>{" "}
			<span className="TemperatureType"> {"C"}</span>
		</div>
	);
};

WeatherTemperature.propTypes = {
	temperature: PropTypes.number,
	wheatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
