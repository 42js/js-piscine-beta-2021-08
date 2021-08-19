import React from 'react'
import '../css/Item.css'
class Item extends React.Component {
    render() {
        const { time, text, checked, id, onToggle, onRemove } = this.props;
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