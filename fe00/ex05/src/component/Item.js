import React from 'react'
import '../css/Item.css'
class Item extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }
    render() {
        const { time, text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
        return (
            <section className="Item" onClick={() => onToggle(id)}>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
                <section className={`todo-text ${checked && 'checked'}`}>
                    <section>
                        {text}
                    </section>

                </section>
                    <section>
                        {
                            checked && (
                            <div className="time-text">
                                {time}
                            </div>)
                        }
                    </section>
                <section className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</section>
            </section>
        );
    }
}
export default Item;