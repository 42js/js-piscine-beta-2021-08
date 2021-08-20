import React from 'react';
import Header from './Header';
import Body from './Body';
import Container from '@material-ui/core/Container';
class Home extends React.Component {
    render() {
        const { h1, body } = { h1:'gilee home', body:'나는 gilee이다' };
        return (
            <section className='page_body'>
            <Container>
            <Header h1={h1} />
            <Body body={body} />
            </Container>
            </section>
        );
    }
}
export default Home;