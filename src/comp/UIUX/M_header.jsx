import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import '../style/header.scss';
function M_header(props) {
    return (
        <header>
            <h1 className='Logo'><Image src='/images/logo.png' layout='responsive' alt='logo' width={100} height={100}/></h1>
            <form>
                <input type="text" />
                <Link href="/reserve">Ticket</Link>
                <Link href="/login">Login</Link>
                <Link href="/mypage">My page</Link>
            </form>
        </header>
    );
}

export default M_header;