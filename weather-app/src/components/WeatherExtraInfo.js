import React from "react";
const WeatherExtraInfo = ({ humidity, wind }) => {
	return (
		<div>
			{" "}
			<span>{`humidity: ${humidity}%`} </span> <span>{`Wind: ${wind}`}</span>
		</div>
	);
};

export default WeatherExtraInfo;
