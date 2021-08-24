import React, { useState } from 'react';
import { useIssuesState, useIssuesDispatch, getIssues } from '../Contexts';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../css/inputarea.css'

function Issues(props) {
  const [userId, setUserId] = useState(props.page);
  const [page, setPage] = useState(0);
  const [input, setInput] = useState('');
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issues, loading, error } = state.issues;
  const fetchData = () => {
    setPage(page+1);
    getIssues(dispatch, input, page);
  };

  //if (loading) return <div>로딩중..</div>;
  if (error) return <>
                      <div className="a">
                        <FormControl 
                            onChange={(e)=>{setInput(e.target.value)}}
                            value={input}
                        />
                        <Button variant="danger" onClick={fetchData}>검색</Button>
                      </div>
                      <Alert className="b" variant="danger">에러가 발생했습니다</Alert>
                    </>
  if (!issues) return <div className="a">
                        <FormControl 
                            onChange={(e)=>{setInput(e.target.value)}}
                            value={input}
                        />
                        <Button variant="info" onClick={fetchData}>검색</Button>
                      </div>
  return (
    <>
        <div className="a">
                        <FormControl 
                            onChange={(e)=>{setInput(e.target.value)}}
                            value={input}
                        />
                        <Button variant="info" onClick={fetchData}>검색</Button>
                      </div>
          <InfiniteScroll
            dataLength={issues.length}
            next={fetchData}
            hasMore={true}
          >
        {issues.map(issue => (
          <Card
            key={issue.id}
            onClick={() => setUserId(issue.id)}
            style={{ cursor: 'pointer' }}
          >
            {issue.title} ({issue.user.login})
          </Card>
        ))}
        </InfiniteScroll>
    </>
  );
}

export default Issues;