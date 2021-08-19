import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    render() {
        const { value, onChange, onCreate, onKeyPress } = this.props;
        return (
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <div className="create-button" onClick={onCreate}>
                    ADD
                </div>
            </div>
        );
    };
}

export default Input;