import Link from 'next/link';
import React from 'react';
function M_header(props) {
    return (
        <header>
            <h1 className='Logo'>로고이미지</h1>
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