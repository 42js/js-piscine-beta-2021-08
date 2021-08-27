import dummy from "../db/data.json";
import styled from 'styled-components';

const DivStyle = styled.div`
    background : rgb(219, 216, 203);
    padding-left : 220px;
height : 800px;
`
const TitleStyle = styled.h1`
    text-align : center;
    text-decoration : underline;
    padding-top : 2rem;
    margin : 0;
`

const ContentStyle = styled.p`
    text-align : justify;
    padding : 2rem;
`
function MainContent({id}) {

    const {title, content} = dummy.posts[id];
 
    return (
        <DivStyle>
            <TitleStyle>{title}</TitleStyle>
            <ContentStyle>{content}</ContentStyle>
        </DivStyle>
    );
}

export default MainContent;