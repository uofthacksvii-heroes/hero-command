import React from "react";
import Map from "./Map";
import Panel from "./Panel";
import { config, responders, cases, aeds } from "../data/info";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { casebox: [{}, {}] };
	}

	completeCalculation = (incidentIndex, color) => {
		const casebox = { ...this.state.casebox };
		casebox[incidentIndex] = {
			color,
			isLoading: false
		};
		this.setState({ casebox }, () => {
			console.log("updated");
		});
	};

	triggerCalculation = incidentIndex => {
		const casebox = { ...this.state.casebox };
		casebox[incidentIndex] = {
			color: "orange",
			isLoading: true
		};
		this.setState({ casebox }, () => {
			console.log("updated");
		});
	};

	render() {
		return (
			<div className="container">
				<Panel
					cases={cases}
					casebox={this.state.casebox}
					completeCalculation={this.completeCalculation}
				></Panel>
				<Map
					cases={cases}
					handleChange={this.handleChange}
					responders={responders}
					places={aeds}
					options={config}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100vh` }} />}
					containerElement={<div style={{ height: `100vh` }} />}
					mapElement={<div style={{ height: `100vh` }} />}
					triggerCalculation={this.triggerCalculation}
				></Map>
			</div>
		);
	}
}

export default App;
