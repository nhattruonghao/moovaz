import React from 'react'

function Header() {

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/login';
    }
    return (
        <div className="header">
            <div className="container">
                <div className="header__left">
                    <div className="header__left__icon-mobile">
                        <img src="/asset/img/menu.png" alt="" />
                    </div>
                <div className="header__left__wrap">
                    <div className="header__left__wrap__item">
                        <span>My To-Dos</span>
                    </div>
                    <div className="header__left__wrap__item">
                        <span>Find A Service</span>
                    </div>
                    <div className="header__left__wrap__item">
                        <span>Community</span>
                    </div>
                    <div className="header__left__wrap__item">
                        <img src='/asset/img/search.svg' alt="" />
                    </div>
                </div>
            </div>
            <div className="header__center">
                <img src="/asset/img/logocenter.png" alt="" />
            </div>
            <div className="header__right">
                <div className="header__right__wrap">
                    <div className="header__right__wrap__item">
                        <img src="/asset/img/folde.svg" alt="" />
                    </div>
                    <div className="header__right__wrap__item">
                        <img src="/asset/img/inbox.svg" alt="" />
                    </div>
                    <div className="header__right__wrap__item-avatar">
                        <img src="/asset/img/unnamed.png" alt="" />
                        <div className="header__right__wrap__item-avatar__menu">
                            <ul className='header__right__wrap__item-avatar__menu__list'>
                                <li className="header__right__wrap__item-avatar__menu__item">
                                    Account
                                </li>
                                <li className="header__right__wrap__item-avatar__menu__item">
                                    Setting
                                </li>
                                <li className="header__right__wrap__item-avatar__menu__item" onClick={logOut}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
