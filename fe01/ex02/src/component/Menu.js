import React from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem';

class Menu extends React.Component {
    menu = [
        { name: "Home", path: "/" },
        { name: "아무것도없음", path: "/nothing" },
        { name: "진짜 아무것도 없음", path: "/realnothing" }
    ];
    render() {
        const menu = this.menu;
        return (
            <section className='menu'>
                {menu.map((menu, index) => {
                    return (
                        <Link to={menu.path} key={index}>
                        <SidebarItem
                        menu={menu}
                        />
                        </Link>
                    );
                })}
            </section>
        );
    }
}
export default Menu;