import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import '../style/header.scss';
function M_header(props) {
    return (
        <header>
            <h1 className='Logo'><Link href='/'><Image src='/images/logo.png' alt='logo' width={153} height={30}/>Mov_logo</Link></h1>
            <div className="menu_btn"><span>menu</span></div>
            <div className='menu'>
                <nav>
                    <form >
                        <input type="text" />
                        <Image src='/images/search_icon.png' alt='search' width={18} height={18}/>
                    </form>
                    <Link href="/reserve">Ticket</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/mypage">My page</Link>
                </nav>
            </div>
            
        </header>
    );
}

export default M_header;