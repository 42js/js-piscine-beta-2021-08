import { Component } from "react";

class Input extends Component {
    render() {
        const { onChange, value, onClick } = this.props;
        return (
            <form>
                <input type="text" value={value} onChange={onChange}></input>
                <button onClick={onClick}>입력</button>
            </form>
        );
    }
}

export default Input;
