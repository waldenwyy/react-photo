import React from 'react';

const PhotoList = props => {
  return(
    <div className="container">
      <div className="row">
        { props && props.length > 0 && 
          props.map(photo => {
            return(
              <div className="col" key={photo.id}>
                <a href="/">
                  <img src={photo.download_url} alt="item"/>
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