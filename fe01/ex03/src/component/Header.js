import React from 'react';
import Jumbotrom from 'react-bootstrap/Jumbotron';
class Header extends React.Component {
    render() {
        const h1 = this.props.h1;
        return (
            <Jumbotrom>
                <h1 className='header'>{h1}</h1>
            </Jumbotrom>
        );
    };
}
export default Header;