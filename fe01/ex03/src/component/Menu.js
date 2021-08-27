import React from 'react';

import { Nav, Button } from 'react-bootstrap';

const Menu = () => {

  return (
    <Nav>
      <Nav.Item>
      <Nav.Link href="/"><h2>Go Home</h2></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/1"><Button variant="primary">Content1</Button></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/2"><Button variant="success">Content2</Button></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/3"><Button variant="danger">Content3</Button></Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Menu