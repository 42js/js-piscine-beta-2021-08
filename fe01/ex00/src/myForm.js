import React from 'react';

// const myForm = ({ onChange, onClick, text }) => {
//     return (
//         <div>
//             <form>
//                 <label>Input : </label>
//                 <input value={text} onChange={onChange}/>
//             </form>
//             <form>
//                 <button onClick={onClick}>
//                     Click me
//                 </button>
//             </form>
//         </div>
//     );
// };

//const myForm = ({ onChange, onClick, text }) => {
function MyForm(props) 
{
    return (
        <div>
            <form>
                <label>Input : </label>
                <input value={props.text} onChange={props.onChange}/>
                {/* <p>{props.text}</p> */}
            </form>
            <form>
                <button onClick={props.onClick}>
                    Click me
                </button>
            </form>
        </div>
    );
};


export default MyForm;