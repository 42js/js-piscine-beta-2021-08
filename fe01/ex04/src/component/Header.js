import React from 'react';

class Header extends React.Component {
    render() {
        const h1 = this.props.h1;
        return (
            <h1 className='header'>{h1}</h1>
        );
    };
}
export default Header;