import React from 'react';			// jsx 문법을 사용하기 위함	
import ReactDOM from 'react-dom';	// react앱을 최초 렌더링 하기 위함
import './index.css';				
import App from './App';			// app = react component 
import reportWebVitals from './reportWebVitals';	// 오프라인 또는 네트워크가 좋지 않는 상태에서도 온라인인 것처럼 리소스들을 보여주는 모듈

// punlic/indext.html 파일을 기준으로 id=root 태그를 찾아 app을 렌더링시킴.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
