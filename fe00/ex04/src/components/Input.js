import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
    render(){
        const {value, onChange, onCreate, onKeyPress} = this.props;
        return (
            <div className='todo-input'>
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <button className='create-button' onClick={onCreate}>
                    ADD
                </button>
            </div>
        );
    }
}

export default Input;