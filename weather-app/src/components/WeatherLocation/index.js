import React, { Component } from "react";
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
const data = {
	wind: "10 m/s",
	humidity: 80,
	temperature: 20,
	weatherState: SUN
};
const data2 = {
	wind: "20 m/s",
	humidity: 90,
	temperature: 20,
	weatherState: WINDY
};

class WeatherLoaction extends Component {
	constructor() {
		super();
		this.state = {
			city: "Buenos Aires",
			data: data
		};
	}
	handlerUpdateClick = () => {
		console.log("actualizado");
		this.setState({
			city: "Buenos Aires!!!!",
			data: data2
		});
	};
	render() {
		const { city, data } = this.state;
		return (
			<div className="weatherLocationCont">
				<Location city={city}></Location>
				<WeatherData data={data}></WeatherData>
				<button onClick={this.handlerUpdateClick}> actualizar </button>
			</div>
		);
	}
}

export default WeatherLoaction;
