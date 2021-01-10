import React, { Component } from 'react';
import NumberInput from "./NumberInput";
import {setBodyActions} from "../../utils/utils";

class SearchDrawer extends Component {

    state = {
        selectedFilterGroup: "destination",
        selectedCity: "",
        maxGuests: 0
    }

    componentDidMount() {
        const {searchObject} = this.props;
        const {city} = searchObject;

        this.setState({
            selectedCity: city
        })
    }

    onChangeSelectedFilterGroup = (selectedFilterGroup) => {
        this.setState({
            selectedFilterGroup
        })
    }

    onSearchClicked = () => {
        const {selectedCity, maxGuests} = this.state;
        const {onChangeDrawerActive, onSearch} = this.props;
        onChangeDrawerActive(false);
        setBodyActions();
        onSearch({city: selectedCity, maxGuests});
    }

    onChangeSelectedCity = (city) => {
        this.setState({
            selectedCity: city
        })
    }

    onChangeMaxGuests = (maxGuests) => {
        this.setState({
            maxGuests
        })
    }

    render() {
        const {onChangeSelectedFilterGroup, onSearchClicked, onChangeSelectedCity, onChangeMaxGuests} = this;
        const {selectedFilterGroup, selectedCity, maxGuests} = this.state;
        const {drawerActive, onChangeDrawerActive} = this.props;

        const activeClass = drawerActive ? "active" : "";
        let destinationSelectClass = selectedFilterGroup === "destination" ? "active" : "";
        let guestSelectClass = selectedFilterGroup === "guest" ? "active" : "";

        return (
            <div className={`search-drawer ${activeClass}`}>
            <div className="close-search-drawer" onClick={() => {
                onChangeDrawerActive(false)
                setBodyActions();
            }}>
                <span className="material-icons">
                    close
                </span>
            </div>

            <div className="container">

                <div className="search-drawer__top">
                        <div className="row">
                            <div className={`search-drawer-top__destination ${destinationSelectClass}`} onClick={() => onChangeSelectedFilterGroup("destination")}>
                                <h5>location</h5>
                                <p>{selectedCity}, Finland</p>
                            </div>
                            <div className={`search-drawer-top__guest ${guestSelectClass}`} onClick={() => onChangeSelectedFilterGroup("guest")}>
                                <h5>Guests</h5>
                                {maxGuests ? <p>{maxGuests} guests</p> : <p style={{color: "#BDBDBD"}}>Add guests</p>}
                            </div>
                            <div className="search-drawer-top__action">
                            <button className="btn btn-primary btn--icon" onClick={onSearchClicked}>
                                    <span className="material-icons">
                                        search
                                    </span>
                                    <p>Search</p>
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className='search-drawer__select'>
                <div className={`search-drawer__destination-select ${destinationSelectClass}`}>
                    <ul>
                        <li onClick={() => onChangeSelectedCity("Helsinki")}>
                            <span className="material-icons">
                                place
                            </span>
                            <p>Helsinki, Finland</p>
                        </li>
                        <li onClick={() => onChangeSelectedCity("Turku")}>
                            <span className="material-icons">
                                place
                            </span>
                            <p>Turku, Finland</p>
                        </li>
                        <li onClick={() => onChangeSelectedCity("Oulu")}>
                            <span className="material-icons">
                                place
                            </span>
                            <p>Oulu, Finland</p>
                        </li>
                        <li onClick={() => onChangeSelectedCity("Vaasa")}>
                            <span className="material-icons">
                                place
                            </span>
                            <p>Vaasa, Finland</p>
                        </li>
                    </ul>
                </div>

                <div className={`search-drawer__guest-select ${guestSelectClass}`}>
                    <div className="adult-guest search-drawer-guest__group">
                        <h5>Adults</h5>
                        <h6>Ages 13 or above</h6>
                        <NumberInput maxGuests={maxGuests} onChangeMaxGuests={onChangeMaxGuests}/>
                    </div>

                    <div className="child-guest search-drawer-guest__group">
                        <h5>Children</h5>
                        <h6>Ages 2-12</h6>
                        <NumberInput maxGuests={maxGuests} onChangeMaxGuests={onChangeMaxGuests}/>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchDrawer;
