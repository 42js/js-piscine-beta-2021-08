import React from 'react';
import Header from './Header';
import Body from './Body';
class RealNothing extends React.Component {
    render() {
        const { h1, body } = { h1:'RealNothing', body:'취미는 똥싸기이다' };
        return (
            <section className='page_body'>
            <Header h1={h1} />
            <Body body={body} />
            </section>
        );
    }
}
export default RealNothing;