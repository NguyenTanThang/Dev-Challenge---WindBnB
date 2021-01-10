import React, { Component } from 'react'

export default class NumberInput extends Component {

    state = {
        number: 0
    }

    onIncrease = () => {
        const {number} = this.state;
        const {maxGuests, onChangeMaxGuests} = this.props;
        onChangeMaxGuests(maxGuests + 1);
        this.setState({
            number: number + 1
        })
    }

    onDecrease = () => {
        const {number} = this.state;
        const {maxGuests, onChangeMaxGuests} = this.props;
        if (number >= 1) {
            if (maxGuests >= 1) {
                onChangeMaxGuests(maxGuests - 1);
            }
            this.setState({
                number: number - 1
            })
        }
        
    }

    render() {
        const {onIncrease, onDecrease} = this;
        const {number} = this.state;

        return (
            <div className="number-input">
                <ul>
                    <li className="number-input__decrease" onClick={onDecrease}>
                        -
                    </li>
                    <li className="number-input__number">
                        {number}
                    </li>
                    <li className="number-input__increase" onClick={onIncrease}>
                        +
                    </li>
                </ul>
            </div>
        )
    }
}
