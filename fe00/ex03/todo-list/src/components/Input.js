import React from 'react';
import './Input.css';

// input과 button이 담겨있는 component
// 4가지의 props를 받아온다.
// 1. value: input의 내용
// 2. onCreate: 버튼이 클릭될 때 실행될 함수
// 3. onChange: input내용이 변경될떄 실행되는 함수
// 4. onKeyPress: input에서 key를 입력할 때 실행되는 함수 (enter == onCreate 처리 위함)
const Input = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="input">
      <input
        className="input-box"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <div className="create-button" onClick={onCreate}>
        ADD
      </div>
    </div>
  );
};

export default Input;
