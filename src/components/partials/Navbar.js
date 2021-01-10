import React, { Component } from 'react';
import logo from "../../img/logo.svg";
import {setBodyActions} from "../../utils/utils";

class Navbar extends Component {
    render() {
        const {onChangeDrawerActive, searchObject} = this.props;const {city, maxGuests} = searchObject;

        return (
            <div className='navbar'>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="navbar__logo">
                                <img src={logo} alt={"Logo"}/>
                            </div>

                            <div className="navbar__search" onClick={() => {
                                onChangeDrawerActive(true)
                                setBodyActions()
                            }}>
                                <div className="row">
                                    <div className="navbar-search__destination">
                                        <p>{city}, Finland</p>
                                    </div>
                                    <div className="navbar-search__guests">
                                        {maxGuests ? <p>{maxGuests} guests</p> : <p style={{color: "#BDBDBD"}}>Add guests</p>}
                                    </div>
                                    <div className="navbar-search__icon">
                                        <span className="material-icons">
                                            search
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
