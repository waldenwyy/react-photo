import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Navigation extends Component {

    render() {
        return (
            <div className="header-navigation py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <NavLink exact to="/">
                                <h1 className="d-inline-block">Photo List</h1>
                            </NavLink>
                            <NavLink exact to="/cart" className="shopping-cart">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span>{ this.props.totalItem }</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        totalItem: state.cartReducer.totalItem
    } 
}

export default connect(mapStatetoProps)(Navigation);