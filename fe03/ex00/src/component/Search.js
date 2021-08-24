import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../css/inputarea.css';
export default class Search extends React.Component {
    state = {
        input:''
    }
    render() {
        const { clickHandle, changeHandle } = this.props;
        const { input } = this.state;
        return (
            <section calssName="inputarea">
            <InputGroup>
                <FormControl
                    placeholder="user(or organization)/reponame"
                    aria-describedby="basic-addon1"
                    value={input}
                    onChange={changeHandle}
                />
            <Button onClick={clickHandle}>Search</Button>
            </InputGroup>
            </section>
        );
    }
}