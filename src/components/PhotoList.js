import React from 'react';

const PhotoList = props => {
  return(
    <div className="container photo-list">
      <div className="row">
        { props.photo && props.photo.length > 0 && 
          props.photo.map(photo => {
            const src = photo.download_url.split("/")
            src.splice(-2, 2, 200, 200);

            return(
              <div className="col text-center" key={photo.id}>
                <a href="/">
                  <img src={src.join("/")} alt="item"/>
                </a>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PhotoList;