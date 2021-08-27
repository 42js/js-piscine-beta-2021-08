import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivStyle = styled.div`
    background : rgb(219, 216, 203);
    padding-left : 220px;
    height : 800px;
`
const TitleStyle = styled.h1`
    text-align : center;
    padding : 2rem;
    margin : 0;
`

const LinkStyle = styled(Link)`
    text-decoration: none; 
    color : red;;

    padding : 1rem;
`
const ButtonStyle = styled.div`
    display : flex;
    justify-content : center;
`

function EmptyPage(){
    return (
        <DivStyle>
            <TitleStyle>잘못된 경로입니다</TitleStyle>
            <ButtonStyle>
                <LinkStyle to="/">돌아가기</LinkStyle>
            </ButtonStyle>
            
        </DivStyle>
    );
}

export default EmptyPage;