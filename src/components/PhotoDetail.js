import React from 'react';

const PhotoDetail = props => {

  if (!props.photo) {
    return <div>No Photo Object in cache.</div>
  }

  console.log(props.photo)
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
          </ul>
          <h2>
            
          </h2>

        </div>
    
      </div>
    </div>
  );
}

export default PhotoDetail;