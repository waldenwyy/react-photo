import React, { Component } from "react";
import PhotoDetail from "../components/PhotoDetail";
import { connect } from "react-redux";
import { fetchData } from "../actions/photoActions";

class PhotoDetailContainer extends Component {
	render() {
		if (this.props.error) {
			return <div>Error! {this.props.error.message}</div>;
		}

		return (
			<div>
				{this.props.loading ? <p>Loading</p> : null}
				<h2 className="text-center py-5">Photo Details</h2>

				<PhotoDetail
					photo={this.props.photo.find(p => {
						return p.id === this.props.match.params.number;
					})}
				/>
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return {
		photo: state.photoReducer.result
	};
};

export default connect(
	mapStatetoProps,
	{ fetchData }
)(PhotoDetailContainer);
