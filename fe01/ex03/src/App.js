import styled from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalFonts from './fonts/Font';
import Menu from './Menu';
import Header from './Header';
import { Content1, Content2, Content3 } from './Contents';
import './stylesheet.scss';

const MainWrapper = styled.div`
	.menuContent {
		display: flex;
	}
	@media (max-width: 600px) {
		.menuContent {
			flex-direction: column;
			}
		}
	}
`;

const AppWrapper = styled.div`
	font-family: 'NanumGothic';
	box-sizing: bordor-dox;
	width: 80%;
`;

const Main = ({ children }) => {
	return (
		<MainWrapper>
			<div className="Template">
				<Header />
				<div className="menuContent">
					<div className="menu">
						<Menu />
					</div>
					<div className="contents">{children}</div>
				</div>
			</div>
		</MainWrapper>
	)
}

const App = () => {
  	return (
    	<AppWrapper>
			<GlobalFonts />
			<Main>
				<Route path="/" component={Content1} exact={true} />
				<Route path="/2" component={Content2} />
				<Route path="/3" component={Content3} />
			</Main>
		</AppWrapper>
  	);
}

export default App;
