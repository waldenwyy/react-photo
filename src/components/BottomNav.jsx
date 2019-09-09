import React from "react";
import { NavLink } from "react-router-dom";

export class BottomNav extends React.Component {

    render() {
        const p = parseInt(this.props.pageNumber);
        const lastPage =  p - 1;
        const nextPage =  p + 1;
        console.log(lastPage);
        return (
            <div className="bottom-navigation">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            
                            { 
                                lastPage > 0 &&
                                <div className="row bottom-nav-left bottom-nav-link">
                                    <div className="col-2 text-right">
                                        <NavLink exact to={`/page/${lastPage}`}
                                        onMouseOver={e => (e.currentTarget.firstChild.src = "/icon/icon-arrow-left-reverse.png")}
                                        onMouseOut={e => (e.currentTarget.firstChild.src = "/icon/icon-arrow-left.png")}
                                        >
                                            <img 
                                            src="/icon/icon-arrow-left.png"
                                            alt="left page" />
                                        </NavLink>
                                    </div>
                                    <div className="col-10 text-left">
                                        <p>Last</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="col">
                            {/* {this.props.rightLink && */}
                                <div className="row bottom-nav-right bottom-nav-link">
                                    <div className="col-10 text-right">
                                        <p>Next</p>
                                    </div>
                                    <div className="col-2 text-left">
                                        <NavLink exact to={`/page/${nextPage}`}
                                        onMouseOver={e => (e.currentTarget.firstChild.src = "/icon/icon-arrow-right-reverse.png")}
                                        onMouseOut={e => (e.currentTarget.firstChild.src = "/icon/icon-arrow-right.png")}>
                                            <img src="/icon/icon-arrow-right.png" alt="right page" />
                                        </NavLink>
                                    </div>
                                </div>
                            {/* } */}
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}