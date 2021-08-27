import MenuElement from './MenuElement';
import styled from 'styled-components';

const Navmenu = styled.nav`
    background : rgb(206, 222, 207);
    height : 800px;
    width : 200px;
    display : inline-block;
    float : left;
    @media (max-width : 500px) {
        width : 100%;
    }

`

const ListStyle = styled.ul`
    display : block;
    margin: 0;
    padding : 0;
`

function Menu({size}) {
   
    return (
        <Navmenu>
            <ListStyle>
                <MenuElement id="1" />
                <MenuElement id="2" />
            </ListStyle>
        </Navmenu>
    );
}

export default Menu;