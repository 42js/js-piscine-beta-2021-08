import React, { useState } from 'react';
import axios from 'axios';

import { Container, Image } from 'react-bootstrap';

import IssueDetail from './IssueDetail';

const Issue = ({ crudIssue, title, body, user, number, comments_url }) => {

    const [ detail, setDetail ] = useState(false);
    const [ comment, setComment ] = useState(null);

    const showDetail = () => {
        
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
                    setComment(getData.data);
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
            <div>
                {
                    detail
                    ? <IssueDetail
                        crudIssue={crudIssue}
                        body={body}
                        user={user}
                        comment={comment}
                        number={number}
                        />
                    : ''
                }
            </div>
        </Container>
    )
};

export default Issue;