import React from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';

const ThirdContentBlock = styled.div`
	font-weight: bold;
`;

const ThirdContent = () => {
	const react = 'React';
	const JavaScript = 'JavaScript';
	const nodeJS = 'nodeJS';
	const Clang = 'C';

	return (
		<ThirdContentBlock>
			<div>
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
				2번째 메뉴 페이지입니다!!!!!!!!!!
			</div>
			<br />
			<div>
				<ProgressBar label={react} animated striped variant="success" now={70} />
				<ProgressBar label={JavaScript} animated striped variant="info" now={30} />
				<ProgressBar label={nodeJS} animated striped variant="warning" now={10} />
				<ProgressBar label={Clang} animated striped variant="danger" now={60} />
			</div>
			<br />
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</ThirdContentBlock>
	)
}

export default ThirdContent;
