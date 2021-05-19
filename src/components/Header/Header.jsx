import React from 'react';
import s from './Header.module.css'

const Header = (props) => {
    return (
            <header className={s.header}>
                <h2 class={s.HeaderMyName}>Dimma Melnychuk</h2>
            </header>
    );
}

export default Header;