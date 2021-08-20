import React from 'react';
import { Route } from 'react-router-dom';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import Body from './Body';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';
import './Custom.scss';

const AppBlock = styled.div`
	font-family: 'NanumGothic';
	box-sizing: border-box;
	width: 100%;
`;

const App = () => {
	return (
		<AppBlock>
			<GlobalFonts />
			<div>
				<Body>
					<Route path="/" component={FirstContent} exact />
					<Route path="/2" component={SecondContent} />
					<Route path="/3" component={ThirdContent} />
				</Body>
			</div>
		</AppBlock>
	);
}

export default App;
