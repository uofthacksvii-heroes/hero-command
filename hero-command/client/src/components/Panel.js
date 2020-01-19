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
					index={index}
					address={address}
					aed={aed.length}
					diagnosis={diagnosis}
					percentage={percentage}
					responders={responders.length}
					timestamp={timestamp}
					casebox={this.props.casebox[index]}
					completeCalculation={this.props.completeCalculation}
				></Subpanels>
			);
		});

		return (
			<div className="panel-container">
				<img src="./hero.png" className="hero-container"></img>
				<div className="subpanel-container">{subpanelDivs}</div>
			</div>
		);
	}
}

export default Panel;
