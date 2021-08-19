import { Component } from "react";
import "./Input.css";

class Input extends Component {
    render() {
        const { value, onClick, onChange, onKeyPress } = this.props;
        return (
            <div className="Input" onChange={onChange} onKeyPress={onKeyPress}>
                <input
                    placeholder="할일을 입력하세요"
                    type="text"
                    value={value}
                    onChange={onChange}
                ></input>
                <input
                    className="inputBtn"
                    type="submit"
                    onClick={onClick}
                    value="ADD"
                ></input>
            </div>
        );
    }
}

export default Input;
