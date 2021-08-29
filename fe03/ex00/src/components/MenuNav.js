
import React, {useState, useEffect, useMemo, useCallback } from 'react';
import './MenuNav.css';

function MenuNav() {


    return (
        <nav className="menublock">
            <input type="button" value="create"></input>
            <input type="button" value="list"></input>
            <input type="button" value="update"></input>
        </nav>
    );
}

export default MenuNav;