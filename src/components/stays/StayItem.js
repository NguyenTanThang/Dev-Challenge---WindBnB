import React, { Component } from 'react'

class StayItem extends Component {
    render() {
        const {stayItem} = this.props;
        const {type, superHost, title, beds, rating, photo} = stayItem;

        const superHostElement = superHost ? (
            <div className="stay-item-desc__super">
                super host
            </div>
        ) : (<></>)
        const bedsElement = beds ? (
            <div className="stay-item-desc__beds">
                <span>.</span>
                {beds} beds
            </div>
        ) : (<></>)

        return (
            <div className="stay-item">
                <div className="stay-item__image">
                    <img src={photo} alt={title} className="img-fluid"/>
                </div>
                <div className="stay-item__desc">
                    {superHostElement}
                    <div className="stay-item-desc__type">
                        <div className="row">
                            {type}
                            {bedsElement}
                        </div>
                    </div>
                    <div className="stay-item-desc__rating">
                        <div className="row">
                            <span className="material-icons">
                                star
                            </span>
                            <p>{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="stay-item__title">
                    <h4>{title}</h4>
                </div>
            </div>
        )
    }
}

export default StayItem;
