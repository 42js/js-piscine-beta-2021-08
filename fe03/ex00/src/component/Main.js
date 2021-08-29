import React, { useState } from 'react';
import axios from 'axios';

import { InputGroup, FormControl, Container, Button, Row, Col, Form } from 'react-bootstrap';

import RepoList from './RepoList';
import IssueList from './IssueList';

const Main = () => {

    const [ input, setInput ] = useState('');
    const [ repo, setRepo ] = useState(null);
    const [ issue, setIssue ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ state, setState ] = useState(false);
    const [ issueTitle, setTitle] = useState('');
    const [ issueBody, setBody ] = useState('');
    const [ name, setName ] = useState('');
    const [ owner, setOwner ] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const titleChange = (e) => {
        setTitle(e.target.value);
    }

    const bodyChange = (e) => {
        setBody(e.target.value);
    }

    const handleClick = (e) => {

        e.preventDefault();
        
        if (input.length > 0) {
            setState(false);
            const fetchInput = async () => {
                try {
                    setError(null);
                    setRepo(null);
                    setLoading(true);
        
                    const getData = await axios.get(`https://api.github.com/search/repositories?q=${input}`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                    setRepo(getData.data);
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            };
            fetchInput();
        }
    }

    const handleRepoClick = (e, repo_owner, repo_name) => {

        e.preventDefault();

        if (state === false) {
            setName(repo_name);
            setOwner(repo_owner);
            setState(true);

            const fetchIssue = async () => {
                try {
                    setError(null);
                    setIssue(null);
                    setLoading(true);
    
                    const getData = await axios.get(`https://api.github.com/repos/${repo_owner}/${repo_name}/issues`, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                    setIssue(getData.data);
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            };
            fetchIssue();
        }
    }

    const postData = (e, number) => {
        e.preventDefault();

        const body = e.target.innerText === '수정'
        ? {
            "title": issueTitle,
            "body": issueBody
        }
        : {
            "state": "closed",
        }

        const fetchIssue = async () => {
            try {
                if (e.target.innerText === 'Submit new issue') {
                    await axios.post(`https://api.github.com/repos/${owner}/${name}/issues`, {
                        "title": issueTitle,
                        "body": issueBody
                    }, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                } else {
                    await axios.patch(`https://api.github.com/repos/${owner}/${name}/issues/${number}`, body, {
                        headers: {
                            "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        }
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchIssue();
    };

    const goBack = (e) => {
        e.preventDefault();
        setState(false);
    }

    if (error) return <div>Error : {error}</div>
    return (
        <Container>
            <form className="mt-5">
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="검색어를 입력해 주세요."
                        onChange={handleChange}
                    />
                    <Button
                        variant="success"
                        alignRight
                        onClick={handleClick}>
                            Search
                    </Button>
                </InputGroup>
            </form>
            <div>
                <Row>
                    {
                        state === false
                        ?  repo
                            ? <Col><p>Total Repositories : {repo.total_count}</p></Col>
                            : <Col><p>Total Repositories : 0</p></Col>
                        :  issue
                            ? <Col><p>Total Issues : {issue.length}</p></Col>
                            : <Col><p>Total Issues : 0</p></Col>
                    }
                    {
                        state === true
                        ? <Col><Button
                                onClick={goBack}
                                variant="success"
                                alignRight>
                                    뒤로가기
                                </Button>
                        </Col>
                        : ''
                    }
                </Row>
                <Row>
                    {
                        state === true
                        ? <Form className="mt-5 mb-5">
                            <Form.Group className="mb-3">
                                <Form.Control onChange={titleChange} placeholder="Title" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control onChange={bodyChange} as="textarea" rows={3} placeholder="Write a issue" />
                            </Form.Group>
                            <Button variant="success" onClick={postData}>Submit new issue</Button>
                      </Form>
                        : ''
                    }
                </Row>
            </div>
            <div>
                {
                    state === false
                    ? (loading
                        ? <p>로딩중...</p>
                        : (repo
                            ? <RepoList handleRepoClick={handleRepoClick} list={repo}/>
                            : ''
                        )
                    )
                    : (loading
                        ? <p>로딩중...</p>
                        : (issue.length
                            ? <IssueList crudIssue={postData} list={issue}/>
                            : <p style={{color: 'red'}}>Issue is Empty</p>
                        )
                    )
                }
            </div>
        </Container>
    )

};

export default Main;