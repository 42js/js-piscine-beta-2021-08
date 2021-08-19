import { Component } from "react";
import "./Input.css";

class Input extends Component {
    render() {
        return (
            <div className="Input">
                <input value="입력"></input>
                <button>ADD</button>
            </div>
        );
    }
}

export default Input;
