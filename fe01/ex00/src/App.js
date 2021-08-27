import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        value: ""
    }
    
    appChange = (e) => {
        console.log(e.type + ":", e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    appClick = () => {
        console.log(`입력 값: ${this.state.value}`);
    }

    render() {
        const { value } = this.state;
        const { appClick, appChange } = this;
        return (
            <form>
            <div className="App">
                <input type="text" placeholder="입력하세요" value={value} onChange={appChange}/>
                <button type="button" onClick={appClick}> 출력 </button>
            </div>
            </form>
            
        );
    }
}

export default App;