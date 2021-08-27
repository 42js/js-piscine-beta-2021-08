
import './ControlButton.css';
import {useState} from 'react' 
function ControlButton() {

    const [count, setCount] = useState(0);

    function handleClickPlus(){
        setCount(count + 1);
    }
    function handleClickMinus(){
        setCount(count - 1);
    }
    
	function handleChange(e){
		let num = Number(e.target.value);
		if (!isNaN(num))
			setCount(Number(e.target.value));
		else
			setCount(0);
    }

    return (
        <div>
            <form>
                <h1 id="show-count"> Your score : {count}</h1>
                
                <div className="buttons">
                    <input id="input" type="text" onChange={handleChange}></input>
                    <input id="plus" type="button" value="+1" onClick={handleClickPlus}></input>
                    <input id="minus" type="button" value='-1' onClick={handleClickMinus}></input>
                </div>
      
            </form>
        </div>
    );
}

export default ControlButton;
