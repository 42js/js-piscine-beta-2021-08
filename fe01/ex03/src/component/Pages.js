import React from 'react';

import { Alert } from 'react-bootstrap';

export const Home = () => {
  return (
    <p>메인 페이지 입니다.</p>
  )
}

export const Content1 = () => {
  return (
    <p>안녕하세요</p>
  );
}

export const Content2 = () => {
  return (
    <p>fe01/ex03</p>
  );
}

export const Content3 = () => {
  return (
    <Alert variant='primary'>
      과제 입니다.
    </Alert>
  );
}