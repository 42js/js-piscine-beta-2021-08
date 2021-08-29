import React, { useState } from 'react';
import axios from 'axios';

import { Container, Image, Form, Button } from 'react-bootstrap';

import IssueDetail from './IssueDetail';

const Issue = ({ crudIssue, title, body, user, number, comments_url, repository_url, checkAssign }) => {

    const [ detail, setDetail ] = useState(false);
    const [ comment, setComment ] = useState(null);
    const [ writeComment, setWrite ] = useState('');
    const [ assignees, setAssignees ] = useState(null);

    const saveComment = (e) => {
        setWrite(e.target.value);
    }

    const commentUpdateDelete = (e, id) => {
        e.preventDefault();

        const fetchComment = async () => {
            try {
                if (e.target.innerText === 'Submit comment') {
                    await axios.post(`${comments_url}`, { "body": writeComment }, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                } else if (e.target.innerText === '수정') {
                    await axios.patch(`${repository_url}/issues/comments/${id}`, { "body": writeComment }, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                } else if (e.target.innerText === '삭제') {
                    await axios.delete(`${repository_url}/issues/comments/${id}`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchComment();
    }

    const showDetail = (e) => {
        e.preventDefault();
        
        if (detail === false) {
            setDetail(true);
            const fetchDetail = async () => {
                try {
                    setComment(null);
    
                    const getData = await axios.get(`${comments_url}`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                    const getAssignees = await axios.get(`${repository_url}/assignees`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    })
                    setComment(getData.data);
                    setAssignees(getAssignees.data);
                } catch (e) {
                    console.log(e);
                }
            };
            fetchDetail();
        }
        else if (detail === true) {
            setDetail(false);
        }
    }

    return (
        <Container>
            <div>{number} {title} <Image onClick={showDetail} style={{width: '15px', height: '15px'}} src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Arrows-Down-icon.png"/></div>
                {
                    detail
                    ? <div>
                        <IssueDetail
                            crudIssue={crudIssue}
                            body={body}
                            user={user}
                            comment={comment}
                            number={number}
                            commentUpdateDelete={commentUpdateDelete}
                            repository_url={repository_url}
                            assignees={assignees}
                            checkAssign={checkAssign}
                        />
                         <Form className="mt-5 mb-5">
                            <Form.Group className="mb-3">
                                <Form.Control onChange={saveComment} as="textarea" rows={3} placeholder="Write a comment" />
                            </Form.Group>
                            <Button onClick={commentUpdateDelete} variant="success">Submit comment</Button>
                        </Form>
                    </div>
                        
                    : ''
                }
        </Container>
    )
};

export default Issue;