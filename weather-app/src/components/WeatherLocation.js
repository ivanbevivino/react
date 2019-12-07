import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

const WeatherLoaction = () => {
	return (
		<div>
			<Location city={"BsAs"}></Location>
			<WeatherData></WeatherData>
		</div>
	);
};

export default WeatherLoaction;