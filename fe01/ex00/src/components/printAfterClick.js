import React, { Component } from 'react';

class PrintAfterClick extends Component {
   
    state = { 
        input : '',
    };

    handleKeyDown = (e) => {
  
        if (e.key === 'Backspace' || e.key === 'Delete')
            this.setState({
                input: this.state.input.substring(0, this.state.input.length - 1)
            });
        else if (e.key.length === 1)
        {
            this.setState({
                 input : this.state.input + e.key
        });
        }
    };

    handleClick = (e) => {
        console.log(this.state.input);
        this.setState({
            input: ""
        });
    };

    handleReset = (e) => {
        this.setState({
            input: ""
        })
    }
    render(){
        const {
            handleKeyDown,
            handleClick,
            handleReset
        } = this;
  
        return (
            <form>
                <input type="text" onKeyDown={handleKeyDown} ></input>
                <input type="button" value="OK" onClick={handleClick}></input>
                <input type="reset" onClick={handleReset} />
            </form>
        );
    }

}

export default PrintAfterClick