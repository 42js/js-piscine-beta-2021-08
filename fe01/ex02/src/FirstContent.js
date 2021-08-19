import React from 'react';
import styled from 'styled-components';

const FirstContentBlock = styled.div`
	font-weight: bold;
`;

const FirstContent = () => {
	return (
		<FirstContentBlock>
			<div>
				배민 가고 싶은 kunlee 입니다.
				소개할 내용이 딱히 없어서 글자수 채우기 하겠습니다.
				Lorem Ipsum is simply dummy text of the printing and
				typesetting industry. Lorem Ipsum has been the industry's
				standard dummy text ever since the 1500s, when an unknown
				printer took a galley of type and scrambled it to make a type

				specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially

				unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more
				recently with desktop publishing software like Aldus PageMaker
				including versions of Lorem Ipsum.
			</div>
		</FirstContentBlock>
	)
}

export default FirstContent;
