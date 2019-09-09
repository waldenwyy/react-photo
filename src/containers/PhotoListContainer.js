import React, { Component } from 'react';
import PhotoList from '../components/PhotoList';
import { connect } from 'react-redux';
import { fetchData } from '../actions/photoActions';
import { BottomNav } from '../components/BottomNav';

class PhotoListContainer extends Component {
  state = {
    pageNumber: 1
  }

  componentDidMount() {
    this.setState({
      pageNumber: this.props.match.params.number
        ? 
        this.props.match.params.number:
        1
    }, () => {
      this.props.fetchData(this.state.pageNumber);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.number && this.state.pageNumber !== this.props.match.params.number) {
      this.setState({ pageNumber: this.props.match.params.number }, () => {
        this.props.fetchData(this.state.pageNumber);
      });
    }
  }

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
        <BottomNav pageNumber={this.state.pageNumber}/>
      </div>
      
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    photo: state.photoReducer.result
  } 
}

export default connect(mapStatetoProps, { fetchData })(PhotoListContainer);
