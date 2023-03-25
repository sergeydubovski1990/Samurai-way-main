import React from 'react';
import  s  from './Header.module.css';


const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img  src="https://ballymaguirefoods.ie/wp-content/uploads/2018/02/BallyFoods.logo_.png" alt=""/>
            </header>
        </div>
    );
};

export default Header;