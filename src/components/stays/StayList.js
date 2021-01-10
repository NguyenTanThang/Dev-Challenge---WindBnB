import React, { Component } from 'react';
import StayItem from "./StayItem";

class StayList extends Component {

    renderStayItems = () => {
        const {stayList} = this.props;
         
        return stayList.map(stayItem => {
            return <StayItem stayItem={stayItem} key={stayItem.title}/>
        })
    }

    render() {
        const {renderStayItems} = this;
        const {stayList} = this.props;

        return (
            <div className="stay-list-container">
                <div className="container">
                    <div className="stay-list__title">
                        <h2>Stays in Finland</h2>
                        <p>{stayList.length} stays</p>
                    </div>

                    <div className="row stay-list__row">
                        {renderStayItems()}
                    </div>
                </div>
            </div>
        )
    }
}

export default StayList;
