import React from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends React.Component {

    render() {
        return (
            <div className="Header-navigation py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <NavLink exact to="/">
                                <h1 className="d-inline-block">Photo List</h1>
                            </NavLink>
                            <NavLink exact to="/cart" className="shopping-cart">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>0</span>
                            </NavLink>
                            
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}