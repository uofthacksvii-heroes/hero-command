import React from "react";
import Moment from "react-moment";

class Subpanels extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "orange",
			isLoading: true,
			hasCalculated: false
		};
	}

	componentDidMount() {
		if (this.state.isLoading) {
			setTimeout(() => {
				const color = this.props.percentage < 50 ? "red" : "green";
				this.setState({ color, isLoading: false }, () => {
					console.log("done");
				});
			}, 1500);
		}
	}

	render() {
		const { isLoading, color } = this.state;
		const {
			address,
			timestamp,
			percentage,
			diagnosis,
			responders,
			aed
		} = this.props;
		const style = (
			<strong style={{ color: color }}>
				{isLoading === true ? "Calculating..." : `${percentage}%`}
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
					Survival rate: {style}
				</p>
				<button className="container-button">Deploy</button>
			</div>
		);
	}
}

export default Subpanels;
