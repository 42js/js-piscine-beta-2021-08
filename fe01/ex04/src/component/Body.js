import React from 'react';

class Body extends React.Component {
    render() {
        const body = this.props.body;
        return (
            <section className='maincontent'>
                {body}
            </section>
        );
    }
}
export default Body;