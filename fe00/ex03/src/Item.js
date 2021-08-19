import { Component } from "react";
import "./Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {}
    render() {
        const { todo, idx, checked } = this.props;
        return (
            <section
                dataId={idx}
                checked={checked}
                onMouseOver={(e) => {
                    e.currentTarget.children[1].hidden = false;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.children[1].hidden = true;
                }}
            >
                <div>{todo}</div>
                <button className="todoBtn" hidden>
                    DEL
                </button>
            </section>
        );
    }
}

export default Item;
