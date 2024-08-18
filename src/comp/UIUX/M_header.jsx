import Link from 'next/link';
import React from 'react';
function M_header(props) {
    return (
        <header>
            <h1 className='Logo'>로고이미지</h1>
            <form>
                <input type="text" />
                <Link href="">Ticket</Link>
                <Link href="">Login</Link>
                <Link href="">My page</Link>
            </form>
        </header>
    );
}

export default M_header;