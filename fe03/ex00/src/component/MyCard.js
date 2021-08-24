import React from 'react';
import Card from 'react-bootstrap/Card';

export default class MyCard extends React.Component {
    render() {
        const { title, user } = this.props;
        return(
            <Card>
                {title}<br/>{user.login}
            </Card>
        );
    }
}