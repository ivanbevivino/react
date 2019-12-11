import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
const WeatherLoaction = () => {
	return (
		<div className="weatherLocationCont">
			<Location city={"BsAs"}></Location>
			<WeatherData></WeatherData>
		</div>
	);
};

export default WeatherLoaction;
