import React from "react";
import Subpanels from "./Subpanels";

class Panel extends React.Component {
	render() {
		const subpanelDivs = this.props.cases.map((item, index) => {
			const {
				address,
				aed,
				diagnosis,
				percentage,
				responders,
				timestamp
			} = item;
			return (
				<Subpanels
					key={index}
					address={address}
					aed={aed.length}
					diagnosis={diagnosis}
					percentage={percentage}
					responders={responders.length}
					timestamp={timestamp}
				></Subpanels>
			);
		});

		return (
			<div className="panel-container">
				<img src="./hero.png" className="hero-container"></img>
				{subpanelDivs}
			</div>
		);
	}
}

export default Panel;
