import { Accordion } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const SecondContentBlock = styled.div`
	font-weight: bold;
`;

const SecondContent = () => {
	return (
		<SecondContentBlock>
			<div>
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
				1번째 메뉴 페이지입니다!!!!!!!!!!
			</div>
			<br/>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Accordion 이라는 컴포넌트입니다.</Accordion.Header>
					<Accordion.Body>
						화살표를 누르면 이러케 접었다 폈다 할 수 있어요!
					</Accordion.Body>
				</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>두 번째 항목입니다.</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</SecondContentBlock>
	)
}

export default SecondContent;
