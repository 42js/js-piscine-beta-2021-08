import React from 'react';
import Header from './Header';
import Body from './Body';
class Nothing extends React.Component {
    render() {
        const { h1, body } = { h1:'Nothing', body:'나는 gilee이다' };
        return (
            <section className='page_body'>
            <Header h1={h1} />
            <Body body={body} />
            </section>
        );
    }
}
export default Nothing;