/* global google */
import React from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	Circle
} from "react-google-maps";
import MiniMarkers from "./MiniMarkers";

class Map extends React.Component {
	async componentDidMount() {
		const { coordinates, responders, aed } = this.props.cases[0];
		const victim_coordinates = this.convertCoordinatesText(coordinates);
		const responders_coordinates = this.convertCoordinatesText(responders[0]);
		const aed_coordinates = this.convertCoordinatesText(aed[0].coordinates);

		console.log(victim_coordinates, responders_coordinates, aed_coordinates);

		const resToAed = await this.calculateDistanceMatrix(
			responders_coordinates,
			aed_coordinates
		);
		const aedToVic = await this.calculateDistanceMatrix(
			aed_coordinates,
			victim_coordinates
		);

		console.log(resToAed, aedToVic);
		const resToAedToVic = {
			distance: resToAed.distance + aedToVic.distance,
			duration: resToAed.duration + aedToVic.duration
		};

		const resToVic = await this.calculateDistanceMatrix(
			responders_coordinates,
			victim_coordinates
		);

		const result = {
			victim_coordinates: coordinates,
			aed_coordinates: aed[0].coordinates,
			responder_coordinates: responders[0],
			from_total: resToAedToVic,
			from_victim: resToVic
		};

		console.log(result);

		const url =
			"https://cors-anywhere.herokuapp.com/5c5307a8.ngrok.io/predict/one";
		fetch(url, {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(result),
			headers: { "Content-Type": "application/json" }
		}).then(res => console.log(res));
	}

	convertCoordinatesText = obj => {
		return new google.maps.LatLng(obj.lat, obj.lng);
	};

	calculateDistanceMatrix = (origin, destination) => {
		return new Promise((resolve, reject) => {
			const matrix = new google.maps.DistanceMatrixService();
			matrix.getDistanceMatrix(
				{
					origins: [origin],
					destinations: [destination],
					travelMode: google.maps.TravelMode.WALKING
				},
				res => {
					const result = res.rows[0].elements[0];
					const { distance, duration } = result;
					const obj = {
						distance: distance.value,
						duration: duration.value
					};
					result ? resolve(obj) : reject();
				}
			);
		});
	};

	handleMarkersClicked = index => {
		this.props.triggerCalculation(index);
	};

	render() {
		const { incidences, zoom, circleOptions, center } = this.props.options;
		const { radius, ...others } = circleOptions;

		const incidentDivs = incidences.map((item, index) => (
			<>
				<Marker
					position={item}
					onClick={() => this.handleMarkersClicked(index)}
				/>
				<Circle defaultCenter={item} radius={radius} options={others} />
			</>
		));

		const responderDivs = this.props.responders.map(item => (
			<MiniMarkers
				coordinates={item.coordinates}
				status={item.status}
			></MiniMarkers>
		));

		const aedDivs = this.props.places.map(item => (
			<MiniMarkers
				coordinates={item.coordinates}
				status={item.status}
			></MiniMarkers>
		));

		return (
			<GoogleMap defaultZoom={zoom} defaultCenter={center}>
				{incidentDivs}
				{responderDivs}
				{aedDivs}
			</GoogleMap>
		);
	}
}

export default withScriptjs(withGoogleMap(Map));
