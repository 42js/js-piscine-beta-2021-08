import React from 'react';
import Container from 'react-bootstrap/Container';
class Body extends React.Component {
    render() {
        const body = this.props.body;
        return (
            <section className='maincontent'>
                <Container className="p-3">
                    {body}
                </Container>
            </section>
        );
    }
}
export default Body;