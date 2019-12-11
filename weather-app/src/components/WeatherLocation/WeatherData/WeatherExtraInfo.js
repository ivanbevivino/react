import React from "react";
const WeatherExtraInfo = ({ humidity, wind }) => {
	return (
		<div className="WExtraInfoContainer">
			{" "}
			<span className="ExtraInfoText">{`humidity: ${humidity}%`} </span>{" "}
			<span className="ExtraInfoText">{`Wind: ${wind}`}</span>
		</div>
	);
};

export default WeatherExtraInfo;
