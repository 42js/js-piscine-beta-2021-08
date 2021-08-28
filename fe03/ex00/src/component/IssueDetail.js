import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';

const IssueDetail = ({ crudIssue, body, user, comment, number }) => {


    return (
        <Container>
            {
                body != null
                ? <Row style={{marginTop: '10px'}}>
                    <Col style={{color: 'blue'}} sm={1}>Body</Col>
                    <Col style={{textAlign: 'center'}} sm={6}>{body}</Col>
                    <Col style={{color: 'red'}} sm={3}>{user}</Col>
                    {
                            process.env.REACT_APP_REQUEST_USER === user
                            ? <Col sm={2}>
                                <Button onClick={(e) => {crudIssue(e, number)}} style={{marginRight: '3px'}} variant="secondary" size="sm">수정</Button>
                                <Button onClick={(e) => {crudIssue(e, number)}} variant="secondary" size="sm">삭제</Button>
                                </Col>
                            : <Col sm={2}></Col>
                    }
                </Row>
                : <Row><Col style={{color: 'red', marginTop: '10px'}}>No description provided.</Col></Row>
            }
            {
                comment
                ? comment.map(
                    ({ body, user }) => (
                        <Row style={{marginTop: '10px'}}>
                            <Col style={{color: 'skyblue'}} sm={1}>Comment</Col>
                            <Col style={{textAlign: 'center'}} sm={6}>{body}</Col>
                            <Col style={{color: 'red'}} sm={3}>{user.login}</Col>
                            {
                            process.env.REACT_APP_REQUEST_USER === user.login
                            ? <Col sm={2}>
                                <Button style={{marginRight: '3px'}} variant="secondary" size="sm">수정</Button>
                                <Button variant="secondary" size="sm">삭제</Button>
                                </Col>
                            : <Col sm={2}></Col>
                    }
                        </Row>
                    )
                )
                : <Row><Col style={{color: 'red', marginTop: '10px'}}>Leave a Comment</Col></Row>
            }
        </Container>
    )
};

export default IssueDetail