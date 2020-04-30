import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderNav = styled.header`
    color: #fff;
    background: #000;
    padding: 10px 20px;

    ul {
        display: flex;
        justify-content: space-between;
    }

    a {
        padding: 10px 20px;
        color: #f7f8f9;
    }
    a:hover {
        background: #e6e6e6;
    }
`;

const Header = () => (
    <HeaderNav>
        <nav>
            <ul>
                <li>
                    <Link to="/contenidos">Playlist</Link>
                </li>
                <li>
                    <Link to="/contador">Generador de contadores</Link>
                </li>
            </ul>
        </nav>
    </HeaderNav>
);

export default Header;