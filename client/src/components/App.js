import React from "react";
import Map from "./Map";
import Panel from "./Panel";
import { config, responders, cases, aeds } from "../data/info";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Panel cases={cases}></Panel>
				<Map
					handleChange={this.handleChange}
					responders={responders}
					places={aeds}
					options={config}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100vh` }} />}
					containerElement={<div style={{ height: `100vh` }} />}
					mapElement={<div style={{ height: `100vh` }} />}
				></Map>
			</div>
		);
	}
}

export default App;
