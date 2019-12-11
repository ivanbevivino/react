import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
	CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY
} from "../../constants/weathers";
const WeatherLoaction = () => {
	const data = {
		wind: "10 m/s",
		humidity: 80,
		temperature: 20,
		weatherState: SUN
	};
	return (
		<div className="weatherLocationCont">
			<Location city={"BsAs"}></Location>
			<WeatherData data={data}></WeatherData>
		</div>
	);
};

export default WeatherLoaction;
