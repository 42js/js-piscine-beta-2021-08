import { useState } from "react";

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        setText(e.target.value);
    }
    const onPrint = (e) => {
        setText(text);
        console.log();
    }

    return (
        <div>
            <form>
                <input value={this.state.value} onChange={this.onChange}/>
            </form>
            <form>
                <button onClick={onPrint}>click button</button>
            </form>
            {/* <div>
                <b>value : </b>
                {text}
            </div> */}
        </div>
    )
}

export default InputSample;