import { Component } from "react";
class Calc extends Component {
    render() {
        let { value } = this.props;
        return <div>{value}</div>;
    }
}

export default Calc;
