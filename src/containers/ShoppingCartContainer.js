import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ShoppingCartContainer extends Component {
	render() {
		if (this.props.error) {
			return <div>Error! {this.props.error.message}</div>;
		}

		if (!this.props.photos) {
			return <div>No Photo Added to the cart</div>;
		}

		return (
			<div className="container">
				{this.props.loading ? <p>Loading</p> : null}
				<h2 className="text-center py-5">Shopping Cart</h2>
				
				{this.props.photos &&
					this.props.photos.length > 0 &&
					this.props.photos.map((photo, index) => {
						const src = photo.download_url.split("/");
						src.splice(-2, 2, 200, 200);

						return (
							
							<div className="row my-5" key={index}>
								<div className="col-4">
									<NavLink exact to={`/photo/${photo.id}`}>
										<img
											src={src.join("/")}
											alt={photo.id}
										/>
									</NavLink>
								</div>
								<div className="col-4">
									<h4>
										ID: {photo.id} - Size: {photo.size}
									</h4>
									<h5>Quantity: {photo.quantity}</h5>
								</div>
								<div className="col-4">
									<h4>Photo Price: $ {photo.price}</h4>
								</div>
							</div>
						);
					})}
				{ this.props.totalItem !== 0 &&
					<div className="row">
					<div className="offset-4 col-4">
						<h4>Total Quantity: {this.props.totalItem}</h4>
					</div>
					<div className="col-4">
						<h4>Total Price: $ {this.props.totalPrice}</h4>
					</div>
				</div>
				}
				
				
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return {
		photos: state.cartReducer.photos,
		totalPrice: state.cartReducer.totalPrice,
		totalItem: state.cartReducer.totalItem
	};
};

export default connect(mapStatetoProps)(ShoppingCartContainer);
