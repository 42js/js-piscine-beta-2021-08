import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    background: beige;
`;

export const Content1 = () => {
    return(
        <ContentWrapper>
            <div>
                안녕하세요 ! 42Seoul 4기 hyeojung입니다 :)
            </div>
        </ContentWrapper>
    );
}

export const Content2 = () => {
    return(
        <ContentWrapper>
            <div>
                리액트 아예 처음인데 다른 코드들 참고하고 구글링하면서 열심히 하고 있어요 ...
                살려줘 ...
            </div>
        </ContentWrapper>
    );
}

export const Content3 = () => {
    return(
        <ContentWrapper>
            <div>
                뭐라고 써야 할지 모르겠어서 아무말을 씁니다 ,,,
                웹은 정말 쉽지 않네요 흑흑
            </div>
        </ContentWrapper>
    );
}