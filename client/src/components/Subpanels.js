import React from "react";
import Moment from "react-moment";

class Subpanels extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCalculated: false,
			hasDeployed: false,
			deployment: false
		};
	}

	componentDidUpdate(prevProps) {
		const { casebox, index } = this.props;
		const { hasCalculated } = this.state;

		if (
			!hasCalculated &&
			JSON.stringify(casebox) !== JSON.stringify(prevProps.casebox)
		) {
			setTimeout(() => {
				const color = this.props.percentage < 50 ? "red" : "green";
				this.setState({ hasCalculated: true }, () => {
					this.props.completeCalculation(parseInt(index), color);
				});
			}, 1500);
		}
	}

	handleDeployment = () => {
		this.setState({ deployment: true }, () => {
			setTimeout(() => {
				this.setState({ hasDeployed: true });
			}, 1500);
		});
	};

	render() {
		const {
			casebox,
			address,
			timestamp,
			percentage,
			diagnosis,
			responders,
			aed
		} = this.props;

		const { hasCalculated, hasDeployed, deployment } = this.state;

		const style = (
			<strong style={{ color: casebox.color }}>
				{casebox.isLoading && !hasCalculated
					? "Calculating..."
					: `${percentage}%`}
			</strong>
		);

		return (
			<div className="card card-container">
				<Moment format="DD MMMM YYYY HH:mm:ss">{timestamp}</Moment>
				<h2>{address}</h2>
				<p>
					<strong>{diagnosis}</strong> <br />
					No. of Responders nearby: {responders}
					<br />
					No. of AEDs nearby: {aed} <br />
					{casebox.isLoading || hasCalculated ? (
						<>Survival rate: {style}</>
					) : null}
					<p>
						<em>
							{deployment && !hasDeployed
								? "Pinging for first responders..."
								: deployment && hasDeployed
								? "Responders are on the way!"
								: null}
						</em>
					</p>
				</p>
				<button className="container-button" onClick={this.handleDeployment}>
					{deployment && !hasDeployed
						? "Deploying"
						: deployment && hasDeployed
						? "Deployed"
						: "Deploy"}
				</button>
			</div>
		);
	}
}

export default Subpanels;
