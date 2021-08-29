import React from 'react'

import axios from 'axios';

import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

const IssueDetail = ({ crudIssue, body, user, comment, number, commentUpdateDelete, repository_url, assignees, checkAssign}) => {
    
    const changeAssign = (e, state, assignee) => {
        e.preventDefault();

        const fetchAssign = async () => {
            try {
                if (state === 'create') {
                    await axios.post(`${repository_url}/issues/${number}/assignees`, { "assignees": [assignee]}, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                } else if (state === 'delete') {
                    await axios.delete(`${repository_url}/issues/${number}/assignees`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        },
                        data: {
                            "assignees": [assignee],
                        }
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchAssign();
    }

    return (
        <Container>
            {
                checkAssign === null
                ? <Row>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            담당자 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                assignees
                                ? assignees.map(
                                    ({ login }) => (
                                        <Dropdown.Item onClick={(e) => {changeAssign(e, 'create', login)}}>{login}</Dropdown.Item>
                                    )
                                )
                                : <Dropdown.Item>None</Dropdown.Item>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                : <Row>
                    <Col>담당자 : {checkAssign.login}</Col>
                    <Col><Button onClick={(e) => {changeAssign(e, 'delete', checkAssign.login)}}>담당자 삭제</Button></Col>
                </Row>
            }
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
                    ({ body, user, id }) => (
                        <Row style={{marginTop: '10px'}}>
                            <Col style={{color: 'skyblue'}} sm={1}>Comment</Col>
                            <Col style={{textAlign: 'center'}} sm={6}>{body}</Col>
                            <Col style={{color: 'red'}} sm={3}>{user.login}</Col>
                            {
                            process.env.REACT_APP_REQUEST_USER === user.login
                            ? <Col sm={2}>
                                <Button onClick={(e) => {commentUpdateDelete(e, id)}} style={{marginRight: '3px'}} variant="secondary" size="sm">수정</Button>
                                <Button onClick={(e) => {commentUpdateDelete(e, id)}} variant="secondary" size="sm">삭제</Button>
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