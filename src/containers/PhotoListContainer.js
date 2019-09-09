import React, { Component } from 'react';
import PhotoList from '../components/PhotoList';
import { connect } from 'react-redux';

class PhotoListContainer extends Component {
  
  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }
    return (
      <div>
        { this.props.loading ? <p>Loading</p> : null }
        <p>
          Photo Shop
        </p>
        <PhotoList photo={this.props.photo} />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    photo: state.photoReducer.result
  } 
}

export default connect(mapStatetoProps, null)(PhotoListContainer);
