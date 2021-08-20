import "./App.css";
import Input from "./Input";
import InputClg from "./InputClg";
import { Component } from "react";

class App extends Component {
    state = {
        value1: "",
        value2: "",
    };
    handlelInputChange1 = (e) => {
        this.setState({
            value1: e.target.value,
        });
    };
    handlelInputChange2 = (e) => {
        this.setState({
            value2: e.target.value,
        });
    };
    handleInputClick = (e) => {
        e.preventDefault();
        console.log(e.target.previousSibling.value);
        this.setState({
            value1: "",
        });
    };
    handleInputChangeClg = (e) => {
        console.log(e.target.value);
    };
    render() {
        const { value1, value2 } = this.state;
        const { handlelInputChange1, handlelInputChange2, handleInputClick } =
            this;
        return (
            <div className="App">
                <Input
                    value={value1}
                    onChange={handlelInputChange1}
                    onClick={handleInputClick}
                />
                <InputClg
                    value={value2}
                    onChange={handlelInputChange2}
                    onChangeClg={this.handleInputChangeClg}
                />
            </div>
        );
    }
}

export default App;
