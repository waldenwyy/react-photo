import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SelectedPhoto from '../dataType/SelectedPhoto';

const PhotoDetail = props => {

  const [ selectedPhoto, setSelectedPhoto ] = React.useState(new SelectedPhoto());

  const fnSelectPhoto = ({ size, price }) => (e) => {
    e.preventDefault();
    setSelectedPhoto(selectedPhoto.set({ size, price }));
  }

  if (!props.photo) {
    return <div>No Photo Object in cache.</div>
  }

  const src = props.photo.download_url.split("/")
  src.splice(-2, 2, 400);

  return(
    <div className="container photo-details">
      <div className="row text-center text-md-left">
        <div className="col">
          <img src={src.join("/")} alt="lage_image"/>
        </div>
        <div className="col">
          <ul>
            <li>
              <p className="font-weight-bold">Photo ID: <span className="font-weight-normal">{props.photo.id}</span></p>
            </li>
            <li>
              <p className="font-weight-bold">Author: <span className="font-weight-normal">{props.photo.author}</span></p>
            </li>
            <li>
              <p className="font-weight-bold">Width: <span className="font-weight-normal">{props.photo.width}</span></p>
            </li>
            <li>
              <p className="font-weight-bold">Height: <span className="font-weight-normal">{props.photo.height}</span></p>
            </li>
            <li>
              <p className="font-weight-bold">URL: <span className="font-weight-normal">{props.photo.url}</span></p>
            </li>
            <li>
              <p className="font-weight-bold">Download URL: <span className="font-weight-normal">{props.photo.download_url}</span></p>
            </li>
            <li>
              <p className="font-weight-bold d-inline-block pr-4">Size: </p>
              <DropdownButton 
                id="dropdown-basic-button" title={
                  selectedPhoto.size ? selectedPhoto.size : "Select Size"
                }  className="d-inline-block"
              >
                <Dropdown.Item href="/" onClick={fnSelectPhoto(SelectedPhoto.ATTR_SM)}>
                  {SelectedPhoto.ATTR_SM.text}
                </Dropdown.Item>
                <Dropdown.Item href="/" onClick={fnSelectPhoto(SelectedPhoto.ATTR_MD)}>
                  {SelectedPhoto.ATTR_MD.text}
                </Dropdown.Item>
                <Dropdown.Item href="/" onClick={fnSelectPhoto(SelectedPhoto.ATTR_LG)}>
                  {SelectedPhoto.ATTR_LG.text}
                </Dropdown.Item>
                <Dropdown.Item href="/" onClick={fnSelectPhoto(SelectedPhoto.ATTR_XL)}>
                  {SelectedPhoto.ATTR_XL.text}
                </Dropdown.Item>
              </DropdownButton>
            </li>
            <li>
              <p className="font-weight-bold">Price: $<span className="font-weight-normal">{
                  selectedPhoto.price ? selectedPhoto.price : "0"
                }</span></p>
            </li>
            <li>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </li>
          </ul>

        </div>
    
      </div>
    </div>
  );
}

export default PhotoDetail;