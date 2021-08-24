import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
// UsersContext 에서 사용 할 기본 상태
const initialState = {
  issues: {
    loading: false,
    data: null,
    error: null
  }
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
  loading: false,
  data,
  error: null
});

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
  loading: false,
  data: null,
  error: error
});

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: loadingState
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        issues: success(action.data)
      };
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: error(action.error)
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>
        {children}
      </IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
}

export async function getIssues(dispatch, repo, page) {
    dispatch({ type: 'GET_ISSUES' });
    try {
      const headers = {Authorization: `Bearer ${process.env.REACT_APP_SECRET}`};
      console.log(process.env.SECRET);
      const response = await axios.get(
        `https://api.github.com/repos/${repo}/issues?per_page=20&page=${page}`
      ,{headers});
      dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_ISSUES_ERROR', error: e });
    }
  }
