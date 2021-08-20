import { Component } from "react";

class InputClg extends Component {
    render() {
        const { onChange, onChangeClg, value } = this.props;
        return (
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        onChange(e);
                        onChangeClg(e);
                    }}
                ></input>
            </form>
        );
    }
}

export default InputClg;
