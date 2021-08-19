import React from 'react' 
import '../css/Input.css'
class Input extends React.Component{
    render(){
        const {value, onChange, onCreate, onKeyPress} = this.props;
        return(
            <section className="input">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                <div className="create-button" onClick={onCreate}>
                    추가
                </div>
            </section>
        );
    }
}
export default Input;