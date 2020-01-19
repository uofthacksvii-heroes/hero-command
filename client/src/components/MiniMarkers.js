import React from "react";
const {
	MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

class MiniMarkers extends React.Component {
	render() {
		const { coordinates, status } = this.props;
		return (
			<MarkerWithLabel
				position={coordinates}
				labelAnchor={{ x: 0, y: 0 }}
				icon={{ url: "" }}
				labelStyle={{
					backgroundColor: status === "aed" ? "#5e3f31" : "#FF1493",
					fontSize: "0px",
					padding: "8px"
				}}
			>
				<div>Hello There!</div>
			</MarkerWithLabel>
		);
	}
}

export default MiniMarkers;
