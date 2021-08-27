
import dummy from "../db/data.json";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LinkStyle = styled(Link)`
    text-decoration: none;
    display : block;
    color : white;
    text-align : center;
    padding : 1rem;
    border-bottom-style : solid;
    border-color: white;
    border-width : thin;
    font-size : 1.5rem;
`

function MenuElement ({id}) {
    const title = dummy.posts[id].title;
    const path="/" + title;
    
    return (
        <LinkStyle to={path}>{title}</LinkStyle>
   );
}

export default MenuElement;