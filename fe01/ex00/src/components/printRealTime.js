import React, { Component } from 'react';

class PrintRealTime extends Component {
   
    state = { 
        input : '',
    };

    handleKeyDown = (e) => {
  
        if (e.key === 'Backspace' || e.key === 'Delete')
            this.setState({
                input: this.state.input.substring(0, this.state.input.length - 1)
            },
                ()=>{console.log(this.state.input);});
        else if (e.key.length === 1)
        {
            this.setState({
                 input : this.state.input + e.key
        },
            ()=>{console.log(this.state.input)});
        }
    };

    handleReset = (e) => {
        this.setState({
            input: ""
        })
    }
    render(){
        const {
            handleKeyDown,
            handleReset
        } = this;
  
        return (
            <form>
                <input type="text" onKeyDown={handleKeyDown} ></input>
                <input type="reset" onClick={handleReset} />
            </form>
        );
    }

}

export default PrintRealTime;