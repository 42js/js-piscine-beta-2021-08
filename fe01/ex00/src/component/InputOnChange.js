
import React from 'react'

class InputOnChange extends React.Component {
    state = {
        input: ''
    }

    handleChange = (e) =>{
        this.setState({
        input: e.target.value
        });
        console.log(this.state.input)
    }
    render() {
        const { input } = this.state;
        const { handleChange } = this;
        return(
            <section className="InputForm">
            <form>
                <input value={input} onChange={handleChange}/>
            </form>
            </section>
        );
    }
}
export default InputOnChange;