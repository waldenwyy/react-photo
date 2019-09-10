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
        <h2 className="text-center py-5">Shopping Cart</h2>
       
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
