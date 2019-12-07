import React from "react";
import "./styles.css";
const WeatherExtraInfo = ({ humidity, wind }) => {
	return (
		<div className="WExtraInfoContainer">
			{" "}
			<span>{`humidity: ${humidity}%`} </span> <span>{`Wind: ${wind}`}</span>
		</div>
	);
};

export default WeatherExtraInfo;
