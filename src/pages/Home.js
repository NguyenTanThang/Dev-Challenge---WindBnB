import React, { Component } from 'react';
import stayList from "../data/stays";
import {sortStayList} from "../utils/utils";

import SearchDrawer from "../components/partials/SearchDrawer";
import Navbar from "../components/partials/Navbar";
import StayList from "../components/stays/StayList";

class Home extends Component {

    state = {
        searchObject: {
            city: "Helsinki"
        },
        drawerActive: false,
    }

    onSearch = (searchObject) => {
        this.setState({
            searchObject
        })
    }

    onChangeDrawerActive = (drawerActive) => {
        this.setState({
            drawerActive
        })
    }

    render() {
        const {onChangeDrawerActive, onSearch} = this;
        const {searchObject, drawerActive} = this.state;
        let listOfStays = stayList;

        listOfStays = sortStayList(searchObject, listOfStays)

        return (
            <div>
                <Navbar onChangeDrawerActive={onChangeDrawerActive} searchObject={searchObject}/>
                <SearchDrawer drawerActive={drawerActive} onChangeDrawerActive={onChangeDrawerActive} searchObject={searchObject} onSearch={onSearch}/>
                <StayList stayList={listOfStays}/>
            </div>
        )
    }
}

export default Home;
