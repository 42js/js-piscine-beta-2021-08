import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Repo = (({ handleRepoClick, repo_name, repo_owner, owner_avatar }) => {

    const out = {backgroundColor: '#ffffff'}
    const over = {backgroundColor: '#febeb5'}
    const [ color, setColor ] = useState(false);

    const mouseOver = () => {
        setColor(true);
    }

    const mouseOut = () => {
        setColor(false);
    }

    return (
        <div style={{
            borderTop: '1px solid #f1f3f5',
            paddingTop: '5px',
            marginBottom: '5px',
        }}>
            <Row style={ color === false ? out : over } onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={(e) => {handleRepoClick(e, repo_owner, repo_name)}}>
                <Col sm={2}><Image style={{width: "40px", height: "40px"}} className src={owner_avatar} rounded /></Col>
                <Col sm={7} style={{textAlign: 'center', paddingTop: '8px'}}>{repo_name}</Col>
                <Col sm={3} style={{textAlign: 'center', paddingTop: '8px', color:'red'}}>{repo_owner}</Col>
            </Row>
        </div>
    )
});

export default Repo;