import React from 'react';
import Header from './Header';
import Body from './Body';
class Home extends React.Component {
    render() {
        const { h1, body } = { h1:'gilee home', body:'나는 gilee이다' };
        return (
            <section className='page_body'>
            <Header h1={h1} />
            <Body body={body} />
            </section>
        );
    }
}
export default Home;