import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/photoActions';

class ShoppingCartContainer extends Component {
  state= {
    pageNumber: 1,
  }
  componentDidMount() {
    this.props.fetchData(this.state.pageNumber);
  }

  render() {
    if (this.props.error) {
      return <div>Error! {this.props.error.message}</div>;
    }
    return (
      <div>
        { this.props.loading ? <p>Loading</p> : null }
        <p>
          Shopping Cart
        </p>
       
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    photo: state.photoReducer.result
  } 
}

export default connect(mapStatetoProps, { fetchData })(ShoppingCartContainer);
