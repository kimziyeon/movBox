"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../style/header.scss';
import { loginStore } from '../store/login_store';

function M_header(props) {
    // const [isLogin, setIsLogin] = useState(sessionStorage.getItem('login'));
    let { storegeFn, storege, isLogined } = loginStore();
    console.log(isLogined)

    let [menuOn, setMenuOn] = useState(false);
    const menuClick = () => {
        setMenuOn(!menuOn)
    }

    const logout = () => {
        storegeFn('logout')
    }

    return (
        <header className={menuOn ? 'on' : ''}>
            <h1 className='Logo'><Link href='/'><Image src='/images/logo.png' alt='logo' width={153} height={30} />Mov_logo</Link></h1>
            <div className={menuOn ? "menu_btn on" : "menu_btn"} onClick={menuClick}><span>menu</span></div>
            <div className='menu'>
                <nav>
                    <form >
                        <input type="text" />
                        <Image src='/images/search_icon.png' alt='search' width={18} height={18} />
                    </form>
                    <Link href="/reserve">Ticket</Link>
                    <Link href={isLogined ? "/" : "/login"} onClick={logout}>{isLogined ? 'Logout' : 'Login'}</Link>
                    <Link href="/mypage">My page</Link>
                </nav>
            </div>
            <div className={menuOn ? 'sub_menu on' : 'sub_menu'}>
                <form>
                    <input type="text" placeholder='검색어를 입력하세요' />
                    <Image src='/images/search_icon.png' alt='search' width={18} height={18} />
                </form>
                <div className='search_record'>
                    <p># 아바타</p>
                    <p># 조정석</p>
                    <p># 마블</p>
                    <p># 송우민</p>
                    <p># 지연</p>
                </div>
                <div className='linked'>
                    <Link href="/reserve" onClick={() => setMenuOn(false)}>Ticket</Link>
                    <Link href={storege ? "/" : "/login"} onClick={logout}>{isLogined ? 'Logout' : 'Login'}</Link>
                    <Link href="/mypage" onClick={() => setMenuOn(false)}>My page</Link>
                </div>
            </div>
        </header>
    );
}

export default M_header;