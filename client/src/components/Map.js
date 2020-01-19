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
	componentDidMount() {
		// Some sample data plus a helper for the DistanceMatrixService.
		// const origin = new google.maps.LatLng(43.6458709, -79.3898179);
		// const destination = new google.maps.LatLng(43.6489928, -79.3947052);
		// const matrix = new google.maps.DistanceMatrixService();
		// // Get distance from Google API, if server responds, call renderDetails().
		// matrix.getDistanceMatrix(
		// 	{
		// 		origins: [origin],
		// 		destinations: [destination],
		// 		travelMode: google.maps.TravelMode.WALKING
		// 	},
		// 	(res, status) => {
		// 		const result = res.rows[0].elements[0];
		// 		const url =
		// 			"https://cors-anywhere.herokuapp.com/e9dc4c18.ngrok.io/alert";
		// 		fetch(url, {
		// 			method: "POST",
		// 			mode: "cors",
		// 			body: JSON.stringify(result),
		// 			headers: { "Content-Type": "application/json" }
		// 		}).then(res => console.log(res));
		// 	}
		// );
	}

	onToggleOpen = item => {
		console.log("hi", item);
		this.props.handleChange();
	};

	render() {
		const { incidences, zoom, circleOptions, center } = this.props.options;
		const { radius, ...others } = circleOptions;

		const incidentDivs = incidences.map((item, index) => (
			<>
				<Marker position={item} onClick={() => this.onToggleOpen(index)} />
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
