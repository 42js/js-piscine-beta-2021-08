import React from 'react';
import Item from './Item';
class List extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <ul>
                { user && 
                user.map((userdata) => {
                    return (
                        <Item key={userdata.id}{...userdata}/>
                    );
                }) }
            </ul>
        );
    }
}
export default List;