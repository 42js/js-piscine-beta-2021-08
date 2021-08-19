import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Menu from './Menu';

const BodyBlock = styled.div`
	.menuContent {
		display: flex;
	}
	@media (max-width: 600px) {
		.menuContent {
			flex-direction: column;
			.menu {
				background: turquoise;
				a {
					display: inline;
					text-align: center;
					margin: 80px;
				}
			}
		}
	}
`;

const Body = ({ children }) => {
	return (
		<BodyBlock>
			<div className="Template">
				<Header />
				<div className="menuContent">
					<div className="menu">
						<Menu />
					</div>
					<div className="contents">{children}</div>
				</div>
			</div>
		</BodyBlock>
	)
}

export default Body;
