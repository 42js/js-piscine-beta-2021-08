import React from 'react'

class InputOnClick extends React.Component {
    state = {
        input: ''
    }

    handleChange = (e) =>{
        this.setState({
        input: e.target.value
        });
    }

    handleSubmit = (e) =>{
        console.log(this.state.input);
        this.setState({
            input: ''
            });
        e.preventDefault();
    }
    render() {
        const { input } = this.state;
        const { handleChange, handleSubmit} = this;
        return(
            <section className="InputForm">
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleChange}/>
                <button>
                   click
                </button>
            </form>
            </section>
        );
    }
}
export default InputOnClick;