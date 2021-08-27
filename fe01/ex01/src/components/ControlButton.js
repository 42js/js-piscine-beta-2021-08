
import './ControlButton.css';
import {useState} from 'react' 
function ControlButton() {

    const [count, setCount] = useState(0);

    function clickPlus(){
        setCount(count + 1);
    }
    function clickMinus(){
        setCount(count - 1);
    }

    return (
        <div>
            <form>
                <h1 id="show-count"> Your count : {count}</h1>
                <div className="buttons">
                     <input id="plus" type="button" value="+1" onClick={clickPlus}></input>
                     <input id="minus" type="button" value='-1' onClick={clickMinus}></input>
                </div>
      
            </form>
        </div>
    );
}

export default ControlButton;