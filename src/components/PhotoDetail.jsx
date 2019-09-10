import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SelectedPhoto from "../dataType/SelectedPhoto";

class PhotoDetail extends Component {
	state = {
    selectedSize:"",
    selectedPrice:""
  }
  handleDropdown = (e, size, price) => {
    e.preventDefault();
    this.setState({
      selectedSize:size,
      selectedPrice:price
    })
  }
  
	render() {

		if (!this.props.photo) {
			return <div>No Photo Object in cache.</div>;
		}

		const src = this.props.photo.download_url.split("/");
		src.splice(-2, 2, 400);

		return (
			<div className="container photo-details">
				<div className="row text-center text-md-left">
					<div className="col">
						<img src={src.join("/")} alt="lage_image" />
					</div>
					<div className="col">
						<ul>
							<li>
								<p className="font-weight-bold">
									Photo ID:{" "}
									<span className="font-weight-normal">
										{this.props.photo.id}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold">
									Author:{" "}
									<span className="font-weight-normal">
										{this.props.photo.author}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold">
									Width:{" "}
									<span className="font-weight-normal">
										{this.props.photo.width}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold">
									Height:{" "}
									<span className="font-weight-normal">
										{this.props.photo.height}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold">
									URL:{" "}
									<span className="font-weight-normal">
										{this.props.photo.url}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold">
									Download URL:{" "}
									<span className="font-weight-normal">
										{this.props.photo.download_url}
									</span>
								</p>
							</li>
							<li>
								<p className="font-weight-bold d-inline-block pr-4">
									Size:{" "}
								</p>
								<DropdownButton
									id="dropdown-basic-button"
									title={
										this.state.selectedSize
											? this.state.selectedSize
											: "Select Size"
									}
									className="d-inline-block"
								>
									<Dropdown.Item
										href="/"
										onClick={ e=> this.handleDropdown(
											e, "Small", "10"
										)}
									>
										{SelectedPhoto.ATTR_SM.text}
									</Dropdown.Item>
									<Dropdown.Item
										href="/"
										onClick={ e=> this.handleDropdown(
											e, "Medium", "20"
										)}
									>
										{SelectedPhoto.ATTR_MD.text}
									</Dropdown.Item>
									<Dropdown.Item
										href="/"
										onClick={ e=> this.handleDropdown(
											e, "Large", "50"
										)}
									>
										{SelectedPhoto.ATTR_LG.text}
									</Dropdown.Item>
									<Dropdown.Item
										href="/"
										onClick={ e=> this.handleDropdown(
											e, "X-large", "100"
										)}
									>
										{SelectedPhoto.ATTR_XL.text}
									</Dropdown.Item>
								</DropdownButton>
							</li>
							<li>
								<p className="font-weight-bold">
									Price: $
									<span className="font-weight-normal">
										{this.state.selectedPrice
											? this.state.selectedPrice
											: "0"}
									</span>
								</p>
							</li>
							<li>
								<i
									className="fa fa-plus-circle"
									aria-hidden="true"
								></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default PhotoDetail;
