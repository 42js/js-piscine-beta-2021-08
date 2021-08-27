import React, { Component } from 'react';

class PrintAfterClick extends Component {
   
    state = { 
        input : ''
    };

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        })
    }
    
    handleClick = (e) => {
        console.log(this.state.input);
    };

    handleReset = (e) => {
        this.setState({
            input: ""
        })
    }

    render(){
        const {
            handleClick,
            handleReset,
            handleChange
        } = this;
  
        return (
            <form>
                <input type="text" onChange={handleChange} ></input>
                <input type="button" value="OK" onClick={handleClick}></input>
                <input type="reset" onClick={handleReset} />          
            </form>
        );
    }

}

export default PrintAfterClick