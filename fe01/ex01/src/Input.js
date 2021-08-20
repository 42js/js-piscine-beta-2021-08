import { Component } from "react";

class Input extends Component {
    render() {
        const { value, setState } = this.props;
        return (
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => {
                        setState(e.target.value);
                        console.log("hi");
                    }}
                ></input>
                <button
                    onClick={(e) => {
                        let plus = parseInt(value);
                        plus = String(plus + 1);
                        setState(plus);
                    }}
                >
                    +1
                </button>
                <button
                    onClick={(e) => {
                        let minus = parseInt(value);
                        minus = String(minus - 1);
                        setState(minus);
                    }}
                >
                    -1
                </button>
            </div>
        );
    }
}

export default Input;
