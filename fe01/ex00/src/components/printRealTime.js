import React, { Component } from 'react';

class PrintRealTime extends Component {
 
    state = { 
        input : ''
    };

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        }, ()=>{
            console.log(this.state.input);
        });
    }

    handleReset = (e) => {
        this.setState({
            input: ""
        })
    }
    render(){
        const {
            handleChange,
            handleReset
        } = this;
  
        return (
            <form>
                <input type="text" onKeyDown={handleChange} ></input>
                <input type="reset" onClick={handleReset} />
            </form>
        );
    }

}

export default PrintRealTime;